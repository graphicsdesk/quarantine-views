import enterView from 'enter-view';
import textBalancer from 'text-balancer';
import './scripts/page';
// import $ from 'jquery';
// import {selectAll} from 'd3-selection';
import { spectate as spectateConfig } from '../package.json';
const { USE_NEWS_NAV, USE_EYE_NAV, USE_COVER_HED } = spectateConfig;

// Fade in navbar at scroll trigger

const navbar = document.getElementById('navbar');

if (USE_NEWS_NAV || USE_EYE_NAV || USE_COVER_HED) {
  enterView({
    selector: '.headline',
    offset: 1,
    enter: () => {
      navbar.classList.remove('only-eye-logo');
      navbar.classList.remove('hide-news-navbar');
    },
    exit: () => {
      navbar.classList.remove('show-nav-links');
      navbar.classList.add('only-eye-logo');
      navbar.classList.add('hide-news-navbar');
    },
  });
}

// Mobile navbar hamburger trigger

export function hamburgerTrigger() {
  navbar.classList.toggle('show-nav-links');
}

// Text balance headline, deck, and image captions

if (window.innerWidth <= 460) {
  textBalancer.balanceText('.headline, .deck, .image-caption-text');
}

// $( document ).ready(function() {
// Don't need document.ready because script is already at the bottom of <body>
function resizeSections() {
  if (window.innerWidth <= 500) {
    return;
  }
  for (const section of document.getElementsByClassName('section')) {
    // We can select elements with vanilla JS, so we don't have to include all
    // the D3 code in our build.
    // selectAll('.section').style('height', window.innerWidth/2 + 200);
    section.style.height = window.innerWidth / 2 + 200 + 'px';
  }
}
resizeSections();
// });

// $( window ).resize(function() {
// Prefer the vanilla resize event listener so we don't have to include all the jQuery
// code in the build
window.addEventListener('resize', resizeSections);
// });
