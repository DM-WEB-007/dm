
  let lastScroll = 0;
  const topBar = document.getElementById("top-bar");

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > lastScroll) {
      topBar.style.display = "none";
    } else {
      topBar.style.display = "flex";
    }
    lastScroll = currentScroll;
  });

