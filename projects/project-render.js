(function () {
  var lastLightboxTrigger = null;

  function getFocusableElements(container) {
    if (!container) return [];
    return Array.prototype.slice.call(
      container.querySelectorAll('button, [href], [tabindex]:not([tabindex="-1"])')
    ).filter(function (el) {
      return !el.hasAttribute('disabled') && !el.getAttribute('aria-hidden');
    });
  }

  function trapFocusInContainer(e, container) {
    if (e.key !== 'Tab') return;
    var focusables = getFocusableElements(container);
    if (!focusables.length) return;
    var first = focusables[0];
    var last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  function escapeAttr(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/</g, '&lt;');
  }

  function stripHtmlEntities(str) {
    return String(str)
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"');
  }

  function escapeHtmlText(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  function withBase(path) {
    if (!path) return '';
    if (/^(https?:)?\/\//.test(path)) return path;
    var base = window.SITE_BASEURL || '';
    return base + '/' + String(path).replace(/^\/+/, '');
  }

  function buildOverlayBodyHTML(body, numColor) {
    var accent = numColor || '#487de7';
    if (!Array.isArray(body)) return '';
    var firstP = true;
    var parts = [];
    var i = 0;
    while (i < body.length) {
      var block = body[i];
      if (typeof block === 'string') {
        var lead = firstP ? (firstP = false, ' p-overlay-p--lead') : '';
        parts.push('<p class="p-overlay-p' + lead + '">' + block + '</p>');
        i++;
      } else if (block && typeof block === 'object' && block.kicker) {
        var listHTML = '';
        if (Array.isArray(block.bullets)) {
          var li = block.bullets.map(function (t) { return '<li>' + t + '</li>'; }).join('');
          listHTML = '<ul class="p-overlay-list">' + li + '</ul>';
        } else if (Array.isArray(block.numbered)) {
          var oli = block.numbered.map(function (t) { return '<li>' + t + '</li>'; }).join('');
          listHTML = '<ol class="p-overlay-olist">' + oli + '</ol>';
        }
        parts.push('<div class="p-overlay-kicker-section" style="border-color:' + accent + '"><p class="p-overlay-kicker" style="color:' + accent + '">' + block.kicker + '</p>' + listHTML + '</div>');
        i++;
      } else {
        i++;
      }
    }
    return parts.join('');
  }

  var GRADIENTS = { '01': 'linear-gradient(135deg,#e81416 0%,#ffa500 100%)', '02': 'linear-gradient(135deg,#ffa500 0%,#79c314 100%)', '03': 'linear-gradient(135deg,#79c314 0%,#487de7 100%)', '04': 'linear-gradient(135deg,#487de7 0%,#70369d 100%)', '05': 'linear-gradient(135deg,#70369d 0%,#4b369d 100%)', '06': 'linear-gradient(135deg,#4b369d 0%,#487de7 100%)', '07': 'linear-gradient(135deg,#487de7 0%,#79c314 100%)', '08': 'linear-gradient(135deg,#79c314 0%,#e6d000 100%)', '09': 'linear-gradient(135deg,#e6d000 0%,#ffa500 100%)', '10': 'linear-gradient(135deg,#ffa500 0%,#e81416 100%)' };
  var ORB_COLORS = { '01': ['rgba(232,20,22,0.28)', 'rgba(255,165,0,0.22)'], '02': ['rgba(255,165,0,0.28)', 'rgba(121,195,20,0.22)'], '03': ['rgba(121,195,20,0.26)', 'rgba(72,125,231,0.22)'], '04': ['rgba(72,125,231,0.28)', 'rgba(112,54,157,0.22)'], '05': ['rgba(112,54,157,0.28)', 'rgba(75,54,157,0.22)'], '06': ['rgba(75,54,157,0.28)', 'rgba(72,125,231,0.22)'], '07': ['rgba(72,125,231,0.26)', 'rgba(121,195,20,0.22)'], '08': ['rgba(121,195,20,0.26)', 'rgba(230,208,0,0.22)'], '09': ['rgba(230,208,0,0.28)', 'rgba(255,165,0,0.22)'], '10': ['rgba(255,165,0,0.28)', 'rgba(232,20,22,0.22)'] };

  function buildCaseStudyHTML(p) {
    var aiParas = Array.isArray(p.aiDesc) ? p.aiDesc.filter(Boolean) : (p.aiDesc ? [p.aiDesc] : []);
    var aiBodyHTML = aiParas.map(function (t) { return '<p>' + t + '</p>'; }).join('');
    var aiBlock = p.aiAssisted && aiParas.length ? '\n      <div class="p-overlay-ai">\n        <div class="p-ai-head">\n          <span class="p-ai-icon">✦</span>\n          <span class="p-ai-label">How I leveraged AI</span>\n        </div>\n        ' + aiBodyHTML + '\n      </div>' : '';

    var screens = Array.isArray(p.screens) ? p.screens : [];
    var screensHTML = screens.map(function (s) {
      var hasImg = Boolean(s.img);
      var bg = s.gradient || 'linear-gradient(135deg, #2a2a2a 0%, #111 100%)';
      var src = withBase(s.img);
      var imgEl = hasImg ? '<img class="p-screen-img" src="' + escapeAttr(src) + '" alt="' + escapeAttr(stripHtmlEntities(s.label)) + '" loading="lazy" width="1200" height="675" draggable="false" />' : '';
      var cls = 'p-screen' + (hasImg ? ' p-screen--has-img' : '');
      var captionText = (s.caption != null && s.caption !== '') ? s.caption : stripHtmlEntities(s.label);
      var ph = s.placeholder === true;
      var phBadge = ph ? '<span class="p-screen-ph">Unconfirmed</span>' : '';
      var hint = hasImg ? '<span class="p-screen-expand-hint">Expand</span>' : '';
      var dataLb = hasImg
        ? ' data-lb-src="' + escapeAttr(src) + '" data-lb-caption="' + escapeAttr(captionText) + '" data-lb-alt="' + escapeAttr(stripHtmlEntities(s.label)) + '" data-lb-placeholder="' + (ph ? '1' : '0') + '"'
        : '';
      var a11yOpen = hasImg ? escapeAttr('View larger — ' + captionText) : '';
      var tabRole = hasImg ? ' tabindex="0" role="button" aria-label="' + a11yOpen + '"' : '';
      return '<div class="' + cls + '" style="background:' + bg + '"' + dataLb + tabRole + '>' + imgEl + phBadge + hint + '<span class="p-screen-label">' + s.label + '</span></div>';
    }).join('');

    var bodyHTML = buildOverlayBodyHTML(p.body, p.numColor);
    var tags = Array.isArray(p.tags) ? p.tags : [];
    var tagsHTML = tags.map(function (t) { return '<span class="p-tag">' + t + '</span>'; }).join('');
    var tagsSectionLabel = (p.tagsSectionLabel != null && p.tagsSectionLabel !== '') ? p.tagsSectionLabel : 'Skills & Tools';

    var orbs = ORB_COLORS[p.num] || ORB_COLORS['01'];
    var headerGradient = GRADIENTS[p.num] || 'linear-gradient(115deg,#e81416,#ffa500)';
    var aiPillHeader = p.aiAssisted ? '<span class="p-overlay-header-ai">✦ AI Assisted</span>' : '';
    var metricBlock = p.impact ? '\n      <div class="p-overlay-header-metric">\n        <span class="p-overlay-header-metric-num" style="--overlay-gradient:' + headerGradient + '">' + p.impact.num + '</span>\n        <span class="p-overlay-header-metric-label">' + p.impact.label + '</span>\n      </div>' : '';

    return '\n      <div class="p-overlay-header" style="--overlay-accent:' + p.numColor + '">\n        <div class="p-overlay-header-orb p-overlay-header-orb-1" style="background:' + orbs[0] + '"></div>\n        <div class="p-overlay-header-orb p-overlay-header-orb-2" style="background:' + orbs[1] + '"></div>\n        <div class="p-overlay-header-inner">\n          <div class="p-overlay-header-puzzle"><svg viewBox="0 0 490 471" fill="#1C1917" xmlns="http://www.w3.org/2000/svg"><path d="M423.658,234.356c-12.438-0.003-24.01,3.457-33.869,9.468c-3.709,2.262-8.354,2.345-12.141,0.216s-6.121-6.137-6.121-10.482V155.4c0-12.027-10.109-21.7-22.139-21.7h-95.748c-4.252,0-8.188-2.248-10.349-5.909c-2.161-3.662-2.23-8.196-0.172-11.917c5.22-9.429,8.19-20.296,8.19-31.821c0-36.233-29.374-65.627-65.617-65.627c-36.232,0-65.601,29.404-65.601,65.638c0,11.523,2.97,22.385,8.187,31.811c2.061,3.723,1.999,8.258-0.163,11.923c-2.163,3.665-6.102,5.902-10.356,5.902H22.014c-12.032,0-22.013,9.673-22.013,21.7v76.237c0,4.231,2.226,8.15,5.859,10.318c3.633,2.168,8.143,2.27,11.864,0.257c9.267-5.012,19.876-7.858,31.151-7.855c36.239-0.005,65.612,29.377,65.612,65.612c0,36.238-29.373,65.616-65.612,65.606c-11.276,0-21.885-2.847-31.152-7.857c-3.725-2.014-8.234-1.92-11.871,0.25C2.216,360.139,0,364.061,0,368.294v80.76c0,12.033,9.98,21.784,22.013,21.784h327.375c12.027,0,22.139-9.751,22.139-21.784v-82.681c0-4.342,2.344-8.346,6.127-10.475c3.783-2.127,8.426-2.053,12.135,0.207c9.857,6.011,21.432,9.47,33.867,9.47c36.24,0.01,65.607-29.368,65.607-65.606C489.264,263.734,459.896,234.351,423.658,234.356z"/></svg></div>\n          <div class="p-overlay-header-meta">\n            <span class="p-overlay-header-num">' + p.num + '</span>\n            <div class="p-overlay-header-divider"></div>\n            <span class="p-overlay-header-cat">' + p.category + '</span>\n            ' + aiPillHeader + '\n          </div>\n          <h2 class="p-overlay-title">' + p.title + '</h2>\n          ' + metricBlock + '\n        </div>\n      </div>\n      <div class="p-overlay-inner" style="--overlay-accent:' + p.numColor + '">\n        <div class="p-overlay-body">' + bodyHTML + '</div>\n        ' + aiBlock + '\n        <div class="p-overlay-screens">' + screensHTML + '</div>\n        <div class="p-overlay-tags-wrap">\n          <h3 class="p-overlay-tags-head">' + escapeHtmlText(tagsSectionLabel) + '</h3>\n          <div class="p-overlay-tags">' + tagsHTML + '</div>\n        </div>\n      </div>\n    ';
  }

  function openImgLightbox(el) {
    if (!el || !el.dataset.lbSrc) return;
    var root = document.getElementById('projectRoot');
    var lb = document.getElementById('imgLightbox');
    var img = document.getElementById('imgLightboxImg');
    var cap = document.getElementById('imgLightboxCap');
    var note = document.getElementById('imgLightboxNote');
    if (!lb || !img || !cap || !note) return;
    lastLightboxTrigger = document.activeElement;
    img.src = el.dataset.lbSrc;
    img.alt = el.dataset.lbAlt || '';
    cap.textContent = el.dataset.lbCaption || '';
    var ph = el.dataset.lbPlaceholder === '1';
    note.hidden = !ph;
    note.textContent = ph
      ? 'Unconfirmed image: not yet verified as the exact artifact for this section. Replace when you have a definitive screenshot.'
      : '';
    lb.classList.add('open');
    lb.setAttribute('aria-hidden', 'false');
    if (root) root.setAttribute('aria-hidden', 'true');
    var closeBtn = document.getElementById('imgLightboxX');
    if (closeBtn) closeBtn.focus();
  }

  function closeImgLightbox() {
    var root = document.getElementById('projectRoot');
    var lb = document.getElementById('imgLightbox');
    var img = document.getElementById('imgLightboxImg');
    var cap = document.getElementById('imgLightboxCap');
    var note = document.getElementById('imgLightboxNote');
    if (!lb || !img || !cap || !note) return;
    lb.classList.remove('open');
    lb.setAttribute('aria-hidden', 'true');
    img.src = '';
    img.alt = '';
    cap.textContent = '';
    note.hidden = true;
    if (root) root.setAttribute('aria-hidden', 'false');
    if (lastLightboxTrigger && typeof lastLightboxTrigger.focus === 'function') {
      lastLightboxTrigger.focus();
    }
  }

  function wireLightbox() {
    var root = document.getElementById('projectRoot');
    if (!root) return;
    root.addEventListener('click', function (e) {
      var lb = e.target.closest('[data-lb-src]');
      if (!lb) return;
      e.preventDefault();
      openImgLightbox(lb);
    });
    root.addEventListener('keydown', function (e) {
      if (e.key !== 'Enter' && e.key !== ' ') return;
      var lb = e.target.closest('[data-lb-src]');
      if (!lb) return;
      e.preventDefault();
      openImgLightbox(lb);
    });
    var scrim = document.getElementById('imgLightboxScrim');
    var closeBtn = document.getElementById('imgLightboxX');
    if (scrim) scrim.addEventListener('click', closeImgLightbox);
    if (closeBtn) closeBtn.addEventListener('click', closeImgLightbox);
    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape') return;
      var box = document.getElementById('imgLightbox');
      if (box && box.classList.contains('open')) closeImgLightbox();
    });
    document.addEventListener('keydown', function (e) {
      var box = document.getElementById('imgLightbox');
      if (!box || !box.classList.contains('open')) return;
      trapFocusInContainer(e, box);
    });
  }

  var root = document.getElementById('projectRoot');
  if (!root || !window.PROJECTS) return;
  var projectId = root.dataset.projectId;
  var p = window.PROJECTS[projectId];
  if (!p) {
    root.innerHTML = '<div class="p-overlay-inner"><p class="p-overlay-p">Project not found.</p></div>';
    return;
  }
  root.innerHTML = buildCaseStudyHTML(p);
  wireLightbox();
})();
