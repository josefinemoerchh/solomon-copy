const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
let url =
  "https://technancy.dk/Therapywp/wp-json/wp/v2/solomon/" + id + "?_embed";
//technancy.dk/Therapywp/wp-json/wp/v2/solomon?id&categories=6&_embed
https: fetch(url)
  .then(function (res) {
    console.log(res);
    return res.json();
  })
  .then(function (data) {
    console.log(data);
    handleService(data);
  });

function handleService(service) {
  document.querySelector(".productimg").src =
    service._embedded[
      "wp:featuredmedia"
    ][0].media_details.sizes.medium.source_url;

  document.querySelector(".productheading").textContent = service.servicename;
  document.querySelector(".list").textContent = service.list;
  document.querySelector(".servicedescription").textContent =
    service.servicedescription1;
  document.querySelector(".hookline").textContent = service.hookline;
  document.querySelector(".productprice").textContent = service.fees;
}
