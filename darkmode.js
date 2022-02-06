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

function SwitchButtons(buttonId) {
  var hideBtn, showBtn;
  if (buttonId == 'darkmode') {
    showBtn = 'lightmode';
    hideBtn = 'darkmode';
  } else {
    showBtn = 'darkmode';
    hideBtn = 'lightmode';
  }
  document.getElementById(hideBtn).style.display = 'none'; //step 2 :additional feature hide button
  document.getElementById(showBtn).style.display = ''; //step 3:additional feature show button


}