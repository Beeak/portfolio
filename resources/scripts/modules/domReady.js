export const domReady = (onReady) => {
  window.requestAnimationFrame(async function check() {
    document.body ? await onReady() : window.requestAnimationFrame(check);
  });
};
