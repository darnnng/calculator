let activeTheme = 'dark';
const theme = document.querySelector('.light-dark');
theme.addEventListener('click', changeTheme);

const changingClasses = ['html', '.calculator', '.screen', '.buttons', '.btn'];
const changingElements = changingClasses.map((el) =>
  document.querySelectorAll(el)
);

function changeTheme() {
  activeTheme = activeTheme === 'dark' ? 'light' : 'dark';
  toggleTheme(changingElements);
}

export function toggleTheme(elements) {
  elements.forEach((el) =>
    el.forEach((el2) => el2.classList.toggle('light-theme'))
  );
}
