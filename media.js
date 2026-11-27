// Load near the viewport; play only while visible. Keep manual pauses intact.
function manageVideo(video, source, autoplay) {
  let near = false;
  let visible = false;
  let manualPause = false;
  let disposed = false;
  let systemPause = false;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  function load() {
    if (!video.hasAttribute('src') && !disposed) {
      video.src = source;
      video.load();
    }
  }
  function pause() {
    if (!video.paused) { systemPause = true; video.pause(); }
  }
  function update() {
    if (disposed) return;
    if (near && !document.hidden) load();
    if (!visible || document.hidden) { pause(); return; }
    if (autoplay && !manualPause && !reducedMotion.matches) {
      load();
      video.play().catch(() => {}); // Native controls remain available if autoplay is blocked.
    }
  }
  video.addEventListener('pause', () => {
    if (systemPause) { systemPause = false; return; }
    if (visible && !document.hidden && !video.ended) manualPause = true;
  });
  video.addEventListener('play', () => {
    manualPause = false;
    if (!visible || document.hidden) pause();
  });
  const canObserve = 'IntersectionObserver' in window;
  const loadObserver = canObserve ? new IntersectionObserver(entries => {
    near = entries[0].isIntersecting; update();
  }, {rootMargin: '300px'}) : null;
  const playObserver = canObserve ? new IntersectionObserver(entries => {
    visible = entries[0].isIntersecting && entries[0].intersectionRatio >= 0.15;
    update();
  }, {threshold: [0, 0.15]}) : null;
  if (canObserve) { loadObserver.observe(video); playObserver.observe(video); }
  else { near = true; visible = true; load(); } // Older browsers use manual playback.
  document.addEventListener('visibilitychange', update);
  reducedMotion.addEventListener('change', update);
  return () => {
    disposed = true;
    loadObserver?.disconnect(); playObserver?.disconnect();
    document.removeEventListener('visibilitychange', update);
    reducedMotion.removeEventListener('change', update);
    pause(); video.removeAttribute('src'); video.load();
  };
}
