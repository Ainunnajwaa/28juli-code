// Scroll reveal effect
const sections = document.querySelectorAll('.reveal');

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < triggerBottom) {
      section.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Musik play manual
function playMusic() {
  const music = document.getElementById('bgMusic');
  const btn = document.getElementById('musicBtn');

  music.play().then(() => {
    btn.style.display = 'none';
  }).catch((error) => {
    alert("Gagal memutar musik. Silakan klik lagi.");
    console.error(error);
  });
  function playMusic() {
  const videoID = "D-VytLhH-KE";
  const iframe = document.getElementById("ytMusic");
  iframe.src = `https://www.youtube.com/embed/${videoID}?autoplay=1&loop=1&playlist=${videoID}`;
  document.getElementById("musicBtn").style.display = "none";
}

}

