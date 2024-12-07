function openPage(pageName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
  
    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";
  
    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();

  function toChinesePage(){
    location.href = "./chef_v2_start_v2.html";
  }
  function toJapanesePage(){
    location.href = "./chef_v2_step_all/japanese/japanese_start.html";
  }
  function toKoreanPage(){
    location.href = "./chef_v2_step_all/korean/korean_start.html";
  }
  function toWesternPage(){
    location.href = "./chef_v2_step_all/western/western_start.html";
  }