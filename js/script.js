document.getElementById("moreChannels").addEventListener("click", () => {
  const channels = document.querySelectorAll(".channels-container img");
  channels.forEach((channel) => {
    channel.classList.remove("hide");
    const animations = document.querySelectorAll(".channels-container .anim");
    animations.forEach((anim) => {
      anim.classList.add("active");
    });
  });
  document.querySelector(".more-channels-wrapper .button").style.display =
    "none";
});
