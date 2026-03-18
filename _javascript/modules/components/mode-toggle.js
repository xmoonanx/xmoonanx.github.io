/**
 * Add listener for theme mode toggle
 */

const SELECTOR = '[data-mode-toggle]';

function getToggles() {
  return document.querySelectorAll(SELECTOR);
}

function getVisualState() {
  if (typeof Theme !== 'undefined') {
    return Theme.visualState;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function syncToggleState() {
  const isDark = getVisualState() === 'dark';

  getToggles().forEach((toggle) => {
    toggle.setAttribute('aria-pressed', String(isDark));
    toggle.setAttribute('title', isDark ? 'Switch to light mode' : 'Switch to dark mode');

    const icon = toggle.querySelector('i');

    if (!icon) {
      return;
    }

    icon.classList.remove('fa-adjust', 'fa-sun', 'fa-moon');
    icon.classList.add('fas', isDark ? 'fa-sun' : 'fa-moon');
  });
}

export function modeWatcher() {
  if (getToggles().length === 0) {
    return;
  }

  syncToggleState();

  document.addEventListener('click', (event) => {
    const toggle = event.target.closest(SELECTOR);

    if (!toggle || typeof Theme === 'undefined') {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    try {
      Theme.flip();
      syncToggleState();
    } catch (error) {
      console.error('Theme toggle failed', error);
    }
  });

  window.addEventListener('message', (event) => {
    if (event.data?.id === 'theme-mode') {
      syncToggleState();
    }
  });
}
