const smedia =document.getElementById("social")
function fadein(){
      smedia.style.opacity = "100%";
}
  var y;
  const outsideid = social.getAttribute("id");
  const button1id = b1.getAttribute("id");
  const clickregister=(event)=>{
    y=event.target.id;
    if (y == button1id){
      smedia.style.display = "block";
    }
    else if (y==outsideid) {
    smedia.style.display = "none";
    }
    fadein();
  }
  window.addEventListener("click", clickregister)

  