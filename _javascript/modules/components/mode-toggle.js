/**
 * Add listener for theme mode toggle
 */

const toggles = document.querySelectorAll('[data-mode-toggle]');

export function modeWatcher() {
  if (toggles.length === 0) {
    return;
  }

  toggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
      Theme.flip();
    });
  });
}
