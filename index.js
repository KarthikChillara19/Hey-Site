// document.querySelector("h1").addEventListener("mouseover", function(){
//     $("h1").text("Fuck You!");
// });

// document.querySelector("h1").addEventListener("mouseover", (event) => {
    
//     event.target.style.color = "orange";
//     setTimeout(() => {
//       event.target.style.color = "";
//     }, 500);
//   }, false);
  
function textChange(h1){
    $("h1").text("Fuck You!");
    $("h1").addClass("sizeWrap");
}
function textOriginal(h1){
    $("h1").text("Hey");
    $("h1").removeClass("sizeWrap");
}