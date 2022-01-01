const html = document.querySelector('html');
const checkbox = document.querySelector('#switcher');

const getStyle = (element, style) =>
  window.getComputedStyle(element).getPropertyValue(style);

const initialColors = {
  bg: getStyle(html, '--bg'),
  bgTop: getStyle(html, '--bg-top'),
  cardBg: getStyle(html, '--card-bg'),
  txt: getStyle(html, '--txt'),
  txt2: getStyle(html, '--txt-2'),
};

const darkMode = {
  bg: 'hsl(230, 17%, 14%)',
  bgTop: 'hsl(232, 19%, 15%)',
  cardBg: 'hsl(228, 28%, 20%)',
  txt: '#fff',
  txt2: '#fff',
};

const transformKey = (key) =>
  '--' + key.replace(/([A-Z])/, '-$1').toLowerCase();

const changeColors = (colors) => {
  Object.keys(colors).map((key) =>
    html.style.setProperty(transformKey(key), colors[key]),
  );
};

checkbox.addEventListener('change', ({ target }) => {
  target.checked ? changeColors(darkMode) : changeColors(initialColors);
});
