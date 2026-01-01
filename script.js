let navbar = document.querySelector('.header .navbar');
document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.toggle('active');
};

document.querySelectorAll('.about .video-container .controls .control-btn').forEach(btn =>{
  btn.onclick = () =>{
    let src = btn.getAttribute('data-src');
    document.querySelector('.about .video-container .video').src = src;
  }
})


// Booking search redirect (landing page)
const searchForm = document.getElementById("searchForm");
if (searchForm) {
  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const place = document.getElementById("placeInput").value.trim();
    const date = document.getElementById("dateInput").value;
    const people = document.getElementById("peopleInput").value;

    const url =
      `booking.html?place=${encodeURIComponent(place)}` +
      `&date=${encodeURIComponent(date)}` +
      `&people=${encodeURIComponent(people)}`;

    window.location.href = url;
  });
}
