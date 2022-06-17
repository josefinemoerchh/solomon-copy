window.addEventListener("DOMContentLoaded", init);

function init(event) {
  loadData();
}
async function loadData() {
  const reponse = await fetch(
    "https://technancy.dk/Therapywp/wp-json/wp/v2/solomon?categories=5&_embed"
  );
  //   console.log("reponse2", reponse);
  const bookingData = await reponse.json();

  displayBooking(bookingData);
}
function displayBooking(booking) {
  console.log(booking);

  booking.forEach((booking) => {
    //   grap the template
    const template = document.querySelector("#myTemplate").content;
    // copying the template
    const copy = template.cloneNode(true);

    copy.querySelector("h2").textContent = booking.contactinfo;
    copy.querySelector(".session").textContent = booking.session;
    copy.querySelector(".time").textContent = booking.time;
    copy.querySelector(".fee").textContent = booking.fee;

    const parent = document.querySelector("main");

    parent.appendChild(copy);
  });
}
