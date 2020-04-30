import './scripts/page';

// Don't need document.ready because script is already at the bottom of <body>
function resizeSections() {
  if (window.innerWidth <= 500) {
    return;
  }
  for (const section of document.getElementsByClassName('section')) {
    // We can select elements with vanilla JS, so we don't have to include all
    // the D3 code in our build.
    section.style.height = window.innerWidth / 2 + 200 + 'px';
  }
}
resizeSections();

// Prefer the vanilla resize event listener so we don't have to include all the jQuery
// code in the build
window.addEventListener('resize', resizeSections);
