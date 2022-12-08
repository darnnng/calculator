let activeTheme = 'dark';
const changingClasses = ['html', '.calculator', '.screen', '.buttons', '.btn'];

const changingElements = changingClasses.map((el) =>
  document.querySelectorAll(el)
);

export function changeTheme() {
  activeTheme = activeTheme === 'dark' ? 'light' : 'dark';
  toggleTheme(changingElements);
}
function toggleTheme(elements) {
  elements.forEach((el) =>
    el.forEach((el2) => el2.classList.toggle('light-theme'))
  );
}
