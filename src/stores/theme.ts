import { writable } from 'svelte/store';

function createThemeStore() {
  const { subscribe, update } = writable('dark');

  function toggle() {
    update(current => {
      const newTheme = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      // Optional: localStorage.setItem('theme', newTheme); to persist
      return newTheme;
    });
  }

  function init() {
    // Optional: Load from localStorage if needed
    // const saved = localStorage.getItem('theme') || 'dark';
    // update(() => saved);
    // document.documentElement.setAttribute('data-theme', saved);
  }

  return { subscribe, toggle, init };
}

export const themeStore = createThemeStore();
