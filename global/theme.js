class Theme {
  #currentThem;

  constructor(currentTheme) {
    this.#currentThem = currentTheme;
  }

  changeTheme(newTheme) {
    this.#currentThem = newTheme;
  }

  getTheme() {
    return this.#currentThem;
  }
}

const theme = new Theme("light-theme");

// When the user clicks the change theme button
$("button#change-theme").on("click", () => {
  if (theme.getTheme() === "light-theme") {
    theme.changeTheme("dark-theme");

    // Change the info-section-col classes
    $(".info-section-col").removeClass("light-theme").addClass("dark-theme");

    // Change the profile-info classes
    $(".profile-info").removeClass("light-theme").addClass("dark-theme");

    // Change the quick-tools-col classes
    $(".quick-tools-col").removeClass("light-theme").addClass("dark-theme");

    // Change the custom-navbar classes
    $("nav.custom-navbar").removeClass("light-theme").addClass("dark-theme");

    // Change the main-title classes
    $(".main-title").css("color", "#fafafa");

    // Change the classes of all the buttons in main html tag
    $("main button").removeClass("light-theme-btn").addClass("dark-theme-btn");

    // Change the style of the weight-icon fill
    $(".weight-icon").css("fill", "#fafafa");

    // Change the style of the profile pic backgound color
    $(".profile-pic img").css("background-color", "#0c998b");

    // Change the background color of the main html tag
    $("main").css("background-color", "#000");

    // Change the icon to moon
    $(".theme-btn-sun").css("display", "none");
    $(".theme-btn-moon").css("display", "block");
    $(".theme-btn").css("background-color", "#242d52");
    $(".navbar-links h3").css("color", "#fafafa");
  } else {
    theme.changeTheme("light-theme");

    // Change the info-section-col classes
    $(".info-section-col").removeClass("dark-theme").addClass("light-theme");

    // Change the profile-info classes
    $(".profile-info").removeClass("dark-theme").addClass("light-theme");

    // Change the quick-tools-col classes
    $(".quick-tools-col").removeClass("dark-theme").addClass("light-theme");

    // Change the custom-navbar classes
    $("nav.custom-navbar").removeClass("dark-theme").addClass("light-theme");

    // Change the main-title classes
    $(".main-title").css("color", "#242d52");

    // Change the classes of all the buttons in main html tag
    $("main button").removeClass("dark-theme-btn").addClass("light-theme-btn");

    // Change the style of the weight-icon fill
    $(".weight-icon").css("fill", "#000000");

    // Change the style of the profile pic backgound color
    $(".profile-pic img").css("background-color", "#eba06d");

    // Change the background color of the main html tag
    $("main").css("background-color", "#6db8eb");

    // Change the icon to moon
    $(".theme-btn-moon").css("display", "none");
    $(".theme-btn-sun").css("display", "block");
    $(".theme-btn").css("background-color", "#fafafa");
    $(".navbar-links h3").css("color", "#242d52");
  }
});
