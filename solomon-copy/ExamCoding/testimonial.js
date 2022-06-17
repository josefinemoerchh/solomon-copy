window.addEventListener("DOMContentLoaded", init);

function init(event) {
  loadData();
}
async function loadData() {
  const reponse = await fetch(
    "https://technancy.dk/Therapywp/wp-json/wp/v2/solomon?categories=4&per_page=20&_embed"
  );
  //   console.log("reponse2", reponse);
  const TestimonialData = await reponse.json();

  displayTestimonial(TestimonialData);
}
function displayTestimonial(Testimonial) {
  console.log(Testimonial);

  Testimonial.forEach((Testimonial) => {
    //   grap the template
    const template = document.querySelector("#myTemplate").content;
    // copying the template
    const copy = template.cloneNode(true);

    copy.querySelector("#testiImg").src =
      Testimonial._embedded[
        "wp:featuredmedia"
      ][0].media_details.sizes.full.source_url;
    copy.querySelector(".testiname").textContent = Testimonial.testimonialname;
    copy.querySelector(".testiInfo").textContent =
      Testimonial.testimonialdescription;

    const parent = document.querySelector("main");

    parent.appendChild(copy);
  });
}
