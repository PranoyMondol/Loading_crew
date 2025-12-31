"use strict";

var navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = function () {
  navbar.classList.toggle('active');
};

document.querySelectorAll('.about .video-container .controls .control-btn').forEach(function (btn) {
  btn.onclick = function () {
    var src = btn.getAttribute('data-src');
    document.querySelector('.about .video-container .video').src = src;
  };
});