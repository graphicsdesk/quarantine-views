import enterView from 'enter-view';
import textBalancer from 'text-balancer';
import './scripts/page';
import $ from 'jquery';
import {selectAll} from 'd3-selection';
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

$( document ).ready(function() {
  selectAll('.section').style('height', window.innerHeight + 100);
});

var rtime;
var timeout = false;
var delta = 200;
$(window).resize(function() {
    rtime = new Date();
    if (timeout === false) {
        timeout = true;
        setTimeout(resizeend, delta);
    }
});


function resizeend() {
    if (new Date() - rtime < delta) {
        setTimeout(resizeend, delta);
    } else {
        timeout = false;
        selectAll('.section').style('height', window.innerHeight + 100);
    }               
}
