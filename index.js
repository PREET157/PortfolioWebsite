var tablinks=document.getElementsByClassName('tab-link');
var tbcontent=document.getElementsByClassName('table-content');

function opentab(tabname){


for(tablink of tablinks){
  tablink.classList.remove("active-link");
}
for(tabcontent of tbcontent){
  tabcontent.classList.remove("active-tab");
}
event.currentTarget.classList.add("active-link");
document.getElementById(tabname).classList.add("active-tab");
}

