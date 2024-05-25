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

async function handleFormSubmit(event, formId, endpoint) {
  event.preventDefault();

  const form = document.getElementById(formId);
  const formData = {
    h3Content1: form.querySelector("h3:nth-of-type(1)").innerText,
    h3Content2: form.querySelector("h3:nth-of-type(2)").innerText,
    pContent: form.querySelector("p").innerText,
    date: form.querySelector('input[type="date"]').value,
    time: form.querySelector('input[type="time"]').value,
    quantity: form.querySelector(`#numberForm${formId.replace("form", "")}`)
      .innerText,
  };
  console.log(formData);

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const result = await response.text();
    document.getElementById("responseMessage").innerText = result;
  } catch (error) {
    console.error("Error:", error);
  }
}

document
  .getElementById("form1")
  .addEventListener("submit", (event) =>
    handleFormSubmit(event, "form1", "/submit1")
  );
document
  .getElementById("form2")
  .addEventListener("submit", (event) =>
    handleFormSubmit(event, "form2", "/submit2")
  );
document
  .getElementById("form3")
  .addEventListener("submit", (event) =>
    handleFormSubmit(event, "form3", "/submit3")
  );
document
  .getElementById("form4")
  .addEventListener("submit", (event) =>
    handleFormSubmit(event, "form4", "/submit4")
  );
document
  .getElementById("form5")
  .addEventListener("submit", (event) =>
    handleFormSubmit(event, "form5", "/submit5")
  );
document
  .getElementById("form6")
  .addEventListener("submit", (event) =>
    handleFormSubmit(event, "form6", "/submit6")
  );
document
  .getElementById("form7")
  .addEventListener("submit", (event) =>
    handleFormSubmit(event, "form7", "/submit7")
  );
document
  .getElementById("form8")
  .addEventListener("submit", (event) =>
    handleFormSubmit(event, "form8", "/submit8")
  );
document
  .getElementById("form9")
  .addEventListener("submit", (event) =>
    handleFormSubmit(event, "form9", "/submit9")
  );
document
  .getElementById("form10")
  .addEventListener("submit", (event) =>
    handleFormSubmit(event, "form10", "/submit10")
  );
document
  .getElementById("form11")
  .addEventListener("submit", (event) =>
    handleFormSubmit(event, "form11", "/submit11")
  );
document
  .getElementById("form12")
  .addEventListener("submit", (event) =>
    handleFormSubmit(event, "form12", "/submit12")
  );
document
  .getElementById("form13")
  .addEventListener("submit", (event) =>
    handleFormSubmit(event, "form13", "/submit13")
  );
document
  .getElementById("form14")
  .addEventListener("submit", (event) =>
    handleFormSubmit(event, "form14", "/submit14")
  );
document
  .getElementById("form15")
  .addEventListener("submit", (event) =>
    handleFormSubmit(event, "form15", "/submit15")
  );
document
  .getElementById("form16")
  .addEventListener("submit", (event) =>
    handleFormSubmit(event, "form16", "/submit16")
  );
document
  .getElementById("form17")
  .addEventListener("submit", (event) =>
    handleFormSubmit(event, "form17", "/submit17")
  );
document
  .getElementById("form18")
  .addEventListener("submit", (event) =>
    handleFormSubmit(event, "form18", "/submit18")
  );
document
  .getElementById("form19")
  .addEventListener("submit", (event) =>
    handleFormSubmit(event, "form19", "/submit19")
  );
document
  .getElementById("form20")
  .addEventListener("submit", (event) =>
    handleFormSubmit(event, "form20", "/submit20")
  );
document
  .getElementById("form21")
  .addEventListener("submit", (event) =>
    handleFormSubmit(event, "form21", "/submit21")
  );
document
  .getElementById("form22")
  .addEventListener("submit", (event) =>
    handleFormSubmit(event, "form22", "/submit22")
  );
document
  .getElementById("form23")
  .addEventListener("submit", (event) =>
    handleFormSubmit(event, "form23", "/submit23")
  );
document
  .getElementById("form24")
  .addEventListener("submit", (event) =>
    handleFormSubmit(event, "form24", "/submit24")
  );
document
  .getElementById("form25")
  .addEventListener("submit", (event) =>
    handleFormSubmit(event, "form25", "/submit25")
  );
document
  .getElementById("form26")
  .addEventListener("submit", (event) =>
    handleFormSubmit(event, "form26", "/submit26")
  );
document
  .getElementById("form27")
  .addEventListener("submit", (event) =>
    handleFormSubmit(event, "form27", "/submit27")
  );
document
  .getElementById("form28")
  .addEventListener("submit", (event) =>
    handleFormSubmit(event, "form28", "/submit28")
  );
document
  .getElementById("form29")
  .addEventListener("submit", (event) =>
    handleFormSubmit(event, "form29", "/submit29")
  );
document
  .getElementById("form30")
  .addEventListener("submit", (event) =>
    handleFormSubmit(event, "form30", "/submit30")
  );

// Example code to handle quantity increment/decrement
document.querySelectorAll(".btn-minus").forEach((btnn, index) => {
  btnn.addEventListener("click", function (e) {
    e.preventDefault();
    let numberElem = document.getElementById(`numberForm${index + 1}`);
    let number = parseInt(numberElem.innerText);
    if (number > 0) {
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

const incrementButton1 = document.getElementById("incrementButton1");
const incrementButton2 = document.getElementById("incrementButton2");
const incrementButton3 = document.getElementById("incrementButton3");
const incrementButton4 = document.getElementById("incrementButton4");
const incrementButton5 = document.getElementById("incrementButton5");
const incrementButton6 = document.getElementById("incrementButton6");
const incrementButton7 = document.getElementById("incrementButton7");
const incrementButton8 = document.getElementById("incrementButton8");
const incrementButton9 = document.getElementById("incrementButton9");
const incrementButton10 = document.getElementById("incrementButton10");
const incrementButton11 = document.getElementById("incrementButton11");
const incrementButton12 = document.getElementById("incrementButton12");
const incrementButton13 = document.getElementById("incrementButton13");
const incrementButton14 = document.getElementById("incrementButton14");
const incrementButton15 = document.getElementById("incrementButton15");
const incrementButton16 = document.getElementById("incrementButton16");
const incrementButton17 = document.getElementById("incrementButton17");
const incrementButton18 = document.getElementById("incrementButton18");
const incrementButton19 = document.getElementById("incrementButton19");
const incrementButton20 = document.getElementById("incrementButton20");
const incrementButton21 = document.getElementById("incrementButton21");
const incrementButton22 = document.getElementById("incrementButton22");
const incrementButton23 = document.getElementById("incrementButton23");
const incrementButton24 = document.getElementById("incrementButton24");
const incrementButton25 = document.getElementById("incrementButton25");
const incrementButton26 = document.getElementById("incrementButton26");
const incrementButton27 = document.getElementById("incrementButton27");
const incrementButton28 = document.getElementById("incrementButton28");
const incrementButton29 = document.getElementById("incrementButton29");
const incrementButton30 = document.getElementById("incrementButton30");


const countButton = document.getElementById("countButton");
let count = 0;

incrementButton1.addEventListener("click", () => {
  count++;
  countButton.textContent = `${count}`;
});

incrementButton2.addEventListener("click", () => {
  count++;
  countButton.textContent = `${count}`;
});

incrementButton3.addEventListener("click", () => {
  count++;
  countButton.textContent = `${count}`;
});

incrementButton4.addEventListener("click", () => {
  count++;
  countButton.textContent = `${count}`;
});

incrementButton5.addEventListener("click", () => {
  count++;
  countButton.textContent = `${count}`;
});

incrementButton6.addEventListener("click", () => {
  count++;
  countButton.textContent = `${count}`;
});

incrementButton7.addEventListener("click", () => {
  count++;
  countButton.textContent = `${count}`;
});

incrementButton8.addEventListener("click", () => {
  count++;
  countButton.textContent = `${count}`;
});

incrementButton9.addEventListener("click", () => {
  count++;
  countButton.textContent = `${count}`;
});

incrementButton10.addEventListener("click", () => {
  count++;
  countButton.textContent = `${count}`;
});

incrementButton11.addEventListener("click", () => {
  count++;
  countButton.textContent = `${count}`;
});

incrementButton12.addEventListener("click", () => {
  count++;
  countButton.textContent = `${count}`;
});

incrementButton13.addEventListener("click", () => {
  count++;
  countButton.textContent = `${count}`;
});

incrementButton14.addEventListener("click", () => {
  count++;
  countButton.textContent = `${count}`;
});

incrementButton15.addEventListener("click", () => {
  count++;
  countButton.textContent = `${count}`;
});

incrementButton16.addEventListener("click", () => {
  count++;
  countButton.textContent = `${count}`;
});

incrementButton17.addEventListener("click", () => {
  count++;
  countButton.textContent = `${count}`;
});

incrementButton18.addEventListener("click", () => {
  count++;
  countButton.textContent = `${count}`;
});

incrementButton19.addEventListener("click", () => {
  count++;
  countButton.textContent = `${count}`;
});

incrementButton20.addEventListener("click", () => {
  count++;
  countButton.textContent = `${count}`;
});

incrementButton21.addEventListener("click", () => {
  count++;
  countButton.textContent = `${count}`;
});

incrementButton22.addEventListener("click", () => {
  count++;
  countButton.textContent = `${count}`;
});

incrementButton23.addEventListener("click", () => {
  count++;
  countButton.textContent = `${count}`;
});

incrementButton24.addEventListener("click", () => {
  count++;
  countButton.textContent = `${count}`;
});

incrementButton25.addEventListener("click", () => {
  count++;
  countButton.textContent = `${count}`;
});

incrementButton26.addEventListener("click", () => {
  count++;
  countButton.textContent = `${count}`;
});

incrementButton27.addEventListener("click", () => {
  count++;
  countButton.textContent = `${count}`;
});

incrementButton28.addEventListener("click", () => {
  count++;
  countButton.textContent = `${count}`;
});

incrementButton29.addEventListener("click", () => {
  count++;
  countButton.textContent = `${count}`;
});

incrementButton30.addEventListener("click", () => {
  count++;
  countButton.textContent = `${count}`;
});

