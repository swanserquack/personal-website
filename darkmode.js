document.addEventListener('DOMContentLoaded', () =>
document.querySelectorAll('[toggle-dark-mode]').forEach((item) =>
  item.addEventListener('click', () => {
    localStorage.setItem('theme', localStorage.theme == 'dark' ? 'light' : 'dark');
    document.documentElement.classList.toggle('dark');
  })
)
);
document.documentElement.classList.toggle(
  'dark',
  localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
);