var hideBtn, showBtn;

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

if (localStorage.getItem('theme') == null) {
  localStorage.setItem('theme', 'light');
}

if (localStorage.theme == 'dark') {
  showBtn = 'lightmode';
  hideBtn = 'darkmode';
  document.getElementById(hideBtn).style.visibility = 'hidden';
  document.getElementById(showBtn).style.visibility = 'visible';
}

if (localStorage.theme == 'light') {
  showBtn = 'darkmode';
  hideBtn = 'lightmode';
  document.getElementById(hideBtn).style.visibility = 'hidden';
  document.getElementById(showBtn).style.visibility = 'visible';
}

function SwitchButtons(buttonId) {
  if (buttonId == 'darkmode') {
    showBtn = 'lightmode';
    hideBtn = 'darkmode';
  } else {
    showBtn = 'darkmode';
    hideBtn = 'lightmode';
  }
  document.getElementById(hideBtn).style.visibility = 'hidden';
  document.getElementById(showBtn).style.visibility = 'visible';
}