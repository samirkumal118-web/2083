
const newYearDate = new Date("April 14, 2026 00:00:00").getTime();

setInterval(() => {
    const now = new Date().getTime();
    const distance = newYearDate - now;

    document.getElementById("days").innerText = Math.floor(distance / (1000 * 60 * 60 * 24));
    document.getElementById("hours").innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById("minutes").innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById("seconds").innerText = Math.floor((distance % (1000 * 60)) / 1000);
}, 1000);


const wishes = [
    "✨ May 2083 bring you success and happiness!",
    "🎉 New year, new goals, new achievements!",
    "💖 Wishing you love , positivity this year and I am always with you!",
    "🌟 Shine brighter in 2083 like your preety smile!",
    "🚀 Level up your life this year 2083!",
    "😊 Stay happy, stay strong, stay safe!",
    "💫 Make every single moment magical!",
    "🔥 Chase your dreams fearlessly I am always there with you!",
    "🌈 Fill your life with joy and happiness!",
    "🎯 Achieve everything you wish for and never loose hope!"
];

let lastIndex = -1;

function generateWish() {
    const name = document.getElementById("nameInput").value || "Friend";

    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * wishes.length);
    } while (randomIndex === lastIndex);

    lastIndex = randomIndex;

    document.getElementById("wishMessage").innerText =
        `${wishes[randomIndex]} Happy New Year 2083, ${name}! 🎆`;
}



const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let rockets = [];
let particles = [];

function launchRocket() {
    rockets.push({
        x: Math.random() * canvas.width,
        y: canvas.height,
        speed: Math.random() * 5 + 7,
        targetY: Math.random() * canvas.height / 2 + 50
    });
}
function explode(x, y) {
    for (let i = 0; i < 50; i++) {)
        particles.push({
            x,
            y,
            angle: Math.random() * 2 * Math.PI,
            speed: Math.random() * 4 + 1.5, 
            life: 1,
            size: Math.random() * 3 + 1 
        });
    }
}


function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    rockets.forEach((r, i) => {
        r.y -= r.speed;

        ctx.fillStyle = "white";
        ctx.fillRect(r.x, r.y, 2, 8);

        if (r.y <= r.targetY) {
            explode(r.x, r.y);
            rockets.splice(i, 1);
        }
    });

    particles.forEach((p, i) => {
        p.x += Math.cos(p.angle) * p.speed;
        p.y += Math.sin(p.angle) * p.speed;
        p.life -= 0.02;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, ${150 + Math.random() * 100}, 50, ${p.life})`;
        ctx.fill();

        if (p.life <= 0) particles.splice(i, 1);
    });

    requestAnimationFrame(animate);
}

setInterval(launchRocket, 900);
animate();


function celebrate() {
    for (let i = 0; i < 5; i++) {
        setTimeout(launchRocket, i * 150);
    }
}
