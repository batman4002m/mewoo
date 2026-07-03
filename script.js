// دکمه شروع
const startBtn = document.getElementById("startBtn");

// موزیک
const music = document.getElementById("music");

startBtn.addEventListener("click", () => {

    // پخش موزیک (اگر فایل love.mp3 وجود داشته باشد)
    music.play().catch(() => {});

    // انیمیشن دکمه
    startBtn.innerHTML = "در حال شروع... ❤️";
    startBtn.style.transform = "scale(0.95)";

    // محو شدن صفحه
    document.body.style.transition = "0.8s";
    document.body.style.opacity = "0";

    // رفتن به صفحه معما
    setTimeout(() => {
        window.location.href = "puzzle.html";
    }, 800);

});