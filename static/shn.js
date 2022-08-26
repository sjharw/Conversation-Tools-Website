// HUMAN NEED TABS
function openNeed(humanNeed) {
    var i, tabcontent, boxes;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    boxes = document.getElementsByClassName("box");
    for (i = 0; i < boxes.length; i++) {
    }
    document.getElementById(humanNeed).style.display = "block";
  }
  // Get the element with id="contribution" and click on it
  document.getElementById("contribution").click();
  
  