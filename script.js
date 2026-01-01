// ===== Таймер до 7 мая 2026 =====
const targetDate = new Date("2026-05-07T18:00:00");
const timer = document.getElementById("timer");

function updateTimer(lang) {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
        timer.innerText = lang === "ru"
            ? "Праздник начался 🎉"
            : "Мерейтой басталды 🎉";
        return;
    }

    const days = Math.floor(diff / 86400000);
    const hours = Math.floor(diff / 3600000) % 24;
    const minutes = Math.floor(diff / 60000) % 60;

    timer.innerText = lang === "ru"
        ? `До праздника: ${days} дн ${hours} ч ${minutes} мин`
        : `${days} күн ${hours} сағат ${minutes} минут қалды`;
}

let currentLang = "kk";
setInterval(() => updateTimer(currentLang), 1000);

// ===== Переключение языка =====
function setLang(lang) {
    currentLang = lang;
    document.querySelectorAll("[data-kk]").forEach(el => {
        el.innerText = el.dataset[lang];
    });
}

// ===== Музыка =====
function toggleMusic() {
    const music = document.getElementById("music");
    music.paused ? music.play() : music.pause();
}

// ===== Reveal =====
document.querySelectorAll(".reveal").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight) {
        el.classList.add("active");
    }
});

// ===== Лепестки =====
const petals = document.getElementById("petals");
setInterval(() => {
    const p = document.createElement("span");
    p.innerText = "✨";
    p.style.left = Math.random() * 100 + "vw";
    p.style.animationDuration = 6 + Math.random() * 6 + "s";
    petals.appendChild(p);
    setTimeout(() => p.remove(), 12000);
}, 800);

// стартовый язык
setLang("kk");
