
      // ACCORDIONS
      var accItem = document.getElementsByClassName('accordionItem');
      var accHD = document.getElementsByClassName('accordionItemHeading');
      for (i = 0; i < accHD.length; i++) {
          accHD[i].addEventListener('click', toggleItem, false);
      }
      function toggleItem() {
          var itemClass = this.parentNode.className;
          for (i = 0; i < accItem.length; i++) {
              accItem[i].className = 'accordionItem close';
          }
          if (itemClass == 'accordionItem close') {
              this.parentNode.className = 'accordionItem open';
          }
      }
    
      // Tabs within accordion
  function openTab(evt, Word) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(Word).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();
  
