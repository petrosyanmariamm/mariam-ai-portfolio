const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));
document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('.workflow-video-card video').forEach((video) => {
  const card = video.closest('.workflow-video-card');
  card.addEventListener('mouseenter', () => video.play().catch(() => {}));
  card.addEventListener('mouseleave', () => { video.pause(); video.currentTime = 0; });
  card.addEventListener('click', () => video.paused ? video.play() : video.pause());
});

document.querySelectorAll('.video-card').forEach((card) => {
  const video = card.querySelector('video');
  const button = card.querySelector('.play-toggle');
  if (!video || !button) return;
  const sync = () => { button.textContent = video.paused ? 'Play' : 'Pause'; };
  button.addEventListener('click', () => {
    if (video.paused) video.play().catch(() => {}); else video.pause();
    setTimeout(sync, 0);
  });
  video.addEventListener('play', sync);
  video.addEventListener('pause', sync);
});
