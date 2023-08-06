$(window).on("load", function() {
  // Clicks Hamburger Menu
  $(document).on("click", ".menu-button, .revert-menu", function() {
    // Switches Between 2 Different Classes
    $(this).toggleClass("menu-button revert-menu");

    // Gets the Height of the "nav-content" Class
    const navHeight = $(".nav-content").outerHeight(true);
    // Sets the Height Depending on what Class The Hamburger Menu Has
    $("aside").stop().animate({height: $(this).hasClass("menu-button") ? "9vh" : navHeight}, 300);
  });

  $("#background-button").on("click", function(){
    $("a").toggleClass("link-dark link-light")
    if($(this).is(":checked")){
      $("aside, article, .nav-links").css("background-color", "#444444")
      $("h1, h2, h3, p, a, label").css("color", "white")
      $(".dotbackground").css("background-image", "none")
    }else{
      $(".dotbackground").css("background-image", "url(./images/endless-constellation.svg)")
      $("aside, article, .nav-links").css("background-color", "#e0e0e0")
      $("h1, h2, h3, p, a, label").css("color", "black")
    }
  })
});