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
}); // Booking search redirect (landing page)

var searchForm = document.getElementById("searchForm");

if (searchForm) {
  searchForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var place = document.getElementById("placeInput").value.trim();
    var date = document.getElementById("dateInput").value;
    var people = document.getElementById("peopleInput").value;
    var url = "booking.html?place=".concat(encodeURIComponent(place)) + "&date=".concat(encodeURIComponent(date)) + "&people=".concat(encodeURIComponent(people));
    window.location.href = url;
  });
}