"use strict";

// booking.js
function getQueryParam(name) {
  var params = new URLSearchParams(window.location.search);
  return params.get(name);
}

function formatDateISOToReadable(iso) {
  if (!iso) return "";
  var d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

document.addEventListener("DOMContentLoaded", function () {
  var place = getQueryParam("place") || "Not set";
  var date = getQueryParam("date") || "";
  var people = getQueryParam("people") || "Not set";
  document.getElementById("sum-place").textContent = place;
  document.getElementById("sum-date").textContent = date ? formatDateISOToReadable(date) : "Not set";
  document.getElementById("sum-people").textContent = people;
  var form = document.getElementById("bookingForm");
  var hint = document.getElementById("formHint");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    hint.textContent = "Request submitted. We will contact you shortly.";
    hint.style.opacity = "1";
    form.reset();
  });
});