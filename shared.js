/* Tweaks panel: accent hue toggle */
(function () {
    const TWEAKS = /*EDITMODE-BEGIN*/{
        "accent": "cyan"
    }/*EDITMODE-END*/;

    function apply(state) {
        document.documentElement.setAttribute('data-accent', state.accent);
        document.querySelectorAll('[data-tweak-accent]').forEach(el => {
            el.querySelectorAll('button').forEach(b => {
                b.classList.toggle('on', b.dataset.value === state.accent);
            });
        });
    }

    let state = { ...TWEAKS };
    apply(state);

    function wirePanel() {
        const panel = document.getElementById('tweaks-panel');
        if (!panel) return;
        panel.querySelectorAll('[data-tweak-accent] button').forEach(btn => {
            btn.addEventListener('click', () => {
                state.accent = btn.dataset.value;
                apply(state);
                try {
                    window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { accent: state.accent } }, '*');
                } catch (e) {}
            });
        });
    }

    window.addEventListener('message', (e) => {
        if (!e.data) return;
        if (e.data.type === '__activate_edit_mode') {
            document.getElementById('tweaks-panel')?.classList.add('on');
        } else if (e.data.type === '__deactivate_edit_mode') {
            document.getElementById('tweaks-panel')?.classList.remove('on');
        }
    });

    window.addEventListener('DOMContentLoaded', () => {
        wirePanel();
        try {
            window.parent.postMessage({ type: '__edit_mode_available' }, '*');
        } catch (e) {}
    });
})();

/* Small clock in nav */
(function () {
    function tick() {
        const els = document.querySelectorAll('[data-clock]');
        if (!els.length) return;
        const d = new Date();
        const pad = n => String(n).padStart(2, '0');
        const s = `${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}:${pad(d.getUTCSeconds())} UTC`;
        els.forEach(el => el.textContent = s);
    }
    tick();
    setInterval(tick, 1000);
})();

/* Mobile hamburger menu */
(function () {
    function initHamburger() {
        const toggle = document.querySelector('.nav-toggle');
        const navLinks = document.querySelector('.nav-links');
        if (!toggle || !navLinks) return;

        function openMenu() {
            toggle.setAttribute('aria-expanded', 'true');
            toggle.setAttribute('aria-label', 'Close menu');
            navLinks.classList.add('is-open');
            document.body.classList.add('nav-open');
        }
        function closeMenu() {
            toggle.setAttribute('aria-expanded', 'false');
            toggle.setAttribute('aria-label', 'Open menu');
            navLinks.classList.remove('is-open');
            document.body.classList.remove('nav-open');
        }

        toggle.addEventListener('click', () => {
            toggle.getAttribute('aria-expanded') === 'true' ? closeMenu() : openMenu();
        });
        navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
        document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
    }

    document.readyState === 'loading'
        ? document.addEventListener('DOMContentLoaded', initHamburger)
        : initHamburger();
})();

