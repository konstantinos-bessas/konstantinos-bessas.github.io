function Loaded() {
    var element = document.getElementById("main-title");
    element.classList.remove("unloaded");
    var list = document.getElementsByTagName('hr');
    for (let item of list) {
      item.classList.remove("unloaded");
    } 
  }