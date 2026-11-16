const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

const hoverKeyframes = {
    'anim-crown': [
        { transform: 'translateY(0) scale(1.12) rotate(0deg)' },
        { transform: 'translateY(-6px) scale(1.18) rotate(-8deg)' },
        { transform: 'translateY(-2px) scale(1.14) rotate(0deg)' },
        { transform: 'translateY(-6px) scale(1.18) rotate(8deg)' },
        { transform: 'translateY(0) scale(1.12) rotate(0deg)' }
    ],
    'anim-spin': [
        { transform: 'scale(1.12) rotate(0deg)' },
        { transform: 'scale(1.22) rotate(180deg)' },
        { transform: 'scale(1.12) rotate(360deg)' }
    ],
    'anim-radiant': [
        { transform: 'scale(1.12)' },
        { transform: 'scale(1.16)' },
        { transform: 'scale(1.12)' }
    ],
    'anim-float': [
        { transform: 'translateY(0) scale(1.12)' },
        { transform: 'translateY(-5px) scale(1.16)' },
        { transform: 'translateY(0) scale(1.12)' }
    ],
    'anim-fusion': [
        { transform: 'rotate(0deg)', offset: 0, easing: 'cubic-bezier(0.45, 0.05, 0.55, 0.95)' },
        { transform: 'rotate(60deg)', offset: 0.65 },
        { transform: 'rotate(60deg)', offset: 1 }
    ],
    'anim-sway': [
        { transform: 'translateY(0) scale(1.12)' },
        { transform: 'translateY(-4px) scale(1.15)' },
        { transform: 'translateY(0) scale(1.12)' }
    ],
    'anim-pulse': [
        { transform: 'scale(1.1)' },
        { transform: 'scale(1.15)' },
        { transform: 'scale(1.1)' }
    ],
    'anim-orbit': [
        { transform: 'scale(1.12) rotate(-3deg)' },
        { transform: 'scale(1.16) rotate(3deg)' },
        { transform: 'scale(1.12) rotate(-3deg)' }
    ],
    'anim-chest': [
        { transform: 'translateY(0) scale(1.12) rotate(0deg)', offset: 0 },
        { transform: 'translateY(-4px) scale(1.16) rotate(-5deg)', offset: 0.2 },
        { transform: 'translateY(-4px) scale(1.16) rotate(5deg)', offset: 0.4 },
        { transform: 'translateY(-1px) scale(1.14) rotate(-2deg)', offset: 0.6 },
        { transform: 'translateY(-1px) scale(1.14) rotate(2deg)', offset: 0.8 },
        { transform: 'translateY(0) scale(1.12) rotate(0deg)', offset: 1 }
    ],
    'anim-unlock': [
        { transform: 'translateY(0) scale(1) rotate(0deg)' },
        { transform: 'translateY(-3px) scale(1.16) rotate(-10deg)' }
    ],
    'anim-case-donate': [{ transform: 'scale(1.08)' }, { transform: 'scale(1.13)', offset: 0.4 }, { transform: 'scale(1.08)' }],
    'anim-case-hypes':  [{ transform: 'scale(1.08)' }, { transform: 'scale(1.13)', offset: 0.4 }, { transform: 'scale(1.08)' }],
    'anim-case-kits':   [{ transform: 'scale(1.08)' }, { transform: 'scale(1.13)', offset: 0.4 }, { transform: 'scale(1.08)' }],
    'anim-case-money':  [{ transform: 'scale(1.08)' }, { transform: 'scale(1.13)', offset: 0.4 }, { transform: 'scale(1.08)' }],
    'anim-case-prefix': [{ transform: 'scale(1.08)' }, { transform: 'scale(1.13)', offset: 0.4 }, { transform: 'scale(1.08)' }]
};

const hoverDurations = {
    'anim-crown': 1300,
    'anim-spin': 2200,
    'anim-radiant': 2400,
    'anim-float': 2200,
    'anim-fusion': 1200,
    'anim-sway': 2000,
    'anim-pulse': 2000,
    'anim-orbit': 3000,
    'anim-chest': 850,
    'anim-unlock': 300,
    'anim-case-donate': 1400,
    'anim-case-hypes':  1400,
    'anim-case-kits':   1400,
    'anim-case-money':  1400,
    'anim-case-prefix': 1400
};

const subPartConfigs = {
    'anim-radiant': [
        { selector: '.svg-rays', frames: [{ transform: 'rotate(0deg)' }, { transform: 'rotate(360deg)' }], duration: 7000, easing: 'linear' },
        { selector: '.svg-core', frames: [{ transform: 'scale(0.85)' }, { transform: 'scale(1.2)' }, { transform: 'scale(0.85)' }], duration: 1400, easing: 'ease-in-out' }
    ],
    'anim-float': [
        { selector: '.petal-left', frames: [{ transform: 'rotate(0deg)' }, { transform: 'rotate(-16deg) translateX(-1px)' }, { transform: 'rotate(0deg)' }], duration: 2200, easing: 'ease-in-out' },
        { selector: '.petal-right', frames: [{ transform: 'rotate(0deg)' }, { transform: 'rotate(16deg) translateX(1px)' }, { transform: 'rotate(0deg)' }], duration: 2200, easing: 'ease-in-out' },
        { selector: '.petal-center', frames: [{ transform: 'translateY(0) scaleY(1)' }, { transform: 'translateY(-1.5px) scaleY(1.08)' }, { transform: 'translateY(0) scaleY(1)' }], duration: 2200, easing: 'ease-in-out' }
    ],
    'anim-sway': [
        { selector: '.solace-wing-l', frames: [{ transform: 'rotate(0deg)' }, { transform: 'rotate(16deg)' }, { transform: 'rotate(0deg)' }], duration: 1500, easing: 'ease-in-out' },
        { selector: '.solace-wing-r', frames: [{ transform: 'rotate(0deg)' }, { transform: 'rotate(-16deg)' }, { transform: 'rotate(0deg)' }], duration: 1500, easing: 'ease-in-out' },
        { selector: '.solace-center', frames: [{ transform: 'scale(0.95)' }, { transform: 'scale(1.12)' }, { transform: 'scale(0.95)' }], duration: 1500, easing: 'ease-in-out' }
    ],
    'anim-orbit': [
        { selector: '.nebula-moon', frames: [{ transform: 'rotate(0deg)' }, { transform: 'rotate(360deg)' }], duration: 3200, easing: 'linear' },
        { selector: '.nebula-star', frames: [{ transform: 'scale(0.6) rotate(0deg)', opacity: 0.5 }, { transform: 'scale(1.35) rotate(90deg)', opacity: 1 }, { transform: 'scale(0.6) rotate(180deg)', opacity: 0.5 }], duration: 1800, easing: 'ease-in-out' }
    ],
    'anim-pulse': [
        { selector: '.echo-crystal', frames: [{ transform: 'scale(0.95)' }, { transform: 'scale(1.08)' }, { transform: 'scale(0.95)' }], duration: 1600, easing: 'ease-in-out' },
        { selector: '.echo-wave-inner', frames: [{ transform: 'scale(0.94)', opacity: 0.65 }, { transform: 'scale(1.06)', opacity: 1 }, { transform: 'scale(0.94)', opacity: 0.65 }], duration: 1600, easing: 'ease-in-out' },
        { selector: '.echo-wave-outer', frames: [{ transform: 'scale(0.9)', opacity: 0.35 }, { transform: 'scale(1.08)', opacity: 1 }, { transform: 'scale(0.9)', opacity: 0.35 }], duration: 1600, easing: 'ease-in-out' }
    ],
    'anim-case-donate': [
        { selector: '.case-chest', frames: [
            { transform: 'translateY(0) rotate(0deg)', offset: 0 },
            { transform: 'translateY(-2.5px) rotate(-4deg)', offset: 0.25 },
            { transform: 'translateY(-2.5px) rotate(4deg)', offset: 0.5 },
            { transform: 'translateY(-1px) rotate(-2deg)', offset: 0.72 },
            { transform: 'translateY(0) rotate(0deg)', offset: 1 }
        ], duration: 1400, easing: 'ease-in-out' },
        { selector: '.case-top', frames: [
            { transform: 'translateY(0) scale(1) rotate(0deg)', offset: 0 },
            { transform: 'translateY(-4.5px) scale(1.15) rotate(-10deg)', offset: 0.3 },
            { transform: 'translateY(-4.5px) scale(1.15) rotate(10deg)', offset: 0.6 },
            { transform: 'translateY(0) scale(1) rotate(0deg)', offset: 1 }
        ], duration: 1400, easing: 'ease-in-out' }
    ],
    'anim-case-hypes': [
        { selector: '.case-chest', frames: [
            { transform: 'translateY(0) rotate(0deg)', offset: 0 },
            { transform: 'translateY(-2.5px) rotate(-4deg)', offset: 0.25 },
            { transform: 'translateY(-2.5px) rotate(4deg)', offset: 0.5 },
            { transform: 'translateY(-1px) rotate(-2deg)', offset: 0.72 },
            { transform: 'translateY(0) rotate(0deg)', offset: 1 }
        ], duration: 1400, easing: 'ease-in-out' },
        { selector: '.case-top', frames: [
            { transform: 'translateY(0) scale(1) rotate(0deg)', offset: 0 },
            { transform: 'translateY(-4.5px) scale(1.18) rotate(180deg)', offset: 0.5 },
            { transform: 'translateY(0) scale(1) rotate(360deg)', offset: 1 }
        ], duration: 1400, easing: 'ease-in-out' }
    ],
    'anim-case-kits': [
        { selector: '.case-chest', frames: [
            { transform: 'translateY(0) rotate(0deg)', offset: 0 },
            { transform: 'translateY(-2.5px) rotate(-4deg)', offset: 0.25 },
            { transform: 'translateY(-2.5px) rotate(4deg)', offset: 0.5 },
            { transform: 'translateY(-1px) rotate(-2deg)', offset: 0.72 },
            { transform: 'translateY(0) rotate(0deg)', offset: 1 }
        ], duration: 1400, easing: 'ease-in-out' },
        { selector: '.case-top', frames: [
            { transform: 'translateY(0) rotate(0deg)', offset: 0, easing: 'ease-in' },
            { transform: 'translateY(-4.5px) rotate(-42deg)', offset: 0.5, easing: 'cubic-bezier(0.16, 1, 0.3, 1)' },
            { transform: 'translateY(-0.5px) rotate(22deg)', offset: 0.72, easing: 'ease-in-out' },
            { transform: 'translateY(0) rotate(0deg)', offset: 1 }
        ], duration: 1400 }
    ],
    'anim-case-money': [
        { selector: '.case-chest', frames: [
            { transform: 'translateY(0) rotate(0deg)', offset: 0 },
            { transform: 'translateY(-2.5px) rotate(-4deg)', offset: 0.25 },
            { transform: 'translateY(-2.5px) rotate(4deg)', offset: 0.5 },
            { transform: 'translateY(-1px) rotate(-2deg)', offset: 0.72 },
            { transform: 'translateY(0) rotate(0deg)', offset: 1 }
        ], duration: 1400, easing: 'ease-in-out' },
        { selector: '.case-top', frames: [
            { transform: 'translateY(0) scaleX(1)', offset: 0 },
            { transform: 'translateY(-4.5px) scaleX(0.1)', offset: 0.25 },
            { transform: 'translateY(-4.5px) scaleX(1)', offset: 0.45 },
            { transform: 'translateY(-4px) scaleX(0.1)', offset: 0.65 },
            { transform: 'translateY(0) scaleX(1)', offset: 1 }
        ], duration: 1400, easing: 'ease-in-out' }
    ],
    'anim-case-prefix': [
        { selector: '.case-chest', frames: [
            { transform: 'translateY(0) rotate(0deg)', offset: 0 },
            { transform: 'translateY(-2.5px) rotate(-4deg)', offset: 0.25 },
            { transform: 'translateY(-2.5px) rotate(4deg)', offset: 0.5 },
            { transform: 'translateY(-1px) rotate(-2deg)', offset: 0.72 },
            { transform: 'translateY(0) rotate(0deg)', offset: 1 }
        ], duration: 1400, easing: 'ease-in-out' },
        { selector: '.case-top', frames: [
            { transform: 'translateY(0) rotate(0deg)', offset: 0 },
            { transform: 'translateY(-3.5px) rotate(-22deg)', offset: 0.28 },
            { transform: 'translateY(-3.5px) rotate(18deg)', offset: 0.55 },
            { transform: 'translateY(-2px) rotate(-8deg)', offset: 0.78 },
            { transform: 'translateY(0) rotate(0deg)', offset: 1 }
        ], duration: 1400, easing: 'ease-in-out' }
    ]
};

function smoothResetElement(el, duration = 450) {
    if (!el) return;
    const computed = getComputedStyle(el);
    const currentTransform = computed.transform === 'none' ? 'translate(0px, 0px) scale(1) rotate(0deg)' : computed.transform;
    const currentOpacity = computed.opacity || '1';

    if (el._activeAnim) el._activeAnim.cancel();

    el._activeAnim = el.animate([
        { transform: currentTransform, opacity: currentOpacity },
        { transform: 'translate(0px, 0px) scale(1) rotate(0deg)', opacity: '1' }
    ], {
        duration,
        easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
        fill: 'forwards'
    });
}

// Анимации карточек работают только на ПК с мышью, на телефонах не залипают
if (productsArea && canHover) {
    productsArea.addEventListener('mouseover', (e) => {
        const card = e.target.closest('.product-card');
        if (!card || card.contains(e.relatedTarget)) return;

        const art = card.querySelector('.product-art');
        const svg = art ? art.querySelector('svg') : null;
        if (!svg) return;

        const animType = Object.keys(hoverKeyframes).find(cls => art.classList.contains(cls));
        if (!animType) return;

        const targetEl = animType === 'anim-fusion' ? (svg.querySelector('.fusion-spin') || svg) : svg;

        if (targetEl._activeAnim) targetEl._activeAnim.cancel();

        const isUnlock = animType === 'anim-unlock';
        targetEl._activeAnim = targetEl.animate(hoverKeyframes[animType], {
            duration: hoverDurations[animType] || 1500,
            iterations: isUnlock ? 1 : Infinity,
            fill: isUnlock ? 'forwards' : 'none',
            easing: 'ease-in-out'
        });

        const subConfigs = subPartConfigs[animType];
        if (subConfigs) {
            subConfigs.forEach(cfg => {
                const part = svg.querySelector(cfg.selector);
                if (!part) return;
                if (part._activeAnim) part._activeAnim.cancel();
                part._activeAnim = part.animate(cfg.frames, {
                    duration: cfg.duration,
                    iterations: Infinity,
                    easing: cfg.easing || 'ease-in-out'
                });
            });
        }
    });

    productsArea.addEventListener('mouseout', (e) => {
        const card = e.target.closest('.product-card');
        if (!card || card.contains(e.relatedTarget)) return;

        const art = card.querySelector('.product-art');
        const svg = art ? art.querySelector('svg') : null;
        if (!svg) return;

        if (art.classList.contains('anim-fusion')) {
            const spinEl = svg.querySelector('.fusion-spin') || svg;
            const computed = getComputedStyle(spinEl).transform;
            let currentAngle = 0;

            if (computed && computed !== 'none') {
                const values = computed.split('(')[1].split(')')[0].split(',');
                const a = parseFloat(values[0]);
                const b = parseFloat(values[1]);
                currentAngle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
                if (currentAngle < 0) currentAngle += 360;
            }

            const remainder = currentAngle % 60;
            const targetAngle = remainder === 0 ? currentAngle : currentAngle + (60 - remainder);

            if (spinEl._activeAnim) spinEl._activeAnim.cancel();

            spinEl._activeAnim = spinEl.animate([
                { transform: `rotate(${currentAngle}deg)` },
                { transform: `rotate(${targetAngle}deg)` }
            ], {
                duration: 500,
                easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
                fill: 'forwards'
            });
            return;
        }

        smoothResetElement(svg, 480);

        const animType = Object.keys(hoverKeyframes).find(cls => art.classList.contains(cls));
        const subConfigs = subPartConfigs[animType];
        if (subConfigs) {
            subConfigs.forEach(cfg => {
                const part = svg.querySelector(cfg.selector);
                smoothResetElement(part, 480);
            });
        }
    });
}

// Подсветка активной вкладки в мобильном Tab-Bar при скролле
const currencyBlock = document.getElementById('currency');
const shopBlock = document.getElementById('shop');
const tabShop = document.querySelector('.tabbar-item[data-tab="shop"]');
const tabCurrency = document.querySelector('.tabbar-item[data-tab="currency"]');

if (currencyBlock && shopBlock && tabShop && tabCurrency) {
    window.addEventListener('scroll', () => {
        const shopTop = shopBlock.getBoundingClientRect().top;
        const currTop = currencyBlock.getBoundingClientRect().top;
        const mid = window.innerHeight * 0.45;

        if (shopTop <= mid) {
            tabShop.classList.add('active');
            tabCurrency.classList.remove('active');
        } else if (currTop <= mid) {
            tabCurrency.classList.add('active');
            tabShop.classList.remove('active');
        }
    }, { passive: true });
}

syncCurrency(100, true);
renderProducts('all', false);
