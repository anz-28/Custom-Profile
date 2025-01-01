const smedia =document.getElementById("social");
const breathingbg = document.getElementById("body");
function fadein(z){
  breathingbg.style.animationPlayState = 'paused';
  smedia.style.display = "block";
  var op = 0;
    var intervalID = setInterval(function() {
        if (op < 1){

            op += 0.05;
            smedia.style.opacity = op; 
      }else {
            clearInterval(intervalID); 
        } 
    },z); 
}
function fadeout(y){
  var op = 1;
    var intervalID = setInterval(function() {
        if (op > 0){

            op -= 0.05;
            smedia.style.opacity = op; 
      }else { 
            clearInterval(intervalID);
            smedia.style.display = "none";
        } 
    },y); 
}
  var y;
  const outsideid = social.getAttribute("id");
  const button1id = b1.getAttribute("id");
  const clickregister=(event)=>{
    y=event.target.id;
    if (y == button1id){
      fadein(12);
    }
    else if (y==outsideid) {
      fadeout(12);
    }
  }
  window.addEventListener("click", clickregister)

  