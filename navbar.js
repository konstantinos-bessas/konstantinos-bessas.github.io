function ResponsiveNavbar() {
    var x = document.getElementById("main-navigation-bar");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }