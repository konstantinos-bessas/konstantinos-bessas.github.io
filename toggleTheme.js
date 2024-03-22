// https://dev.to/whitep4nth3r/the-best-lightdark-mode-theme-toggle-in-javascript-368f
/**
* Utility function to calculate the current theme setting.
* Look for a local storage value.
* Fall back to system setting.
* Fall back to light mode.
*/
function calculateSettingAsThemeString({ localStorageTheme, systemSettingDark }) {
    if (localStorageTheme !== null) {
      return localStorageTheme;
    }
  
    if (systemSettingDark.matches) {
      return "dark";
    }
  
    return "light";
  }
  
  /**
  * Utility function to update the button text and aria-label.
  */
  function updateButton({ buttonEl, isDark }) {
    const newCta = isDark ? "Change to light theme" : "Change to dark theme";
    // use an aria-label if you are omitting text on the button
    // and using a sun/moon icon, for example
    buttonEl.setAttribute("aria-label", newCta);
    if (newCta == "Change to light theme") {
      // buttonEl.innerText = "🌙";
    } else {
      // buttonEl.innerText = "☀️";
    }
    
  }
  
  /**
  * Utility function to update the theme setting on the html tag
  */
  function updateThemeOnHtmlEl({ theme }) {
    document.querySelector("html").setAttribute("data-theme", theme);
  }
  
  
  /**
  * On page load:
  */
   window.addEventListener('load', function () {
   })  
  /**
  * 1. Grab what we need from the DOM and system settings on page load
  */
 
  
  let button = document.querySelector("[data-theme-toggle]");
  
  let check = function() {
    setTimeout(function () {
      if (button === null)
        check();
    }, 500);
  };
  let n=0
  while(n<20){
    check();
    n=n+1;
  }
  

  button = document.querySelector("[data-theme-toggle]");
  
  // if(button == null){
  //   location.reload(); 
  // }
  const localStorageTheme = localStorage.getItem("theme");
  // if(localStorageTheme == null){
  //   location.reload(); 
  // }
  const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");
  // if(systemSettingDark == null){
  //   location.reload(); 
  // }

  /**
  * 2. Work out the current site settings
  */
  let currentThemeSetting = calculateSettingAsThemeString({ localStorageTheme, systemSettingDark });
  
  /**
  * 3. Update the theme setting and button text according to current settings
  */
  updateButton({ buttonEl: button, isDark: currentThemeSetting === "dark" });
  updateThemeOnHtmlEl({ theme: currentThemeSetting });
  
  /**
  * 4. Add an event listener to toggle the theme
  */
  button.addEventListener("click", (event) => {
    const newTheme = currentThemeSetting === "dark" ? "light" : "dark";
  
    localStorage.setItem("theme", newTheme);
    updateButton({ buttonEl: button, isDark: newTheme === "dark" });
    updateThemeOnHtmlEl({ theme: newTheme });
  
    currentThemeSetting = newTheme;
  }); 