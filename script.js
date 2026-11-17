// Детализированные и объемные иконки для привилегий и кейсов
const icons = {
    sword: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
  <circle cx="12" cy="12" r="4.8"/>
  <path d="M18.8 7.6C20.5 7.7 21.6 8.3 21.9 9.2C22.5 11 18.5 13.9 13 15.8C7.5 17.7 2.6 17.8 2.1 16C1.8 15.1 2.5 14 4 12.8C3.5 13.6 3.3 14.2 3.5 14.7C3.9 15.9 7.9 15.6 12.5 14C17.1 12.4 20.5 10.2 20.1 9C19.9 8.5 19.4 8.1 18.8 7.6Z"/>
  <g class="nebula-moon" style="transform-origin: 12px 12px;">
    <circle cx="18.5" cy="5.5" r="1.6"/>
  </g>
  <path class="nebula-star" style="transform-origin: 5.5px 6px;" d="M5.5 4L6.1 5.4L7.5 6L6.1 6.6L5.5 8L4.9 6.6L3.5 6L4.9 5.4L5.5 4Z"/>
</svg>`,
    shield: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
  <g class="echo-crystal" style="transform-origin: 12px 12px;">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 5L16 8.5V15.5L12 19L8 15.5V8.5L12 5ZM12 8.2L9.8 12L12 15.8L14.2 12L12 8.2Z"/>
  </g>
  <g class="echo-wave-inner" style="transform-origin: 12px 12px;">
    <path d="M6.1 8.1C5.1 9.1 4.6 10.5 4.6 12C4.6 13.5 5.1 14.9 6.1 15.9L7.4 14.6C6.7 13.9 6.4 13 6.4 12C6.4 11 6.7 10.1 7.4 9.4L6.1 8.1Z"/>
    <path d="M17.9 8.1C18.9 9.1 19.4 10.5 19.4 12C19.4 13.5 18.9 14.9 17.9 15.9L16.6 14.6C17.3 13.9 17.6 13 17.6 12C17.6 11 17.3 10.1 16.6 9.4L17.9 8.1Z"/>
  </g>
  <g class="echo-wave-outer" style="transform-origin: 12px 12px;">
    <path d="M3.8 5.8C2.5 7.4 1.8 9.6 1.8 12C1.8 14.4 2.5 16.6 3.8 18.2L5.1 16.9C4.1 15.6 3.6 13.9 3.6 12C3.6 10.1 4.1 8.4 5.1 7.1L3.8 5.8Z"/>
    <path d="M20.2 5.8C21.5 7.4 22.2 9.6 22.2 12C22.2 14.4 21.5 16.6 20.2 18.2L18.9 16.9C19.9 15.6 20.4 13.9 20.4 12C20.4 10.1 19.9 8.4 18.9 7.1L20.2 5.8Z"/>
  </g>
</svg>`,
    bolt: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
  <g class="solace-wing-l" style="transform-origin: 10px 13px;">
    <path d="M9.5 11.5C6.5 9 3.5 8.5 1.5 9.5C2.5 11.5 4.2 12.8 6.5 13.2C4.5 13.8 3.2 14.8 2.5 16.2C4.8 16.5 7.2 15.8 9.2 14.2L9.5 11.5Z"/>
  </g>
  <g class="solace-wing-r" style="transform-origin: 14px 13px;">
    <path d="M14.5 11.5C17.5 9 20.5 8.5 22.5 9.5C21.5 11.5 19.8 12.8 17.5 13.2C19.5 13.8 20.8 14.8 21.5 16.2C19.2 16.5 16.8 15.8 14.8 14.2L14.5 11.5Z"/>
  </g>
  <g class="solace-center" style="transform-origin: 12px 12px;">
    <path d="M12 4.5L14.2 9.2L19 11.5L14.2 13.8L12 18.5L9.8 13.8L5 11.5L9.8 9.2L12 4.5Z"/>
    <circle cx="12" cy="11.5" r="2" fill="currentColor"/>
  </g>
</svg>`,
    gem: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
  <g class="fusion-spin" style="transform-origin: 12px 12px;">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.5C14.2 2.5 16 6.7 16 12C16 17.3 14.2 21.5 12 21.5C9.8 21.5 8 17.3 8 12C8 6.7 9.8 2.5 12 2.5ZM12 4.5C10.9 4.5 10 7.8 10 12C10 16.2 10.9 19.5 12 19.5C13.1 19.5 14 16.2 14 12C14 7.8 13.1 4.5 12 4.5Z"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.8 7.2C4.9 5.3 9.4 6 14 8.6C18.6 11.2 21.3 14.9 20.2 16.8C19.1 18.7 14.6 18 10 15.4C5.4 12.8 2.7 9.1 3.8 7.2ZM5.5 8.2C4.9 9.2 7.3 11.6 11 13.7C14.7 15.8 18 16.8 18.5 15.8C19.1 14.8 16.7 12.4 13 10.3C9.3 8.2 6 7.2 5.5 8.2Z"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.2 7.2C21.3 9.1 18.6 12.8 14 15.4C9.4 18 4.9 18.7 3.8 16.8C2.7 14.9 5.4 11.2 10 8.6C14.6 6 19.1 5.3 20.2 7.2ZM18.5 8.2C18 7.2 14.7 8.2 11 10.3C7.3 12.4 4.9 14.8 5.5 15.8C6 16.8 9.3 15.8 13 13.7C16.7 11.6 19.1 9.2 18.5 8.2Z"/>
    <circle cx="12" cy="12" r="2.3"/>
  </g>
</svg>`,
    ghost: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
  <path class="petal-left" style="transform-origin: 12px 18px;" d="M9.5 17.5C5.5 16.5 3 13 3.5 9C6.8 9.5 9.2 12 10.2 15.5L9.5 17.5Z"/>
  <path class="petal-right" style="transform-origin: 12px 18px;" d="M14.5 17.5C18.5 16.5 21 13 20.5 9C17.2 9.5 14.8 12 13.8 15.5L14.5 17.5Z"/>
  <path class="petal-center" style="transform-origin: 12px 18px;" d="M12 3.5C14.5 6.8 15.2 11.2 13.5 16.5H10.5C8.8 11.2 9.5 6.8 12 3.5Z"/>
  <path d="M7.5 18.5H16.5L14.5 21H9.5L7.5 18.5Z"/>
</svg>`,
    flame: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
  <g class="svg-rays" style="transform-origin: 12px 12px;">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.5L13.6 5.2L17.3 3.3L16.7 7.3L20.7 7.7L18.4 11L21.8 13.3L18.1 15L19.6 18.8L15.6 18.3L15.1 22.3L12 19.7L8.9 22.3L8.4 18.3L4.4 18.8L5.9 15L2.2 13.3L5.6 11L3.3 7.7L7.3 7.3L6.7 3.3L10.4 5.2L12 1.5ZM12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7Z"/>
  </g>
  <g class="svg-core" style="transform-origin: 12px 12px;">
    <path d="M12 8.6L13.1 10.9L15.4 12L13.1 13.1L12 15.4L10.9 13.1L8.6 12L10.9 10.9L12 8.6Z"/>
  </g>
</svg>`,
    star: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
  <path d="M12 3C7.5 3 4 6.2 4 10.5C4 12.6 4.9 14.5 6.4 15.8C5.8 14.7 5.5 13.4 5.5 12C5.5 8.4 8.4 5.5 12 5.5C15.1 5.5 17.7 7.6 18.3 10.5C18.8 10.1 19.4 9.8 20 9.6C19.2 5.8 15.9 3 12 3Z"/>
  <path d="M12 21C16.5 21 20 17.8 20 13.5C20 11.4 19.1 9.5 17.6 8.2C18.2 9.3 18.5 10.6 18.5 12C18.5 15.6 15.6 18.5 12 18.5C8.9 18.5 6.3 16.4 5.7 13.5C5.2 13.9 4.6 14.2 4 14.4C4.8 18.2 8.1 21 12 21Z"/>
  <path d="M12 8C9.8 8 8 9.8 8 12C8 13.3 8.6 14.4 9.6 15.1C9.3 14.5 9.2 13.8 9.2 13C9.2 11.1 10.8 9.5 12.7 9.5C13.8 9.5 14.8 10 15.4 10.8C15.8 10.4 16.2 10.1 16.7 9.9C15.9 8.7 14.1 8 12 8Z"/>
  <circle cx="12" cy="12" r="2.2"/>
  <circle cx="19.5" cy="5.5" r="1.1"/>
  <circle cx="4.5" cy="18.5" r="1.1"/>
</svg>`,
    crown: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2L14 5L17.5 3.5L16.5 7H7.5L6.5 3.5L10 5L12 2ZM7.5 8.5H16.5L20 12.5L12 21.5L4 12.5L7.5 8.5ZM9.2 10.5L7 12.8L12 18.4L17 12.8L14.8 10.5H9.2ZM12 11.5L14 13.5L12 16L10 13.5L12 11.5Z"/>
</svg>`,
    unlock: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" fill="rgba(255,255,255,0.15)"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/></svg>`,
    donate: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
  <g class="case-top" style="transform-origin: 12px 5px;">
    <path d="M7.5 6.5L6.5 3L9.5 4.8L12 2.2L14.5 4.8L17.5 3L16.5 6.5H7.5Z" />
  </g>
  <g class="case-chest" style="transform-origin: 12px 16px;">
    <path d="M3 21.5H21V12.5C21 10.567 19.433 9 17.5 9H6.5C4.567 9 3 10.567 3 12.5V21.5Z" />
    <path d="M5.75 9.3V13.25" /><path d="M18.25 9.3V13.25" /><path d="M3 13.25H9.75" /><path d="M14.25 13.25H21" />
    <path d="M9.75 13.25H14.25V15C14.25 16.2426 13.2426 17.25 12 17.25C10.7574 17.25 9.75 16.2426 9.75 15V13.25Z" />
    <rect x="11.4" y="14.3" width="1.2" height="1.2" fill="currentColor" stroke="none" />
    <path d="M5.75 13.25V18C6.7165 18 7.5 18.7835 7.5 19.75H16.5C16.5 18.7835 17.2835 18 18.25 18V13.25" />
  </g>
</svg>`,
    hypes: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
  <g class="case-top" style="transform-origin: 12px 5.5px;">
    <path d="M12 1.8L13.1 4.1L15.6 4.4L13.8 6.1L14.2 8.5L12 7.3L9.8 8.5L10.2 6.1L8.4 4.4L10.9 4.1L12 1.8Z" />
  </g>
  <g class="case-chest" style="transform-origin: 12px 16px;">
    <path d="M3 21.5H21V13C21 11.067 19.433 9.5 17.5 9.5H6.5C4.567 9.5 3 11.067 3 13V21.5Z" />
    <path d="M5.75 9.8V13.75" /><path d="M18.25 9.8V13.75" /><path d="M3 13.75H9.75" /><path d="M14.25 13.75H21" />
    <path d="M9.75 13.75H14.25V15.5C14.25 16.7426 13.2426 17.75 12 17.75C10.7574 17.75 9.75 16.7426 9.75 15.5V13.75Z" />
    <rect x="11.4" y="14.8" width="1.2" height="1.2" fill="currentColor" stroke="none" />
    <path d="M5.75 13.75V18.25C6.7165 18.25 7.5 19.0335 7.5 20H16.5C16.5 19.0335 17.2835 18.25 18.25 18.25V13.75" />
  </g>
</svg>`,
    kits: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
  <g class="case-top" style="transform-origin: 7.5px 5px;">
    <path d="M4.5 5H7.5" /><path d="M7.5 3V7" /><path d="M7.5 3.8H17.5L19.8 5L17.5 6.2H7.5" />
  </g>
  <g class="case-chest" style="transform-origin: 12px 16px;">
    <path d="M3 21.5H21V13C21 11.067 19.433 9.5 17.5 9.5H6.5C4.567 9.5 3 11.067 3 13V21.5Z" />
    <path d="M5.75 9.8V13.75" /><path d="M18.25 9.8V13.75" /><path d="M3 13.75H9.75" /><path d="M14.25 13.75H21" />
    <path d="M9.75 13.75H14.25V15.5C14.25 16.7426 13.2426 17.75 12 17.75C10.7574 17.75 9.75 16.7426 9.75 15.5V13.75Z" />
    <rect x="11.4" y="14.8" width="1.2" height="1.2" fill="currentColor" stroke="none" />
    <path d="M5.75 13.75V18.25C6.7165 18.25 7.5 19.0335 7.5 20H16.5C16.5 19.0335 17.2835 18.25 18.25 18.25V13.75" />
  </g>
</svg>`,
    money: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
  <g class="case-top" style="transform-origin: 12px 5px;">
    <circle cx="12" cy="4.8" r="3.3" /><path d="M12 3.3V6.3" /><path d="M7 6.5C6.2 6.5 5.5 7.1 5.5 7.8" /><path d="M17 6.5C17.8 6.5 18.5 7.1 18.5 7.8" />
  </g>
  <g class="case-chest" style="transform-origin: 12px 16px;">
    <path d="M3 21.5H21V13C21 11.067 19.433 9.5 17.5 9.5H6.5C4.567 9.5 3 11.067 3 13V21.5Z" />
    <path d="M5.75 9.8V13.75" /><path d="M18.25 9.8V13.75" /><path d="M3 13.75H9.75" /><path d="M14.25 13.75H21" />
    <path d="M9.75 13.75H14.25V15.5C14.25 16.7426 13.2426 17.75 12 17.75C10.7574 17.75 9.75 16.7426 9.75 15.5V13.75Z" />
    <rect x="11.4" y="14.8" width="1.2" height="1.2" fill="currentColor" stroke="none" />
    <path d="M5.75 13.75V18.25C6.7165 18.25 7.5 19.0335 7.5 20H16.5C16.5 19.0335 17.2835 18.25 18.25 18.25V13.75" />
  </g>
</svg>`
};

const categoryTitles = {
    privileges: "Привилегии",
    cases: "Кейсы",
    services: "Разное и услуги"
};

const products = [
    { id: 1, name: "CRIMSON", category: "privileges", catLabel: "Привилегия", price: 499, priceLabel: "Навсегда", desc: "Высшая ступень величия, власть и багровое сияние.", badge: "", bg: "linear-gradient(135deg, #ef4444, #991b1b)", icon: icons.crown, anim: "anim-crown" },
    { id: 2, name: "VORTEX", category: "privileges", catLabel: "Привилегия", price: 399, priceLabel: "Навсегда", desc: "Неудержимый поток энергии в самом эпицентре событий.", badge: "", bg: "linear-gradient(135deg, #814aff, #4d0eb0)", icon: icons.star, anim: "anim-spin" },
    { id: 3, name: "RADIANT", category: "privileges", catLabel: "Привилегия", price: 299, priceLabel: "Навсегда", desc: "Ослепительный свет солнца, харизма и чистая энергия.", badge: "", bg: "linear-gradient(135deg, #f59e0b, #b45309)", icon: icons.flame, anim: "anim-radiant" },
    { id: 4, name: "LILAC", category: "privileges", catLabel: "Привилегия", price: 229, priceLabel: "Навсегда", desc: "Магия распускающегося лотоса, эстетика и тайная аура.", badge: "", bg: "linear-gradient(135deg, #8b5cf6, #5b21b6)", icon: icons.ghost, anim: "anim-float" },
    { id: 5, name: "FUSION", category: "privileges", catLabel: "Привилегия", price: 179, priceLabel: "Навсегда", desc: "Синтез чистой энергии, драйв и яркий след в каждом миге.", badge: "", bg: "linear-gradient(135deg, #ec4899, #9d174d)", icon: icons.gem, anim: "anim-fusion" },
    { id: 6, name: "SOLACE", category: "privileges", catLabel: "Привилегия", price: 129, priceLabel: "Навсегда", desc: "Гармония и защита света, спокойствие и золотой блеск.", badge: "", bg: "linear-gradient(135deg, #ffcd00, #d97706)", icon: icons.bolt, anim: "anim-sway" },
    { id: 7, name: "ECHORES", category: "privileges", catLabel: "Привилегия", price: 69, priceLabel: "Навсегда", desc: "Ритм в памяти и чистое изумрудное сияние.", badge: "", bg: "linear-gradient(135deg, #10b981, #047857)", icon: icons.shield, anim: "anim-pulse" },
    { id: 8, name: "NEBULA", category: "privileges", catLabel: "Привилегия", price: 19, priceLabel: "Навсегда", desc: "Твоя личная орбита и начало большого космического пути.", badge: "", bg: "linear-gradient(135deg, #93C5FD, #1D4ED8)", icon: icons.sword, anim: "anim-orbit" },

    { id: 9, name: "Кейс с донатом", category: "cases", catLabel: "Кейс", isDonatCase: true, priceNormal: 40, priceHyper: 200, priceLabel: "За 1 шт.", desc: "Шанс выбить топовые привилегии сервера.", badge: "", bg: "linear-gradient(135deg, #ef4444, #991b1b)", icon: icons.donate, anim: "anim-case-donate" },
    { id: 10, name: "Кейс с хайпиками", category: "cases", catLabel: "Кейс", isDonatCase: false, basePrice: 65, priceLabel: "За 1 шт.", presets: [1, 3, 5], discounts: [0, 10, 20], desc: "Выпадает от 50 до 5 000 Хайпиков на счет.", badge: "", bg: "linear-gradient(135deg, #f59e0b, #b45309)", icon: icons.hypes, anim: "anim-case-hypes" },
    { id: 11, name: "Кейс с китами", category: "cases", catLabel: "Кейс", isDonatCase: false, basePrice: 50, priceLabel: "За 1 шт.", presets: [1, 3, 5], discounts: [0, 10, 20], desc: "Редкие наборы брони, инструментов и ресурсов.", badge: "", bg: "linear-gradient(135deg, #ffcd00, #d97706)", icon: icons.kits, anim: "anim-case-kits" },
    { id: 12, name: "Кейс с валютой", category: "cases", catLabel: "Кейс", isDonatCase: false, basePrice: 35, priceLabel: "За 1 шт.", presets: [3, 10, 15], discounts: [0, 12, 25], desc: "Игровые монеты для аукциона и торговцев.", badge: "", bg: "linear-gradient(135deg, #10b981, #047857)", icon: icons.money, anim: "anim-case-money" },

    { id: 14, name: "Разбан аккаунта", category: "services", catLabel: "Услуга", price: 199, priceLabel: "Разово", desc: "Снятие блокировки аккаунта на всех режимах.", badge: "", bg: "linear-gradient(135deg, #f43f5e, #9f1239)", icon: icons.unlock, anim: "anim-unlock" },
    { id: 15, name: "Размут аккаунта", category: "services", catLabel: "Услуга", price: 99, priceLabel: "Разово", desc: "Мгновенное снятие блокировки игрового чата.", badge: "", bg: "linear-gradient(135deg, #64748b, #334155)", icon: icons.unlock, anim: "anim-unlock" }
];

const productsArea = document.getElementById('products-area');
const catBtns = document.querySelectorAll('.cat-btn');
let currentFilter = 'all';

function isAlwaysAnimatedDevice() {
    return window.matchMedia('(hover: none), (max-width: 768px)').matches;
}

function createCardHTML(item, index) {
    let displayPrice = '';
    if (item.category === 'cases') {
        displayPrice = item.isDonatCase ? `от ${item.priceNormal} ₽` : `от ${item.basePrice} ₽`;
    } else {
        displayPrice = `${item.price} ₽`;
    }

    return `
        <div class="product-card" style="animation-delay: ${index * 0.04}s">
            ${item.badge ? `<span class="badge-tag">${item.badge}</span>` : ''}
            <div class="product-art ${item.anim || ''}" style="background: ${item.bg}">
                ${item.icon}
            </div>
            <h3 class="product-name">${item.name}</h3>
            <p class="product-sub">${item.desc}</p>
            <div class="product-bottom">
                <div class="price-block">
                    <span class="price-label">${item.priceLabel || 'Навсегда'}</span>
                    <span class="price-value">${displayPrice}</span>
                </div>
                <button type="button" class="btn-card-buy" onclick="openModal(${item.id})">Купить</button>
            </div>
        </div>
    `;
}

function initMobileContinuousAnimations() {
    if (!productsArea || !isAlwaysAnimatedDevice()) return;
    productsArea.querySelectorAll('.product-card').forEach(card => {
        const art = card.querySelector('.product-art');
        if (art && art.classList.contains('anim-unlock')) return;
        startCardAnimation(card, true);
    });
}

function renderProducts(filter = 'all', animate = true) {
    const renderContent = () => {
        if (!productsArea) return;
        productsArea.innerHTML = '';

        if (filter === 'all') {
            const categoryOrder = ['privileges', 'cases', 'services'];
            categoryOrder.forEach(catKey => {
                const itemsInCat = products.filter(p => p.category === catKey);
                if (itemsInCat.length === 0) return;

                const divider = document.createElement('div');
                divider.className = 'category-divider';
                divider.innerHTML = `<span>${categoryTitles[catKey]}</span>`;
                productsArea.appendChild(divider);

                const grid = document.createElement('div');
                grid.className = 'products-grid';
                grid.innerHTML = itemsInCat.map((item, idx) => createCardHTML(item, idx)).join('');
                productsArea.appendChild(grid);
            });
        } else {
            const filtered = products.filter(p => p.category === filter);
            const grid = document.createElement('div');
            grid.className = 'products-grid';
            grid.innerHTML = filtered.map((item, idx) => createCardHTML(item, idx)).join('');
            productsArea.appendChild(grid);
        }

        initMobileContinuousAnimations();
    };

    if (!animate || !productsArea) {
        renderContent();
        return;
    }

    productsArea.classList.add('fading-out');
    setTimeout(() => {
        renderContent();
        productsArea.classList.remove('fading-out');
    }, 200);
}

function triggerCategorySplash(categoryKey, btnElement) {
    let catSplash = document.getElementById('cat-splash');
    if (!catSplash) {
        catSplash = document.createElement('div');
        catSplash.id = 'cat-splash';
        catSplash.innerHTML = `
            <div class="cat-splash-content">
                <div class="cat-splash-icon" id="cat-splash-icon"></div>
                <div class="cat-splash-title" id="cat-splash-title"></div>
            </div>
        `;
        document.body.appendChild(catSplash);
    }

    const catSplashIcon = document.getElementById('cat-splash-icon');
    const catSplashTitle = document.getElementById('cat-splash-title');

    const splashNames = {
        all: 'Все товары',
        privileges: 'Привилегии',
        cases: 'Кейсы',
        services: 'Разное и услуги'
    };

    const fallbackSvgs = {
        all: `<svg viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="3" width="7.5" height="7.5" rx="2"/><rect x="13.5" y="3" width="7.5" height="7.5" rx="2"/><rect x="3" y="13.5" width="7.5" height="7.5" rx="2"/><rect x="13.5" y="13.5" width="7.5" height="7.5" rx="2"/></svg>`,
        privileges: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 18H21V20H3V18ZM3 7L7.5 11L12 5L16.5 11L21 7L19 16H5L3 7Z"/></svg>`,
        cases: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 19.5H21V9.5C21 7.01 18.99 5 16.5 5H7.5C5.01 5 3 7.01 3 9.5V19.5Z"/><path d="M3 10.5H9.5M14.5 10.5H21"/><rect x="9.5" y="9.5" width="5" height="4" rx="1"/></svg>`,
        services: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L4 5.5V11.5C4 16.6 7.4 21.2 12 22.5C16.6 21.2 20 16.6 20 11.5V5.5L12 2ZM12 6.5L15.5 10L12 16.5L8.5 10L12 6.5Z"/></svg>`
    };

    const svgEl = btnElement ? btnElement.querySelector('svg') : null;
    catSplashIcon.innerHTML = svgEl ? svgEl.outerHTML : (fallbackSvgs[categoryKey] || fallbackSvgs.all);
    catSplashTitle.textContent = splashNames[categoryKey] || 'Все товары';

    const isMobile = window.innerWidth <= 640;
    const iconSize = isMobile ? '110px' : '164px';

    catSplash.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(12, 13, 16, 0.4);
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 99999;
        pointer-events: none;
        opacity: 0;
    `;

    const content = catSplash.querySelector('.cat-splash-content');
    if (content) {
        content.style.cssText = `
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 16px;
            color: #a1a5b5;
        `;
    }

    catSplashIcon.style.cssText = `
        width: ${iconSize};
        height: ${iconSize};
        display: flex;
        align-items: center;
        justify-content: center;
        filter: drop-shadow(0 12px 32px rgba(0, 0, 0, 0.55));
    `;

    const newSvg = catSplashIcon.querySelector('svg');
    if (newSvg) {
        newSvg.style.width = '100%';
        newSvg.style.height = '100%';
    }

    catSplashTitle.style.cssText = `
        font-size: ${isMobile ? '18px' : '24px'};
        font-weight: 900;
        text-transform: uppercase;
        letter-spacing: 2px;
        color: #a1a5b5;
        text-shadow: 0 4px 18px rgba(0, 0, 0, 0.7);
    `;

    if (catSplash._anim) catSplash._anim.cancel();
    if (newSvg && newSvg._anim) newSvg._anim.cancel();
    if (catSplashTitle._anim) catSplashTitle._anim.cancel();

    const duration = 1100;

    if (catSplash.animate) {
        catSplash._anim = catSplash.animate([
            { opacity: 0 },
            { opacity: 1, offset: 0.2 },
            { opacity: 1, offset: 0.75 },
            { opacity: 0 }
        ], {
            duration,
            easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
            fill: 'forwards'
        });

        catSplashTitle._anim = catSplashTitle.animate([
            { opacity: 0, transform: 'translateY(14px)' },
            { opacity: 1, transform: 'translateY(0)', offset: 0.25 },
            { opacity: 1, transform: 'translateY(0)', offset: 0.75 },
            { opacity: 0, transform: 'translateY(-8px)' }
        ], {
            duration,
            easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
            fill: 'forwards'
        });

        if (newSvg && newSvg.animate) {
            const iconFrames = {
                all: [
                    { transform: 'scale(0.5) rotate(-25deg)', opacity: 0 },
                    { transform: 'scale(1.1) rotate(6deg)', opacity: 1, offset: 0.35 },
                    { transform: 'scale(1) rotate(0deg)', opacity: 1, offset: 0.7 },
                    { transform: 'scale(0.92) rotate(0deg)', opacity: 0 }
                ],
                privileges: [
                    { transform: 'translateY(22px) scale(0.6) rotate(-10deg)', opacity: 0 },
                    { transform: 'translateY(-8px) scale(1.12) rotate(6deg)', opacity: 1, offset: 0.35 },
                    { transform: 'translateY(0) scale(1) rotate(0deg)', opacity: 1, offset: 0.7 },
                    { transform: 'translateY(-10px) scale(0.95)', opacity: 0 }
                ],
                cases: [
                    { transform: 'scale(0.65)', opacity: 0 },
                    { transform: 'scale(1.1) translateY(-6px) rotate(-7deg)', opacity: 1, offset: 0.25 },
                    { transform: 'scale(1.1) translateY(-6px) rotate(7deg)', opacity: 1, offset: 0.42 },
                    { transform: 'scale(1.04) translateY(0) rotate(-3deg)', opacity: 1, offset: 0.58 },
                    { transform: 'scale(1) rotate(0deg)', opacity: 1, offset: 0.75 },
                    { transform: 'scale(0.92)', opacity: 0 }
                ],
                services: [
                    { transform: 'scale(0.5)', opacity: 0 },
                    { transform: 'scale(1.15)', opacity: 1, offset: 0.32 },
                    { transform: 'scale(0.96)', opacity: 1, offset: 0.52 },
                    { transform: 'scale(1.02)', opacity: 1, offset: 0.75 },
                    { transform: 'scale(0.92)', opacity: 0 }
                ]
            };

            newSvg._anim = newSvg.animate(iconFrames[categoryKey] || iconFrames.all, {
                duration,
                easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
                fill: 'forwards'
            });
        }
    }
}

catBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const selected = btn.dataset.category;
        if (selected === currentFilter) return;

        currentFilter = selected;
        catBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        triggerCategorySplash(selected, btn);
        renderProducts(selected, true);
    });
});

// === КАЛЬКУЛЯТОР И ПОЛЗУНОК ХАЙПИКОВ ===
const slider = document.getElementById('currency-slider');
const rubInput = document.getElementById('rub-input');
const coinsTotalVal = document.getElementById('coins-total-val');
const coinsBreakdown = document.getElementById('coins-breakdown');
const coinsBigDisplay = document.getElementById('coins-big-display');
const coinsFieldLabel = document.getElementById('coins-field-label');
const bonusBadge = document.getElementById('bonus-badge');
const bonusHint = document.getElementById('bonus-hint');
const presetBtns = document.querySelectorAll('.preset-btn');
const currencySection = document.querySelector('.currency-section');
const currencyBuyBtn = document.querySelector('.btn-currency-buy');
const BASE_RATE = 5;

const bonusTiers = [
    { min: 2000, percent: 25 },
    { min: 1500, percent: 20 },
    { min: 1000, percent: 15 },
    { min: 500,  percent: 10 },
    { min: 250,  percent: 5 }
];

let displayedBigCoins = 500;
let displayedInputCoins = 500;
let animationFrameId = null;
const particlesContainer = document.getElementById('particles-container');

const particleSVGs = [
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
    `<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
    `<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polygon points="6 3 18 3 22 9 12 22 2 9 6 3"/><line x1="2" y1="9" x2="22" y2="9"/></svg>`,
    `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M10 2v5l-5 10a3 3 0 0 0 2.6 4.5h8.8A3 3 0 0 0 19 17l-5-10V2h-4z"/><line x1="9" y1="12" x2="15" y2="12"/></svg>`
];

let currentParticleIntensity = 0;
let particleAnimTimeout = null;

function spawnParticles(intensity) {
    if (!particlesContainer || !currencyBuyBtn) return;
    
    if (particleAnimTimeout) {
        clearTimeout(particleAnimTimeout);
        particleAnimTimeout = null;
    }

    if (intensity === 0) {
        particlesContainer.innerHTML = '';
        currencyBuyBtn.querySelectorAll('.btn-shockwave').forEach(w => w.remove());
        currentParticleIntensity = 0;
        return;
    }

    if (intensity !== currentParticleIntensity) {
        currentParticleIntensity = intensity;
        particlesContainer.innerHTML = '';
        currencyBuyBtn.querySelectorAll('.btn-shockwave').forEach(w => w.remove());
    }

    const hasWaves = currencyBuyBtn.querySelectorAll('.btn-shockwave').length > 0;
    if (intensity >= 4 && !hasWaves) {
        const ringCount = intensity >= 5 ? 2 : 1;
        for (let r = 0; r < ringCount; r++) {
            const ring = document.createElement('span');
            ring.className = 'btn-shockwave';
            ring.style.animationDelay = `${r * 0.75}s`;
            currencyBuyBtn.appendChild(ring);
        }
    } else if (intensity < 4) {
        currencyBuyBtn.querySelectorAll('.btn-shockwave').forEach(w => w.remove());
    }

   function createBatch() {
        particlesContainer.innerHTML = '';
        const isMobile = window.innerWidth <= 768;
        const count = isMobile ? Math.max(3, intensity * 2) : intensity * 5;
        for (let i = 0; i < count; i++) {
            const p = document.createElement('span');
            p.className = 'buy-particle';
            p.innerHTML = particleSVGs[Math.floor(Math.random() * particleSVGs.length)];

            const angle = Math.random() * Math.PI * 2;
            const minDistance = 40 + intensity * 5;
            const maxDistance = 90 + intensity * 12;
            const distance = minDistance + Math.random() * (maxDistance - minDistance);

            const destX = Math.cos(angle) * distance;
            const destY = Math.sin(angle) * distance;
            
            const size = 11 + Math.floor(Math.random() * 10);
            const startRot = Math.floor(Math.random() * 360);
            const endRot = startRot + (Math.random() > 0.5 ? 300 : -300);

            const duration = (0.6 + Math.random() * 0.8).toFixed(2);
            const delay = (Math.random() * 0.3).toFixed(2);

            p.style.cssText = `
                width: ${size}px;
                height: ${size}px;
                --p-x: ${destX.toFixed(1)}px;
                --p-y: ${destY.toFixed(1)}px;
                --r-start: ${startRot}deg;
                --r-end: ${endRot}deg;
                animation-duration: ${duration}s;
                animation-delay: ${delay}s;
            `;
            particlesContainer.appendChild(p);
        }

        particleAnimTimeout = setTimeout(createBatch, 1200);
    }

    createBatch();
}

function getBonusInfo(rubles) {
    let activeBonus = 0;
    for (const tier of bonusTiers) {
        if (rubles >= tier.min) {
            activeBonus = tier.percent;
            break;
        }
    }
    const ascTiers = [...bonusTiers].reverse();
    const nextTier = ascTiers.find(t => rubles < t.min) || null;
    return { activeBonus, nextTier };
}

function updateSliderFill(val) {
    if (!slider) return;
    const min = parseFloat(slider.min) || 10;
    const max = parseFloat(slider.max) || 2000;
    const clamped = Math.min(Math.max(val, min), max);
    const percent = ((clamped - min) / (max - min)) * 100;
    slider.style.background = `linear-gradient(to right, #ffcd00 0%, #ffcd00 ${percent}%, #262830 ${percent}%, #262830 100%)`;
}

function animateValues(targetBig, targetInput, baseVal, bonusVal, activeBonus) {
    if (!coinsBigDisplay || !coinsTotalVal) return;
    if (animationFrameId) cancelAnimationFrame(animationFrameId);

    let currentBig = parseFloat(coinsBigDisplay.textContent.replace(/\s/g, '')) || displayedBigCoins;
    let currentInput = parseFloat(coinsTotalVal.textContent.replace(/\s/g, '')) || displayedInputCoins;

    function step() {
        const diffBig = targetBig - currentBig;
        const diffInput = targetInput - currentInput;

        if (Math.abs(diffBig) < 0.5 && Math.abs(diffInput) < 0.5) {
            coinsBigDisplay.textContent = targetBig.toLocaleString('ru-RU');
            coinsTotalVal.textContent = targetInput.toLocaleString('ru-RU');

            if (activeBonus > 0 && coinsBreakdown) {
                coinsBreakdown.innerHTML = `(${baseVal.toLocaleString('ru-RU')} <span class="bonus-plus">+ ${bonusVal.toLocaleString('ru-RU')}</span>)`;
            } else if (coinsBreakdown) {
                coinsBreakdown.innerHTML = '';
            }
            return;
        }

        currentBig += diffBig * 0.25;
        currentInput += diffInput * 0.25;

        coinsBigDisplay.textContent = Math.round(currentBig).toLocaleString('ru-RU');
        coinsTotalVal.textContent = Math.round(currentInput).toLocaleString('ru-RU');

        if (activeBonus > 0 && coinsBreakdown) {
            const currentBase = Math.round(baseVal * (currentInput / targetInput));
            const currentBonus = Math.round(currentInput) - currentBase;
            coinsBreakdown.innerHTML = `(${currentBase.toLocaleString('ru-RU')} <span class="bonus-plus">+ ${currentBonus.toLocaleString('ru-RU')}</span>)`;
        } else if (coinsBreakdown) {
            coinsBreakdown.innerHTML = '';
        }

        animationFrameId = requestAnimationFrame(step);
    }

    animationFrameId = requestAnimationFrame(step);
}

function syncCurrency(rubles, immediate = false) {
    let val = parseInt(rubles, 10);
    if (isNaN(val) || val < 10) val = 10;
    
    const { activeBonus, nextTier } = getBonusInfo(val);
    const baseCoins = val * BASE_RATE;
    const bonusCoins = Math.floor(baseCoins * (activeBonus / 100));
    const totalCoins = baseCoins + bonusCoins;

    if (rubInput && document.activeElement !== rubInput) {
        rubInput.value = val;
    }
    
    if (currencySection) currencySection.className = 'currency-section';
    if (currencyBuyBtn) currencyBuyBtn.className = 'btn-primary btn-currency-buy';
    
    let particleIntensity = 0;
    if (activeBonus >= 5) {
        const tierClass = `tier-${activeBonus}`;
        if (currencySection) currencySection.classList.add(tierClass);
        if (currencyBuyBtn) currencyBuyBtn.classList.add(tierClass);
        particleIntensity = activeBonus / 5;
    }
    spawnParticles(particleIntensity);

    if (bonusBadge) {
        if (activeBonus > 0) {
            bonusBadge.style.display = 'inline-block';
            bonusBadge.textContent = `Бонус +${activeBonus}%`;
        } else {
            bonusBadge.style.display = 'none';
        }
    }

    if (bonusHint) {
        if (nextTier) {
            const diff = nextTier.min - val;
            bonusHint.textContent = `Добавьте ещё ${diff.toLocaleString('ru-RU')} ₽ для бонуса +${nextTier.percent}%`;
        } else {
            bonusHint.textContent = 'Максимальный бонус +25% активирован!';
        }
    }

    if (slider) {
        const maxSlider = parseInt(slider.max, 10) || 2000;
        slider.value = Math.min(val, maxSlider);
        updateSliderFill(val);
    }

    presetBtns.forEach(btn => {
        btn.classList.toggle('active', parseInt(btn.dataset.val, 10) === val);
    });

    if (immediate) {
        displayedBigCoins = totalCoins;
        displayedInputCoins = totalCoins;
        if (coinsBigDisplay) coinsBigDisplay.textContent = totalCoins.toLocaleString('ru-RU');
        if (coinsTotalVal) coinsTotalVal.textContent = totalCoins.toLocaleString('ru-RU');
        if (coinsBreakdown) {
            if (activeBonus > 0) {
                coinsBreakdown.innerHTML = `(${baseCoins.toLocaleString('ru-RU')} <span class="bonus-plus">+ ${bonusCoins.toLocaleString('ru-RU')}</span>)`;
            } else {
                coinsBreakdown.innerHTML = '';
            }
        }
    } else {
        animateValues(totalCoins, totalCoins, baseCoins, bonusCoins, activeBonus);
    }
}

function getSnappedValue(val, step = 100, threshold = 15) {
    const remainder = val % step;
    if (remainder <= threshold) {
        return val - remainder;
    } else if (step - remainder <= threshold) {
        return val + (step - remainder);
    }
    return val;
}

if (slider) {
    const onSliderMove = (e) => {
        let rawVal = parseInt(e.target.value, 10) || 10;
        let snappedVal = getSnappedValue(rawVal, 100, 15);
        if (snappedVal < 10) snappedVal = 10;
        if (snappedVal !== rawVal) {
            e.target.value = snappedVal;
        }
        if (rubInput) rubInput.value = snappedVal;
        syncCurrency(snappedVal, false);
    };

    slider.addEventListener('input', onSliderMove);
    slider.addEventListener('change', onSliderMove);
}

if (rubInput) {
    rubInput.addEventListener('input', (e) => {
        const raw = parseInt(e.target.value, 10);
        if (!isNaN(raw) && raw >= 1) {
            syncCurrency(raw, false);
        }
    });
    rubInput.addEventListener('blur', () => {
        const raw = parseInt(rubInput.value, 10);
        const safeVal = isNaN(raw) || raw < 10 ? 10 : raw;
        rubInput.value = safeVal;
        syncCurrency(safeVal, false);
    });
}

presetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const val = parseInt(btn.dataset.val, 10);
        if (rubInput) rubInput.value = val;
        syncCurrency(val, false);
    });
});

// === МОДАЛЬНОЕ ОКНО ЗАКАЗА ===
const modal = document.getElementById('buy-modal');
const modalItemName = document.getElementById('modal-item-name');
const modalItemCat = document.getElementById('modal-item-cat');
const modalItemPrice = document.getElementById('modal-item-price');
const modalItemThumb = document.getElementById('modal-item-thumb');
const caseTypeSwitch = document.getElementById('case-type-switch');
const switchNormal = document.getElementById('switch-normal');
const switchHyper = document.getElementById('switch-hyper');
const caseQtyBox = document.getElementById('case-qty-box');
const caseQtyPresets = document.getElementById('case-qty-presets');
const caseQtyInput = document.getElementById('case-qty-input');
const unitPriceBadge = document.getElementById('unit-price-badge');

let activeModalItem = null;
let currentCaseQty = 1;
let currentCaseVariant = 'normal';

function setCaseType(type) {
    currentCaseVariant = type;
    if (switchNormal) switchNormal.classList.toggle('active', type === 'normal');
    if (switchHyper) switchHyper.classList.toggle('active', type === 'hyper');

    const discounts = [0, 10, 20];
    if (type === 'normal') {
        currentCaseQty = 3;
        caseQtyPresets.innerHTML = [3, 10, 15].map((num, idx) => `
            <button type="button" class="qty-preset-btn" data-qty="${num}" onclick="setCaseQty(${num})">
                ${num} шт.
                ${discounts[idx] > 0 ? `<small>-${discounts[idx]}%</small>` : ''}
            </button>
        `).join('');
    } else {
        currentCaseQty = 1;
        caseQtyPresets.innerHTML = [1, 3, 5].map((num, idx) => `
            <button type="button" class="qty-preset-btn" data-qty="${num}" onclick="setCaseQty(${num})">
                ${num} шт.
                ${discounts[idx] > 0 ? `<small>-${discounts[idx]}%</small>` : ''}
            </button>
        `).join('');
    }
    updateCaseModalTotals();
}

function calculateCasePrice(item, qty, variant = 'normal') {
    let unitPrice = 0;
    let discountPct = 0;

    if (item.isDonatCase) {
        const base = variant === 'hyper' ? item.priceHyper : item.priceNormal;
        if (variant === 'hyper') {
            if (qty >= 5) discountPct = 20;
            else if (qty >= 3) discountPct = 10;
        } else {
            if (qty >= 15) discountPct = 20;
            else if (qty >= 10) discountPct = 10;
        }
        unitPrice = Math.round(base * (1 - discountPct / 100));
    } else {
        const discArr = item.discounts || [0, 10, 20];
        const pArr = item.presets || [1, 3, 5];
        if (qty >= pArr[2]) discountPct = discArr[2];
        else if (qty >= pArr[1]) discountPct = discArr[1];
        else discountPct = discArr[0];

        unitPrice = Math.round(item.basePrice * (1 - discountPct / 100));
    }

    return { unitPrice, total: unitPrice * qty, discountPct };
}

function updateCaseModalTotals() {
    if (!activeModalItem || activeModalItem.category !== 'cases') return;
    
    const { unitPrice, total, discountPct } = calculateCasePrice(activeModalItem, currentCaseQty, currentCaseVariant);
    const variantName = activeModalItem.isDonatCase ? (currentCaseVariant === 'hyper' ? 'Гипер-кейс' : 'Обычный') : '';

    if (modalItemName) {
        modalItemName.textContent = activeModalItem.isDonatCase 
            ? `${activeModalItem.name} (${variantName}, ${currentCaseQty} шт.)` 
            : `${activeModalItem.name} (${currentCaseQty} шт.)`;
    }
    
    if (modalItemPrice) modalItemPrice.textContent = `${total} ₽`;
    if (caseQtyInput) caseQtyInput.value = currentCaseQty;
    if (unitPriceBadge) unitPriceBadge.textContent = `Цена за шт: ${unitPrice} ₽ ${discountPct > 0 ? `(-${discountPct}%)` : ''}`;

    const presetButtons = caseQtyPresets.querySelectorAll('.qty-preset-btn');
    presetButtons.forEach(btn => {
        btn.classList.toggle('active', parseInt(btn.dataset.qty, 10) === currentCaseQty);
    });
}

function setCaseQty(qty) {
    let val = parseInt(qty, 10);
    if (isNaN(val) || val < 1) val = 1;
    if (val > 999) val = 999;
    currentCaseQty = val;
    updateCaseModalTotals();
}

function stepCaseQty(delta) {
    setCaseQty(currentCaseQty + delta);
}

if (caseQtyInput) {
    caseQtyInput.addEventListener('input', (e) => {
        let val = parseInt(e.target.value, 10);
        if (!isNaN(val) && val >= 1) {
            currentCaseQty = Math.min(val, 999);
            updateCaseModalTotals();
        }
    });

    caseQtyInput.addEventListener('blur', () => {
        if (!caseQtyInput.value || parseInt(caseQtyInput.value, 10) < 1) {
            setCaseQty(1);
        }
    });
}

function openModal(productId) {
    const item = products.find(p => p.id === productId);
    if (!item) return;

    activeModalItem = item;
    if (modalItemCat) modalItemCat.textContent = item.catLabel;
    if (modalItemThumb) {
        modalItemThumb.style.background = item.bg;
        modalItemThumb.innerHTML = item.icon;
    }

    if (item.category === 'cases') {
        if (caseQtyBox) caseQtyBox.style.display = 'block';

        if (item.isDonatCase) {
            if (caseTypeSwitch) caseTypeSwitch.style.display = 'grid';
            setCaseType('normal');
        } else {
            if (caseTypeSwitch) caseTypeSwitch.style.display = 'none';
            currentCaseQty = item.presets[0];
            const discounts = item.discounts || [0, 10, 20];
            caseQtyPresets.innerHTML = item.presets.map((num, idx) => `
                <button type="button" class="qty-preset-btn" data-qty="${num}" onclick="setCaseQty(${num})">
                    ${num} шт.
                    ${discounts[idx] > 0 ? `<small>-${discounts[idx]}%</small>` : ''}
                </button>
            `).join('');
            updateCaseModalTotals();
        }
    } else {
        if (caseTypeSwitch) caseTypeSwitch.style.display = 'none';
        if (caseQtyBox) caseQtyBox.style.display = 'none';
        if (modalItemName) modalItemName.textContent = item.name;
        if (modalItemPrice) modalItemPrice.textContent = `${item.price} ₽`;
    }

    if (modal) modal.classList.add('active');
}

function openCurrencyModal() {
    activeModalItem = null;
    if (caseTypeSwitch) caseTypeSwitch.style.display = 'none';
    if (caseQtyBox) caseQtyBox.style.display = 'none';

    const rubles = parseInt(rubInput ? rubInput.value : '100', 10) || 100;
    const { activeBonus } = getBonusInfo(rubles);
    const baseCoins = rubles * BASE_RATE;
    const bonusCoins = Math.floor(baseCoins * (activeBonus / 100));
    const totalCoins = baseCoins + bonusCoins;

    if (modalItemName) {
        modalItemName.textContent = activeBonus > 0 
            ? `${totalCoins.toLocaleString('ru-RU')} Хайпиков (${baseCoins} + ${bonusCoins})`
            : `${totalCoins.toLocaleString('ru-RU')} Хайпиков`;
    }
    if (modalItemCat) modalItemCat.textContent = 'Игровая валюта';
    if (modalItemPrice) modalItemPrice.textContent = `${rubles} ₽`;
    if (modalItemThumb) {
        modalItemThumb.style.background = 'linear-gradient(135deg, #ffcd00, #d97706)';
        modalItemThumb.innerHTML = icons.gem;
    }
    if (modal) modal.classList.add('active');
}

function closeModal() {
    if (modal) modal.classList.remove('active');
}

if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
}

function handlePurchase(e) {
    e.preventDefault();
    const nick = document.getElementById('nickname').value.trim();
    const emailInput = document.getElementById('email').value.trim();
    const promoInput = document.getElementById('promo').value.trim();

    if (!nick) {
        alert('Пожалуйста, введите никнейм!');
        return;
    }

    let itemName = '';
    let itemQuantity = '1 шт.';
    let totalPrice = '';

    if (activeModalItem) {
        if (activeModalItem.category === 'cases') {
            const calc = calculateCasePrice(activeModalItem, currentCaseQty, currentCaseVariant);
            const variantName = activeModalItem.isDonatCase ? (currentCaseVariant === 'hyper' ? 'Гипер-кейс' : 'Обычный') : '';
            itemName = activeModalItem.isDonatCase ? `${activeModalItem.name} (${variantName})` : activeModalItem.name;
            itemQuantity = `${currentCaseQty} шт.`;
            totalPrice = `${calc.total} ₽`;
        } else {
            itemName = activeModalItem.name;
            itemQuantity = activeModalItem.priceLabel || 'Навсегда';
            totalPrice = `${activeModalItem.price} ₽`;
        }
    } else {
        const rubles = parseInt(rubInput.value, 10) || 100;
        const { activeBonus } = getBonusInfo(rubles);
        const baseCoins = rubles * BASE_RATE;
        const bonusCoins = Math.floor(baseCoins * (activeBonus / 100));
        const totalCoins = baseCoins + bonusCoins;

        itemName = 'Игровая валюта (Хайпики)';
        itemQuantity = `${totalCoins.toLocaleString('ru-RU')} Хайпиков`;
        totalPrice = `${rubles} ₽`;
    }

    const email = emailInput !== '' ? emailInput : 'null';
    const promo = promoInput !== '' ? promoInput : 'null';

    const message = `[Макет заказа]\n` +
        `• Что купили: ${itemName}\n` +
        `• Сколько купили: ${itemQuantity}\n` +
        `• Сколько заплатить: ${totalPrice}\n` +
        `• Ник игрока: ${nick}\n` +
        `• Почта: ${email}\n` +
        `• Промокод: ${promo}`;

    alert(message);
    closeModal();
}

function copyIP() {
    const ipElem = document.getElementById('server-ip');
    const ip = ipElem ? ipElem.textContent : 'mc.hyperwave.ru';
    
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(ip).catch(() => {});
    } else {
        const temp = document.createElement('input');
        temp.value = ip;
        document.body.appendChild(temp);
        temp.select();
        document.execCommand('copy');
        document.body.removeChild(temp);
    }

    const toast = document.getElementById('toast');
    if (toast) {
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 2500);
    }
}

// === АНИМАЦИИ КАРТОЧЕК (ДЕСКТОП ПО HOVER / МОБИЛКА ВСЕГДА АКТИВНЫ) ===
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

const ambientKeyframes = {
    'anim-crown': [
        { transform: 'translateY(0) scale(1.02) rotate(0deg)' },
        { transform: 'translateY(-4px) scale(1.06) rotate(-6deg)' },
        { transform: 'translateY(-1px) scale(1.03) rotate(0deg)' },
        { transform: 'translateY(-4px) scale(1.06) rotate(6deg)' },
        { transform: 'translateY(0) scale(1.02) rotate(0deg)' }
    ],
    'anim-spin': [
        { transform: 'scale(1.02) rotate(0deg)' },
        { transform: 'scale(1.08) rotate(180deg)' },
        { transform: 'scale(1.02) rotate(360deg)' }
    ],
    'anim-radiant': [
        { transform: 'scale(1.02)' },
        { transform: 'scale(1.06)' },
        { transform: 'scale(1.02)' }
    ],
    'anim-float': [
        { transform: 'translateY(0) scale(1.02)' },
        { transform: 'translateY(-4px) scale(1.05)' },
        { transform: 'translateY(0) scale(1.02)' }
    ],
    'anim-fusion': [
        { transform: 'scale(1.04) rotate(0deg)', offset: 0, easing: 'cubic-bezier(0.45, 0.05, 0.55, 0.95)' },
        { transform: 'scale(1.04) rotate(60deg)', offset: 0.65 },
        { transform: 'scale(1.04) rotate(60deg)', offset: 1 }
    ],
    'anim-sway': [
        { transform: 'translateY(0) scale(1.02)' },
        { transform: 'translateY(-3px) scale(1.05)' },
        { transform: 'translateY(0) scale(1.02)' }
    ],
    'anim-pulse': [
        { transform: 'scale(1.02)' },
        { transform: 'scale(1.06)' },
        { transform: 'scale(1.02)' }
    ],
    'anim-orbit': [
        { transform: 'scale(1.02) rotate(-3deg)' },
        { transform: 'scale(1.06) rotate(3deg)' },
        { transform: 'scale(1.02) rotate(-3deg)' }
    ],
    'anim-unlock': [
        { transform: 'translateY(0) scale(1) rotate(0deg)' },
        { transform: 'translateY(-3px) scale(1.07) rotate(-8deg)' },
        { transform: 'translateY(0) scale(1) rotate(0deg)' }
    ],
    'anim-case-donate': [{ transform: 'scale(1.02)' }, { transform: 'scale(1.06)', offset: 0.4 }, { transform: 'scale(1.02)' }],
    'anim-case-hypes':  [{ transform: 'scale(1.02)' }, { transform: 'scale(1.06)', offset: 0.4 }, { transform: 'scale(1.02)' }],
    'anim-case-kits':   [{ transform: 'scale(1.02)' }, { transform: 'scale(1.06)', offset: 0.4 }, { transform: 'scale(1.02)' }],
    'anim-case-money':  [{ transform: 'scale(1.02)' }, { transform: 'scale(1.06)', offset: 0.4 }, { transform: 'scale(1.02)' }],
    'anim-case-prefix': [{ transform: 'scale(1.02)' }, { transform: 'scale(1.06)', offset: 0.4 }, { transform: 'scale(1.02)' }]
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
        { selector: '.case-chest', frames: [{ transform: 'translateY(0) rotate(0deg)', offset: 0 }, { transform: 'translateY(-2.5px) rotate(-4deg)', offset: 0.25 }, { transform: 'translateY(-2.5px) rotate(4deg)', offset: 0.5 }, { transform: 'translateY(-1px) rotate(-2deg)', offset: 0.72 }, { transform: 'translateY(0) rotate(0deg)', offset: 1 }], duration: 1400, easing: 'ease-in-out' },
        { selector: '.case-top', frames: [{ transform: 'translateY(0) scale(1) rotate(0deg)', offset: 0 }, { transform: 'translateY(-4.5px) scale(1.15) rotate(-10deg)', offset: 0.3 }, { transform: 'translateY(-4.5px) scale(1.15) rotate(10deg)', offset: 0.6 }, { transform: 'translateY(0) scale(1) rotate(0deg)', offset: 1 }], duration: 1400, easing: 'ease-in-out' }
    ],
    'anim-case-hypes': [
        { selector: '.case-chest', frames: [{ transform: 'translateY(0) rotate(0deg)', offset: 0 }, { transform: 'translateY(-2.5px) rotate(-4deg)', offset: 0.25 }, { transform: 'translateY(-2.5px) rotate(4deg)', offset: 0.5 }, { transform: 'translateY(-1px) rotate(-2deg)', offset: 0.72 }, { transform: 'translateY(0) rotate(0deg)', offset: 1 }], duration: 1400, easing: 'ease-in-out' },
        { selector: '.case-top', frames: [{ transform: 'translateY(0) scale(1) rotate(0deg)', offset: 0 }, { transform: 'translateY(-4.5px) scale(1.18) rotate(180deg)', offset: 0.5 }, { transform: 'translateY(0) scale(1) rotate(360deg)', offset: 1 }], duration: 1400, easing: 'ease-in-out' }
    ],
    'anim-case-kits': [
        { selector: '.case-chest', frames: [{ transform: 'translateY(0) rotate(0deg)', offset: 0 }, { transform: 'translateY(-2.5px) rotate(-4deg)', offset: 0.25 }, { transform: 'translateY(-2.5px) rotate(4deg)', offset: 0.5 }, { transform: 'translateY(-1px) rotate(-2deg)', offset: 0.72 }, { transform: 'translateY(0) rotate(0deg)', offset: 1 }], duration: 1400, easing: 'ease-in-out' },
        { selector: '.case-top', frames: [{ transform: 'translateY(0) rotate(0deg)', offset: 0, easing: 'ease-in' }, { transform: 'translateY(-4.5px) rotate(-42deg)', offset: 0.5, easing: 'cubic-bezier(0.16, 1, 0.3, 1)' }, { transform: 'translateY(-0.5px) rotate(22deg)', offset: 0.72, easing: 'ease-in-out' }, { transform: 'translateY(0) rotate(0deg)', offset: 1 }], duration: 1400 }
    ],
    'anim-case-money': [
        { selector: '.case-chest', frames: [{ transform: 'translateY(0) rotate(0deg)', offset: 0 }, { transform: 'translateY(-2.5px) rotate(-4deg)', offset: 0.25 }, { transform: 'translateY(-2.5px) rotate(4deg)', offset: 0.5 }, { transform: 'translateY(-1px) rotate(-2deg)', offset: 0.72 }, { transform: 'translateY(0) rotate(0deg)', offset: 1 }], duration: 1400, easing: 'ease-in-out' },
        { selector: '.case-top', frames: [{ transform: 'translateY(0) scaleX(1)', offset: 0 }, { transform: 'translateY(-4.5px) scaleX(0.1)', offset: 0.25 }, { transform: 'translateY(-4.5px) scaleX(1)', offset: 0.45 }, { transform: 'translateY(-4px) scaleX(0.1)', offset: 0.65 }, { transform: 'translateY(0) scaleX(1)', offset: 1 }], duration: 1400, easing: 'ease-in-out' }
    ],
    'anim-case-prefix': [
        { selector: '.case-chest', frames: [{ transform: 'translateY(0) rotate(0deg)', offset: 0 }, { transform: 'translateY(-2.5px) rotate(-4deg)', offset: 0.25 }, { transform: 'translateY(-2.5px) rotate(4deg)', offset: 0.5 }, { transform: 'translateY(-1px) rotate(-2deg)', offset: 0.72 }, { transform: 'translateY(0) rotate(0deg)', offset: 1 }], duration: 1400, easing: 'ease-in-out' },
        { selector: '.case-top', frames: [{ transform: 'translateY(0) rotate(0deg)', offset: 0 }, { transform: 'translateY(-3.5px) rotate(-22deg)', offset: 0.28 }, { transform: 'translateY(-3.5px) rotate(18deg)', offset: 0.55 }, { transform: 'translateY(-2px) rotate(-8deg)', offset: 0.78 }, { transform: 'translateY(0) rotate(0deg)', offset: 1 }], duration: 1400, easing: 'ease-in-out' }
    ]
};

function smoothResetElement(el, duration = 450) {
    if (!el || !el.animate) return;
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

function startCardAnimation(card, isAmbient = false) {
    const art = card.querySelector('.product-art');
    const svg = art ? art.querySelector('svg') : null;
    if (!svg || !svg.animate) return;

    const animType = Object.keys(hoverKeyframes).find(cls => art.classList.contains(cls));
    if (!animType) return;

    const targetEl = animType === 'anim-fusion' ? (svg.querySelector('.fusion-spin') || svg) : svg;
    if (targetEl._activeAnim) targetEl._activeAnim.cancel();

    const frames = isAmbient ? ambientKeyframes[animType] : hoverKeyframes[animType];
    const isSingleRun = !isAmbient && animType === 'anim-unlock';
    const baseDuration = hoverDurations[animType] || 1500;

    targetEl._activeAnim = targetEl.animate(frames, {
        duration: isAmbient ? Math.round(baseDuration * 1.25) : baseDuration,
        iterations: isSingleRun ? 1 : Infinity,
        fill: isSingleRun ? 'forwards' : 'none',
        easing: 'ease-in-out'
    });

    const subConfigs = subPartConfigs[animType];
    if (subConfigs) {
        subConfigs.forEach(cfg => {
            const part = svg.querySelector(cfg.selector);
            if (!part || !part.animate) return;
            if (part._activeAnim) part._activeAnim.cancel();
            part._activeAnim = part.animate(cfg.frames, {
                duration: isAmbient ? Math.round(cfg.duration * 1.2) : cfg.duration,
                iterations: Infinity,
                easing: cfg.easing || 'ease-in-out'
            });
        });
    }
}

function stopCardAnimation(card) {
    if (isAlwaysAnimatedDevice()) return;

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
        if (spinEl.animate) {
            spinEl._activeAnim = spinEl.animate([
                { transform: `rotate(${currentAngle}deg)` },
                { transform: `rotate(${targetAngle}deg)` }
            ], {
                duration: 500,
                easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
                fill: 'forwards'
            });
        }
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
}

if (productsArea) {
    productsArea.addEventListener('mouseover', (e) => {
        if (isAlwaysAnimatedDevice()) return;
        const card = e.target.closest('.product-card');
        if (!card || card.contains(e.relatedTarget)) return;
        startCardAnimation(card, false);
    });

    productsArea.addEventListener('mouseout', (e) => {
        if (isAlwaysAnimatedDevice()) return;
        const card = e.target.closest('.product-card');
        if (!card || card.contains(e.relatedTarget)) return;
        stopCardAnimation(card);
    });
}

// === ПОДСВЕТКА АКТИВНОЙ ВКЛАДКИ В МОБИЛЬНОМ ТАББАРЕ ПРИ СКРОЛЛЕ ===
const tabbarItems = document.querySelectorAll('.mobile-tabbar .tabbar-item[data-tab]');
if (tabbarItems.length > 0) {
    const shopEl = document.getElementById('shop');
    const currEl = document.getElementById('currency');

    window.addEventListener('scroll', () => {
        if (!shopEl || !currEl) return;
        const shopTop = shopEl.getBoundingClientRect().top;
        const activeTab = shopTop <= window.innerHeight * 0.45 ? 'shop' : 'currency';

        tabbarItems.forEach(item => {
            item.classList.toggle('active', item.dataset.tab === activeTab);
        });
    }, { passive: true });
}

// Инициализация при загрузке
syncCurrency(100, true);
renderProducts('all', false);
