function Loaded() {
    var element = document.getElementById("main-title");
    element.classList.remove("unloaded");
    var list = document.getElementsByTagName('hr');
    for (let item of list) {
      item.classList.remove("unloaded");
    }
    var list2 = document.getElementsByClassName('fade-in');
    for (let item of list2) {
      item.classList.remove("unloaded");
    }  
  }