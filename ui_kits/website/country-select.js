/* ============================================================
   FELŌRA · country & currency selector
   Renders into any element with class .js-country-select.
   Persists selection to localStorage. Optionally swaps prices:
     <span data-price data-gbp="230" data-usd="289" data-cad="394">£230</span>
   ============================================================ */
(function () {
  const REGIONS = [
    { code: 'UK', name: 'United Kingdom', currency: 'GBP', symbol: '£' },
    { code: 'US', name: 'United States',  currency: 'USD', symbol: '$' },
    { code: 'CA', name: 'Canada',         currency: 'CAD', symbol: '$' },
  ];
  const STORAGE_KEY = 'felora.region';

  function getRegion() {
    const stored = (function () {
      try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
    })();
    return REGIONS.find(r => r.code === stored) || REGIONS[0];
  }
  function setRegion(code) {
    try { localStorage.setItem(STORAGE_KEY, code); } catch (e) {}
  }

  function fmtAmount(amount, region) {
    // amount expected as a number; format with thousands sep + symbol.
    const n = Number(amount);
    if (Number.isNaN(n)) return '';
    // Keep integer pricing for whole pounds/dollars; show decimals only if present
    const hasFraction = n !== Math.floor(n);
    const body = hasFraction
      ? n.toLocaleString('en', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
      : Math.round(n).toLocaleString('en');
    return region.symbol + body;
  }

  function syncPrices(region) {
    document.querySelectorAll('[data-price]').forEach(el => {
      const key = region.currency.toLowerCase(); // gbp | usd | cad
      const v = el.getAttribute('data-' + key);
      if (v != null && v !== '') el.textContent = fmtAmount(v, region);
    });
  }

  function buildSelect(host, current) {
    host.innerHTML = '';
    host.classList.add('country-select');
    // Trigger button
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'country-select__btn';
    btn.setAttribute('aria-haspopup', 'listbox');
    btn.setAttribute('aria-expanded', 'false');
    btn.innerHTML = `
      <span class="country-select__code">${current.code}</span>
      <span class="country-select__sep" aria-hidden="true">·</span>
      <span class="country-select__cur">${current.currency} ${current.symbol}</span>
      <span class="country-select__chev" aria-hidden="true">
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path d="M2 4l3 3 3-3"/></svg>
      </span>
    `;
    host.appendChild(btn);

    // Panel
    const panel = document.createElement('div');
    panel.className = 'country-select__panel';
    panel.setAttribute('role', 'listbox');
    panel.hidden = true;
    panel.innerHTML = `
      <span class="caption country-select__head">Ship to</span>
      ${REGIONS.map(r => `
        <button type="button" class="country-select__option${r.code === current.code ? ' is-active' : ''}" role="option" data-code="${r.code}">
          <span class="country-select__opt-code">${r.code}</span>
          <span class="country-select__opt-name">${r.name}</span>
          <span class="country-select__opt-cur">${r.currency} ${r.symbol}</span>
        </button>
      `).join('')}
    `;
    host.appendChild(panel);

    // Open/close
    let open = false;
    function setOpen(v) {
      open = v;
      panel.hidden = !v;
      btn.setAttribute('aria-expanded', String(v));
      host.classList.toggle('is-open', v);
    }
    btn.addEventListener('click', e => {
      e.stopPropagation();
      setOpen(!open);
    });
    document.addEventListener('click', e => {
      if (open && !host.contains(e.target)) setOpen(false);
    });
    document.addEventListener('keydown', e => {
      if (open && e.key === 'Escape') setOpen(false);
    });

    // Select
    panel.querySelectorAll('.country-select__option').forEach(opt => {
      opt.addEventListener('click', () => {
        const code = opt.dataset.code;
        setRegion(code);
        const region = REGIONS.find(r => r.code === code) || REGIONS[0];
        // Update every selector on the page in lockstep
        document.querySelectorAll('.js-country-select').forEach(h => buildSelect(h, region));
        syncPrices(region);
        setOpen(false);
      });
    });
  }

  function init() {
    const region = getRegion();
    document.querySelectorAll('.js-country-select').forEach(host => buildSelect(host, region));
    syncPrices(region);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
