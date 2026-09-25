document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     OPENING BUTTON
  ========================= */

  const openBtn = document.getElementById("openBtn");

  if (openBtn) {

    openBtn.addEventListener("click", () => {

      const hero = document.querySelector(".hero");

      if (hero) {

        hero.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }

    });

  }


  /* =========================
     SCROLL REVEAL
  ========================= */

  const revealItems =
    document.querySelectorAll(".reveal");


  if ("IntersectionObserver" in window) {

    const revealObserver =
      new IntersectionObserver(
        (entries, observer) => {

          entries.forEach((entry) => {

            if (entry.isIntersecting) {

              entry.target.classList.add("visible");

              observer.unobserve(entry.target);

            }

          });

        },
        {
          threshold: 0.12
        }
      );


    revealItems.forEach((item) => {
      revealObserver.observe(item);
    });

  } else {

    revealItems.forEach((item) => {
      item.classList.add("visible");
    });

  }


  /* =========================
     TENOR GIF POPUP
  ========================= */

  const playGifBtn =
    document.getElementById("playGifBtn");

  const gifModal =
    document.getElementById("gifModal");

  const gifClose =
    document.getElementById("gifClose");

  const gifOverlay =
    document.getElementById("gifOverlay");


  function openGif() {

    if (!gifModal) return;

    gifModal.classList.add("show");

    gifModal.setAttribute(
      "aria-hidden",
      "false"
    );

    document.body.classList.add("locked");

  }


  function closeGif() {

    if (!gifModal) return;

    gifModal.classList.remove("show");

    gifModal.setAttribute(
      "aria-hidden",
      "true"
    );

    document.body.classList.remove("locked");

  }


  if (playGifBtn) {

    playGifBtn.addEventListener(
      "click",
      openGif
    );

  }


  if (gifClose) {

    gifClose.addEventListener(
      "click",
      closeGif
    );

  }


  if (gifOverlay) {

    gifOverlay.addEventListener(
      "click",
      closeGif
    );

  }


  /* Close popup with ESC */

  document.addEventListener(
    "keydown",
    (event) => {

      if (
        event.key === "Escape" &&
        gifModal &&
        gifModal.classList.contains("show")
      ) {

        closeGif();

      }

    }
  );


  /* =========================
     FINAL ENVELOPE
  ========================= */

  const letterBtn =
    document.getElementById("letterBtn");

  const envelope =
    document.getElementById("envelope");

  const finalMessage =
    document.getElementById("finalMessage");


  if (
    letterBtn &&
    envelope &&
    finalMessage
  ) {

    letterBtn.addEventListener(
      "click",
      () => {

        envelope.classList.add("open");


        setTimeout(() => {

          envelope.style.display = "none";

          finalMessage.classList.add("show");


          finalMessage.scrollIntoView({
            behavior: "smooth",
            block: "center"
          });

        }, 650);

      }
    );

  }

});