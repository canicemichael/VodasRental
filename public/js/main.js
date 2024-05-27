/**
 * Template Name: Nova
 * Template URL: https://bootstrapmade.com/nova-bootstrap-business-template/
 * Updated: Mar 17 2024 with Bootstrap v5.3.3
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  /**
   * Preloader
   */
  const preloader = document.querySelector("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }

  /**
   * Sticky header on scroll
   */
  const selectHeader = document.querySelector("#header");
  if (selectHeader) {
    document.addEventListener("scroll", () => {
      window.scrollY > 100
        ? selectHeader.classList.add("sticked")
        : selectHeader.classList.remove("sticked");
    });
  }

  /**
   * Mobile nav toggle
   */
  const mobileNavShow = document.querySelector(".mobile-nav-show");
  const mobileNavHide = document.querySelector(".mobile-nav-hide");

  document.querySelectorAll(".mobile-nav-toggle").forEach((el) => {
    el.addEventListener("click", function (event) {
      event.preventDefault();
      mobileNavToogle();
    });
  });

  function mobileNavToogle() {
    document.querySelector("body").classList.toggle("mobile-nav-active");
    mobileNavShow.classList.toggle("d-none");
    mobileNavHide.classList.toggle("d-none");
  }

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll(".navbar .dropdown > a");

  navDropdowns.forEach((el) => {
    el.addEventListener("click", function (event) {
      if (document.querySelector(".mobile-nav-active")) {
        event.preventDefault();
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("dropdown-active");

        let dropDownIndicator = this.querySelector(".dropdown-indicator");
        dropDownIndicator.classList.toggle("bi-chevron-up");
        dropDownIndicator.classList.toggle("bi-chevron-down");
      }
    });
  });

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector(".scroll-top");
  if (scrollTop) {
    const togglescrollTop = function () {
      window.scrollY > 100
        ? scrollTop.classList.add("active")
        : scrollTop.classList.remove("active");
    };
    window.addEventListener("load", togglescrollTop);
    document.addEventListener("scroll", togglescrollTop);
    scrollTop.addEventListener(
      "click",
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    );
  }

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: ".glightbox",
  });

  /**
   * Init swiper slider with 1 slide at once in desktop view
   */
  new Swiper(".slides-1", {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  /**
   * Init swiper slider with 3 slides at once in desktop view
   */
  new Swiper(".slides-3", {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40,
      },

      1200: {
        slidesPerView: 3,
      },
    },
  });

  /**
   * Porfolio isotope and filter
   */
  let portfolionIsotope = document.querySelector(".portfolio-isotope");

  if (portfolionIsotope) {
    let portfolioFilter = portfolionIsotope.getAttribute(
      "data-portfolio-filter"
    )
      ? portfolionIsotope.getAttribute("data-portfolio-filter")
      : "*";
    let portfolioLayout = portfolionIsotope.getAttribute(
      "data-portfolio-layout"
    )
      ? portfolionIsotope.getAttribute("data-portfolio-layout")
      : "masonry";
    let portfolioSort = portfolionIsotope.getAttribute("data-portfolio-sort")
      ? portfolionIsotope.getAttribute("data-portfolio-sort")
      : "original-order";

    window.addEventListener("load", () => {
      let portfolioIsotope = new Isotope(
        document.querySelector(".portfolio-container"),
        {
          itemSelector: ".portfolio-item",
          layoutMode: portfolioLayout,
          filter: portfolioFilter,
          sortBy: portfolioSort,
        }
      );

      let menuFilters = document.querySelectorAll(
        ".portfolio-isotope .portfolio-flters li"
      );
      menuFilters.forEach(function (el) {
        el.addEventListener(
          "click",
          function () {
            document
              .querySelector(
                ".portfolio-isotope .portfolio-flters .filter-active"
              )
              .classList.remove("filter-active");
            this.classList.add("filter-active");
            portfolioIsotope.arrange({
              filter: this.getAttribute("data-filter"),
            });
            if (typeof aos_init === "function") {
              aos_init();
            }
          },
          false
        );
      });
    });
  }

  /**
   * Animation on scroll function and init
   */
  function aos_init() {
    AOS.init({
      duration: 800,
      easing: "slide",
      once: true,
      mirror: false,
    });
  }
  window.addEventListener("load", () => {
    aos_init();
  });
});

// const numberDisplay = document.getElementById("number");
// const incrementButton = document.getElementById("incrementButton");
// const decrementButton = document.getElementById("decrementButton");

// ------------------------------------------------------
// first modal form
// ------------------------------------------------------

// async function handleFormSubmit(event, formId, endpoint) {
//   event.preventDefault();

//   const form = document.getElementById(formId);
//   const formData = {
//     h3Content1: form.querySelector("h3:nth-of-type(1)").innerText,
//     h3Content2: form.querySelector("h3:nth-of-type(2)").innerText,
//     pContent: form.querySelector("p").innerText,
//     date: form.querySelector('input[type="date"]').value,
//     time: form.querySelector('input[type="time"]').value,
//     quantity: form.querySelector(`#numberForm${formId.replace("form", "")}`)
//       .innerText,
//   };
//   console.log(formData);

//   try {
//     const response = await fetch(endpoint, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     });
//     const result = await response.text();
//     document.getElementById("responseMessage").innerText = result;
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// document
//   .getElementById("form1")
//   .addEventListener("submit", (event) =>
//     handleFormSubmit(event, "form1", "/submit1")
//   );
// document
//   .getElementById("form2")
//   .addEventListener("submit", (event) =>
//     handleFormSubmit(event, "form2", "/submit2")
//   );
// document
//   .getElementById("form3")
//   .addEventListener("submit", (event) =>
//     handleFormSubmit(event, "form3", "/submit3")
//   );
// document
//   .getElementById("form4")
//   .addEventListener("submit", (event) =>
//     handleFormSubmit(event, "form4", "/submit4")
//   );
// document
//   .getElementById("form5")
//   .addEventListener("submit", (event) =>
//     handleFormSubmit(event, "form5", "/submit5")
//   );
// document
//   .getElementById("form6")
//   .addEventListener("submit", (event) =>
//     handleFormSubmit(event, "form6", "/submit6")
//   );
// document
//   .getElementById("form7")
//   .addEventListener("submit", (event) =>
//     handleFormSubmit(event, "form7", "/submit7")
//   );
// document
//   .getElementById("form8")
//   .addEventListener("submit", (event) =>
//     handleFormSubmit(event, "form8", "/submit8")
//   );
// document
//   .getElementById("form9")
//   .addEventListener("submit", (event) =>
//     handleFormSubmit(event, "form9", "/submit9")
//   );
// document
//   .getElementById("form10")
//   .addEventListener("submit", (event) =>
//     handleFormSubmit(event, "form10", "/submit10")
//   );
// document
//   .getElementById("form11")
//   .addEventListener("submit", (event) =>
//     handleFormSubmit(event, "form11", "/submit11")
//   );
// document
//   .getElementById("form12")
//   .addEventListener("submit", (event) =>
//     handleFormSubmit(event, "form12", "/submit12")
//   );
// document
//   .getElementById("form13")
//   .addEventListener("submit", (event) =>
//     handleFormSubmit(event, "form13", "/submit13")
//   );
// document
//   .getElementById("form14")
//   .addEventListener("submit", (event) =>
//     handleFormSubmit(event, "form14", "/submit14")
//   );
// document
//   .getElementById("form15")
//   .addEventListener("submit", (event) =>
//     handleFormSubmit(event, "form15", "/submit15")
//   );
// document
//   .getElementById("form16")
//   .addEventListener("submit", (event) =>
//     handleFormSubmit(event, "form16", "/submit16")
//   );
// document
//   .getElementById("form17")
//   .addEventListener("submit", (event) =>
//     handleFormSubmit(event, "form17", "/submit17")
//   );
// document
//   .getElementById("form18")
//   .addEventListener("submit", (event) =>
//     handleFormSubmit(event, "form18", "/submit18")
//   );
// document
//   .getElementById("form19")
//   .addEventListener("submit", (event) =>
//     handleFormSubmit(event, "form19", "/submit19")
//   );
// document
//   .getElementById("form20")
//   .addEventListener("submit", (event) =>
//     handleFormSubmit(event, "form20", "/submit20")
//   );
// document
//   .getElementById("form21")
//   .addEventListener("submit", (event) =>
//     handleFormSubmit(event, "form21", "/submit21")
//   );
// document
//   .getElementById("form22")
//   .addEventListener("submit", (event) =>
//     handleFormSubmit(event, "form22", "/submit22")
//   );
// document
//   .getElementById("form23")
//   .addEventListener("submit", (event) =>
//     handleFormSubmit(event, "form23", "/submit23")
//   );
// document
//   .getElementById("form24")
//   .addEventListener("submit", (event) =>
//     handleFormSubmit(event, "form24", "/submit24")
//   );
// document
//   .getElementById("form25")
//   .addEventListener("submit", (event) =>
//     handleFormSubmit(event, "form25", "/submit25")
//   );
// document
//   .getElementById("form26")
//   .addEventListener("submit", (event) =>
//     handleFormSubmit(event, "form26", "/submit26")
//   );
// document
//   .getElementById("form27")
//   .addEventListener("submit", (event) =>
//     handleFormSubmit(event, "form27", "/submit27")
//   );
// document
//   .getElementById("form28")
//   .addEventListener("submit", (event) =>
//     handleFormSubmit(event, "form28", "/submit28")
//   );
// document
//   .getElementById("form29")
//   .addEventListener("submit", (event) =>
//     handleFormSubmit(event, "form29", "/submit29")
//   );
// document
//   .getElementById("form30")
//   .addEventListener("submit", (event) =>
//     handleFormSubmit(event, "form30", "/submit30")
//   );

// // Example code to handle quantity increment/decrement
document.querySelectorAll(".btn-minus").forEach((btnn, index) => {
  btnn.addEventListener("click", function (e) {
    e.preventDefault();
    let numberElem = document.getElementById(`numberForm${index + 1}`);
    let number = parseInt(numberElem.innerText);
    if (number > 1) {
      numberElem.innerText = number - 1;
    }
  });
});

document.querySelectorAll(".btn-add").forEach((btnn, index) => {
  btnn.addEventListener("click", function (e) {
    e.preventDefault();
    let numberElem = document.getElementById(`numberForm${index + 1}`);
    let number = parseInt(numberElem.innerText);
    numberElem.innerText = number + 1;
  });
});

// const incrementButton1 = document.getElementById("incrementButton1");
// const incrementButton2 = document.getElementById("incrementButton2");
// const incrementButton3 = document.getElementById("incrementButton3");
// const incrementButton4 = document.getElementById("incrementButton4");
// const incrementButton5 = document.getElementById("incrementButton5");
// const incrementButton6 = document.getElementById("incrementButton6");
// const incrementButton7 = document.getElementById("incrementButton7");
// const incrementButton8 = document.getElementById("incrementButton8");
// const incrementButton9 = document.getElementById("incrementButton9");
// const incrementButton10 = document.getElementById("incrementButton10");
// const incrementButton11 = document.getElementById("incrementButton11");
// const incrementButton12 = document.getElementById("incrementButton12");
// const incrementButton13 = document.getElementById("incrementButton13");
// const incrementButton14 = document.getElementById("incrementButton14");
// const incrementButton15 = document.getElementById("incrementButton15");
// const incrementButton16 = document.getElementById("incrementButton16");
// const incrementButton17 = document.getElementById("incrementButton17");
// const incrementButton18 = document.getElementById("incrementButton18");
// const incrementButton19 = document.getElementById("incrementButton19");
// const incrementButton20 = document.getElementById("incrementButton20");
// const incrementButton21 = document.getElementById("incrementButton21");
// const incrementButton22 = document.getElementById("incrementButton22");
// const incrementButton23 = document.getElementById("incrementButton23");
// const incrementButton24 = document.getElementById("incrementButton24");
// const incrementButton25 = document.getElementById("incrementButton25");
// const incrementButton26 = document.getElementById("incrementButton26");
// const incrementButton27 = document.getElementById("incrementButton27");
// const incrementButton28 = document.getElementById("incrementButton28");
// const incrementButton29 = document.getElementById("incrementButton29");
// const incrementButton30 = document.getElementById("incrementButton30");

// const countButton = document.getElementById("countButton");
// let count = 0;

// // ====================================================================

// let hasIncremented1 = false;
// let hasIncremented2 = false;
// let hasIncremented3 = false;
// let hasIncremented4 = false;
// let hasIncremented5 = false;
// let hasIncremented6 = false;
// let hasIncremented7 = false;
// let hasIncremented8 = false;
// let hasIncremented9 = false;
// let hasIncremented10 = false;
// let hasIncremented11 = false;
// let hasIncremented12 = false;
// let hasIncremented13 = false;
// let hasIncremented14 = false;
// let hasIncremented15 = false;
// let hasIncremented16 = false;
// let hasIncremented17 = false;
// let hasIncremented18 = false;
// let hasIncremented19 = false;
// let hasIncremented20 = false;
// let hasIncremented21 = false;
// let hasIncremented22 = false;
// let hasIncremented23 = false;
// let hasIncremented24 = false;
// let hasIncremented25 = false;
// let hasIncremented26 = false;
// let hasIncremented27 = false;
// let hasIncremented28 = false;
// let hasIncremented29 = false;
// let hasIncremented30 = false;

// // ====================================================================

// incrementButton1.addEventListener("click", () => {
//   if (!hasIncremented1) {
//     count++;
//     countButton.textContent = `${count}`;
//     hasIncremented1 = true;
//   }
// });

// incrementButton2.addEventListener("click", () => {
//   if (!hasIncremented2) {
//     count++;
//     countButton.textContent = `${count}`;
//     hasIncremented2 = true;
//   }
// });

// incrementButton3.addEventListener("click", () => {
//   if (!hasIncremented3) {
//     count++;
//     countButton.textContent = `${count}`;
//     hasIncremented3 = true;
//   }
// });

// incrementButton4.addEventListener("click", () => {
//   if (!hasIncremented4) {
//     count++;
//     countButton.textContent = `${count}`;
//     hasIncremented4 = true;
//   }
// });

// incrementButton5.addEventListener("click", () => {
//   if (!hasIncremented5) {
//     count++;
//     countButton.textContent = `${count}`;
//     hasIncremented5 = true;
//   }
// });

// incrementButton6.addEventListener("click", () => {
//   if (!hasIncremented6) {
//     count++;
//     countButton.textContent = `${count}`;
//     hasIncremented6 = true;
//   }
// });

// incrementButton7.addEventListener("click", () => {
//   if (!hasIncremented7) {
//     count++;
//     countButton.textContent = `${count}`;
//     hasIncremented7 = true;
//   }
// });

// incrementButton8.addEventListener("click", () => {
//   if (!hasIncremented8) {
//     count++;
//     countButton.textContent = `${count}`;
//     hasIncremented8 = true;
//   }
// });

// incrementButton9.addEventListener("click", () => {
//   if (!hasIncremented9) {
//     count++;
//     countButton.textContent = `${count}`;
//     hasIncremented9 = true;
//   }
// });

// incrementButton10.addEventListener("click", () => {
//   if (!hasIncremented10) {
//     count++;
//     countButton.textContent = `${count}`;
//     hasIncremented10 = true;
//   }
// });

// incrementButton11.addEventListener("click", () => {
//   if (!hasIncremented11) {
//     count++;
//     countButton.textContent = `${count}`;
//     hasIncremented11 = true;
//   }
// });

// incrementButton12.addEventListener("click", () => {
//   if (!hasIncremented12) {
//     count++;
//     countButton.textContent = `${count}`;
//     hasIncremented12 = true;
//   }
// });

// incrementButton13.addEventListener("click", () => {
//   if (!hasIncremented13) {
//     count++;
//     countButton.textContent = `${count}`;
//     hasIncremented13 = true;
//   }
// });

// incrementButton14.addEventListener("click", () => {
//   if (!hasIncremented14) {
//     count++;
//     countButton.textContent = `${count}`;
//     hasIncremented14 = true;
//   }
// });

// incrementButton15.addEventListener("click", () => {
//   if (!hasIncremented15) {
//     count++;
//     countButton.textContent = `${count}`;
//     hasIncremented15 = true;
//   }
// });

// incrementButton16.addEventListener("click", () => {
//   if (!hasIncremented16) {
//     count++;
//     countButton.textContent = `${count}`;
//     hasIncremented16 = true;
//   }
// });

// incrementButton17.addEventListener("click", () => {
//   if (!hasIncremented17) {
//     count++;
//     countButton.textContent = `${count}`;
//     hasIncremented17 = true;
//   }
// });

// incrementButton18.addEventListener("click", () => {
//   if (!hasIncremented18) {
//     count++;
//     countButton.textContent = `${count}`;
//     hasIncremented18 = true;
//   }
// });

// incrementButton19.addEventListener("click", () => {
//   if (!hasIncremented19) {
//     count++;
//     countButton.textContent = `${count}`;
//     hasIncremented19 = true;
//   }
// });

// incrementButton20.addEventListener("click", () => {
//   if (!hasIncremented20) {
//     count++;
//     countButton.textContent = `${count}`;
//     hasIncremented20 = true;
//   }
// });

// incrementButton21.addEventListener("click", () => {
//   if (!hasIncremented21) {
//     count++;
//     countButton.textContent = `${count}`;
//     hasIncremented21 = true;
//   }
// });

// incrementButton22.addEventListener("click", () => {
//   if (!hasIncremented22) {
//     count++;
//     countButton.textContent = `${count}`;
//     hasIncremented22 = true;
//   }
// });

// incrementButton23.addEventListener("click", () => {
//   if (!hasIncremented23) {
//     count++;
//     countButton.textContent = `${count}`;
//     hasIncremented23 = true;
//   }
// });

// incrementButton24.addEventListener("click", () => {
//   if (!hasIncremented24) {
//     count++;
//     countButton.textContent = `${count}`;
//     hasIncremented24 = true;
//   }
// });

// incrementButton25.addEventListener("click", () => {
//   if (!hasIncremented25) {
//     count++;
//     countButton.textContent = `${count}`;
//     hasIncremented25 = true;
//   }
// });

// incrementButton26.addEventListener("click", () => {
//   if (!hasIncremented26) {
//     count++;
//     countButton.textContent = `${count}`;
//     hasIncremented26 = true;
//   }
// });

// incrementButton27.addEventListener("click", () => {
//   if (!hasIncremented27) {
//     count++;
//     countButton.textContent = `${count}`;
//     hasIncremented27 = true;
//   }
// });

// incrementButton28.addEventListener("click", () => {
//   if (!hasIncremented28) {
//     count++;
//     countButton.textContent = `${count}`;
//     hasIncremented28 = true;
//   }
// });

// incrementButton29.addEventListener("click", () => {
//   if (!hasIncremented29) {
//     count++;
//     countButton.textContent = `${count}`;
//     hasIncremented29 = true;
//   }
// });

// incrementButton30.addEventListener("click", () => {
//   if (!hasIncremented30) {
//     count++;
//     countButton.textContent = `${count}`;
//     hasIncremented30 = true;
//   }
// });

// ====================================================================

// const cookies = document.cookie;
//         if (!cookies) {
//             console.log('no cookie');
//         }
        
//         const cookieArray = cookies.split(';').map(cookie => cookie.trim());
//         const cookieCount = cookieArray.length;
//         const formattedCookies = cookieArray.map(cookie => {
//             const [key, value] = cookie.split('=');
//             return `Key: ${key}, Value: ${value}`;
//         }).join('\n');

//         console.log(cookieCount);



// const formData = {
  //     h3Content1: form.querySelector("h3:nth-of-type(1)").innerText,
  //     h3Content2: form.querySelector("h3:nth-of-type(2)").innerText,
  //     pContent: form.querySelector("p").innerText,
  //     date: form.querySelector('input[type="date"]').value,
  //     time: form.querySelector('input[type="time"]').value,
  //     quantity: form.querySelector(`#numberForm${formId.replace("form", "")}`)
  //       .innerText,
  //   };

const forms = [
  { formId: 'form1', nameField: 'nameForm1', emailField: 'emailForm1', dateField: 'dateForm1', timeField: 'timeForm1', quantityField: 'numberForm1', nameCookie: 'form_name1', emailCookie: 'form_email1' },
  { formId: 'form2', nameField: 'nameForm2', emailField: 'emailForm2', dateField: 'dateForm2', timeField: 'timeForm2', quantityField: 'numberForm2', nameCookie: 'form_name2', emailCookie: 'form_email2' },
  { formId: 'form3', nameField: 'nameForm3', emailField: 'emailForm3', dateField: 'dateForm3', timeField: 'timeForm3', quantityField: 'numberForm3', nameCookie: 'form_name3', emailCookie: 'form_email3' },
  { formId: 'form4', nameField: 'nameForm4', emailField: 'emailForm4', dateField: 'dateForm4', timeField: 'timeForm4', quantityField: 'numberForm4', nameCookie: 'form_name4', emailCookie: 'form_email4' },
  { formId: 'form5', nameField: 'nameForm5', emailField: 'emailForm5', dateField: 'dateForm5', timeField: 'timeForm5', quantityField: 'numberForm5', nameCookie: 'form_name5', emailCookie: 'form_email5' },
  { formId: 'form6', nameField: 'nameForm6', emailField: 'emailForm6', dateField: 'dateForm6', timeField: 'timeForm6', quantityField: 'numberForm6', nameCookie: 'form_name6', emailCookie: 'form_email6' },
  { formId: 'form7', nameField: 'nameForm7', emailField: 'emailForm7', dateField: 'dateForm7', timeField: 'timeForm7', quantityField: 'numberForm7', nameCookie: 'form_name7', emailCookie: 'form_email7' },
  { formId: 'form8', nameField: 'nameForm8', emailField: 'emailForm8', dateField: 'dateForm8', timeField: 'timeForm8', quantityField: 'numberForm8', nameCookie: 'form_name8', emailCookie: 'form_email8' },
  { formId: 'form9', nameField: 'nameForm9', emailField: 'emailForm9', dateField: 'dateForm9', timeField: 'timeForm9', quantityField: 'numberForm9', nameCookie: 'form_name9', emailCookie: 'form_email9' },
  { formId: 'form10', nameField: 'nameForm10', emailField: 'emailForm10', dateField: 'dateForm10', timeField: 'timeForm10', quantityField: 'numberForm10', nameCookie: 'form_name10', emailCookie: 'form_email10' },
  { formId: 'form11', nameField: 'nameForm11', emailField: 'emailForm11', dateField: 'dateForm11', timeField: 'timeForm11', quantityField: 'numberForm11', nameCookie: 'form_name11', emailCookie: 'form_email11' },
  { formId: 'form12', nameField: 'nameForm12', emailField: 'emailForm12', dateField: 'dateForm12', timeField: 'timeForm12', quantityField: 'numberForm12', nameCookie: 'form_name12', emailCookie: 'form_email12' },
  { formId: 'form13', nameField: 'nameForm13', emailField: 'emailForm13', dateField: 'dateForm13', timeField: 'timeForm13', quantityField: 'numberForm13', nameCookie: 'form_name13', emailCookie: 'form_email13' },
  { formId: 'form14', nameField: 'nameForm14', emailField: 'emailForm14', dateField: 'dateForm14', timeField: 'timeForm14', quantityField: 'numberForm14', nameCookie: 'form_name14', emailCookie: 'form_email14' },
  { formId: 'form15', nameField: 'nameForm15', emailField: 'emailForm15', dateField: 'dateForm15', timeField: 'timeForm15', quantityField: 'numberForm15', nameCookie: 'form_name15', emailCookie: 'form_email15' },
  { formId: 'form16', nameField: 'nameForm16', emailField: 'emailForm16', dateField: 'dateForm16', timeField: 'timeForm16', quantityField: 'numberForm16', nameCookie: 'form_name16', emailCookie: 'form_email16' },
  { formId: 'form17', nameField: 'nameForm17', emailField: 'emailForm17', dateField: 'dateForm17', timeField: 'timeForm17', quantityField: 'numberForm17', nameCookie: 'form_name17', emailCookie: 'form_email17' },
  { formId: 'form18', nameField: 'nameForm18', emailField: 'emailForm18', dateField: 'dateForm18', timeField: 'timeForm18', quantityField: 'numberForm18', nameCookie: 'form_name18', emailCookie: 'form_email18' },
  { formId: 'form19', nameField: 'nameForm19', emailField: 'emailForm19', dateField: 'dateForm19', timeField: 'timeForm19', quantityField: 'numberForm19', nameCookie: 'form_name19', emailCookie: 'form_email19' },
  { formId: 'form20', nameField: 'nameForm20', emailField: 'emailForm20', dateField: 'dateForm20', timeField: 'timeForm20', quantityField: 'numberForm20', nameCookie: 'form_name20', emailCookie: 'form_email20' },
  { formId: 'form21', nameField: 'nameForm21', emailField: 'emailForm21', dateField: 'dateForm21', timeField: 'timeForm21', quantityField: 'numberForm21', nameCookie: 'form_name21', emailCookie: 'form_email21' },
  { formId: 'form22', nameField: 'nameForm22', emailField: 'emailForm22', dateField: 'dateForm22', timeField: 'timeForm22', quantityField: 'numberForm22', nameCookie: 'form_name22', emailCookie: 'form_email22' },
  { formId: 'form23', nameField: 'nameForm23', emailField: 'emailForm23', dateField: 'dateForm23', timeField: 'timeForm23', quantityField: 'numberForm23', nameCookie: 'form_name23', emailCookie: 'form_email23' },
  { formId: 'form24', nameField: 'nameForm24', emailField: 'emailForm24', dateField: 'dateForm24', timeField: 'timeForm24', quantityField: 'numberForm24', nameCookie: 'form_name24', emailCookie: 'form_email24' },
  { formId: 'form25', nameField: 'nameForm25', emailField: 'emailForm25', dateField: 'dateForm25', timeField: 'timeForm25', quantityField: 'numberForm25', nameCookie: 'form_name25', emailCookie: 'form_email25' },
  { formId: 'form26', nameField: 'nameForm26', emailField: 'emailForm26', dateField: 'dateForm26', timeField: 'timeForm26', quantityField: 'numberForm26', nameCookie: 'form_name26', emailCookie: 'form_email26' },
  { formId: 'form27', nameField: 'nameForm27', emailField: 'emailForm27', dateField: 'dateForm27', timeField: 'timeForm27', quantityField: 'numberForm27', nameCookie: 'form_name27', emailCookie: 'form_email27' },
  { formId: 'form28', nameField: 'nameForm28', emailField: 'emailForm28', dateField: 'dateForm28', timeField: 'timeForm28', quantityField: 'numberForm28', nameCookie: 'form_name28', emailCookie: 'form_email28' },
  { formId: 'form29', nameField: 'nameForm29', emailField: 'emailForm29', dateField: 'dateForm29', timeField: 'timeForm29', quantityField: 'numberForm29', nameCookie: 'form_name29', emailCookie: 'form_email29' },
  { formId: 'form30', nameField: 'nameForm30', emailField: 'emailForm30', dateField: 'dateForm30', timeField: 'timeForm30', quantityField: 'numberForm30', nameCookie: 'form_name30', emailCookie: 'form_email30' },
];

const cookieCountDisplay = document.getElementById('cookieCountDisplay');

forms.forEach(formConfig => {
  const form = document.getElementById(formConfig.formId);

  form.addEventListener('submit', (event) => {
      event.preventDefault();

      const formData = new FormData(form);
      const name = formData.get('name');
      const email = formData.get('email');
      const date = formData.get('date');
      const time = formData.get('time');
      const quantity = document.getElementById(formConfig.quantityField).textContent;

      setCookie(formConfig.nameCookie, name, 7);
      setCookie(formConfig.emailCookie, email, 7);
      setCookie(formConfig.dateField, date, 7);
      setCookie(formConfig.timeField, time, 7);
      setCookie(formConfig.quantityField, quantity, 7);

      updateCookieCount();
  });
});

// document.querySelectorAll('.btn-minus').forEach(button => {
//   button.addEventListener('click', (event) => {
//       event.preventDefault();
//       const formId = button.getAttribute('data-form');
//       const countElement = document.getElementById(`number${formId}`);
//       let count = parseInt(countElement.textContent, 10);
//       if (count > 1) {
//           countElement.textContent = --count;
//       }
//   });
// });

// document.querySelectorAll('.btn-add').forEach(button => {
//   button.addEventListener('click', (event) => {
//       event.preventDefault();
//       const formId = button.getAttribute('data-form');
//       const countElement = document.getElementById(`number${formId}`);
//       let count = parseInt(countElement.textContent, 10);
//       countElement.textContent = ++count;
//   });
// });

function updateCookieCount() {
  const cookieArray = document.cookie.split(';');
  const formCookieCount = cookieArray.filter(cookie => cookie.trim().startsWith('form_')).length;
  cookieCountDisplay.textContent = ` ${formCookieCount/2}`;
}

function setCookie(name, value, days) {
  let expires = "";
  if (days) {
      const date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  const cookieArray = document.cookie.split(';');
  for (let cookie of cookieArray) {
      let [key, value] = cookie.split('=');
      key = key.trim();
      if (key === name) {
          return value ? decodeURIComponent(value.trim()) : "";
      }
  }
  return null;
}

// Initial cookie count update on page load
updateCookieCount();

function deleteAllCookies() {
  const cookies = document.cookie.split(";");

  for (let cookie of cookies) {
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
  }
}
// deleteAllCookies();

var domCookies = document.cookie.split(';').map(cookie => cookie.split('=')).reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {});
console.log(domCookies);


// button animation
var buttons = document.querySelectorAll('.btn-dark');

Array.prototype.forEach.call(buttons, function (b) {
  b.addEventListener('click', createRipple)
});

function createRipple(event) {
  var ripple = document.createElement('span');
  ripple.classList.add('ripple');
  
  var max = Math.max(this.offsetWidth, this.offsetHeight);
  
  ripple.style.width = ripple.style.height = max*2 + 'px';
  
  var rect = this.getBoundingClientRect();
  
  ripple.style.left = event.clientX - rect.left - max + 'px';
  ripple.style.top = event.clientY - rect.top - max + 'px';
  
  this.appendChild(ripple);
}