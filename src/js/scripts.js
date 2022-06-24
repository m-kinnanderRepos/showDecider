//
// Scripts
//

window.addEventListener("DOMContentLoaded", (event) => {
  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      offset: 74,
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});

function sayHello(nameOfShow) {
  console.log(nameOfShow);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "4b76ce3031mshc0abcd2f11a8749p10bb4cjsn1571e685dddf",
      "X-RapidAPI-Host": "frecar-epguides-api-v1.p.rapidapi.com",
    },
  };

  fetch(
    "https://frecar-epguides-api-v1.p.rapidapi.com/" + nameOfShow + "/",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response)
      console.log(response['1']['0']['title'])
      console.log(Object.keys(response).length)
      console.log(Object.keys(response['1']).length)
    })
    .catch((err) => console.error(err));
}

// $("buttonShowInput").click(function () {
//   //   var that = $(this);
//   // $('#showInput').val();
//   // that.toggleClass('active').siblings().removeClass('active');
//   const options = {
//     method: "GET",
//     headers: {
//       "X-RapidAPI-Key": "4b76ce3031mshc0abcd2f11a8749p10bb4cjsn1571e685dddf",
//       "X-RapidAPI-Host": "frecar-epguides-api-v1.p.rapidapi.com",
//     },
//   };

//   fetch(
//     "https://frecar-epguides-api-v1.p.rapidapi.com/" +
//       $("#showInput").val() +
//       "/",
//     options
//   )
//     .then((response) => response.json())
//     .then((response) => console.log(response))
//     .catch((err) => console.error(err));
// });
