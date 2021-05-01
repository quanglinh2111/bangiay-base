//btn-detail)
// $('.banner-fill').mouseenter(function(){
//     $(".btn-detail").removeClass("animated fadeOut"); 
//     $(".btn-detail").css("visibility", "visible");           $(".btn-detail").addClass("animated fadeIn");
     
//   })
//   $('.banner-fill').mouseleave(function(){   
//    $(".btn-detail").removeClass("animated fadeIn");        $(".btn-detail").addClass("animated fadeOut");
//     $('#btn-detail').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
//         $(".btn-detail").css("visibility", "hidden");
//     } );       
//   })
  

const slider_container = document.querySelector(".slider_container");
const slider_inner = document.querySelector(".slider_inner");

/* keep track of user's mouse down and up */
let isPressedDown = false;
/* x horizontal space of cursor from inner slider_container */
let cursorXSpace;

slider_container.addEventListener("mousedown", (e) => {
  isPressedDown = true;
  cursorXSpace = e.offsetX - slider_inner.offsetLeft;
  slider_container.style.cursor = "grabbing";
});

slider_container.addEventListener("mouseup", () => {
  slider_container.style.cursor = "grab";
});

window.addEventListener("mouseup", () => {
  isPressedDown = false;
});

slider_container.addEventListener("mousemove", (e) => {
  if (!isPressedDown) return;
  e.preventDefault();
  slider_inner.style.left = `${e.offsetX - cursorXSpace}px`;
  boundslider_inner();
});

function boundslider_inner() {
  const slider_container_rect = slider_container.getBoundingClientRect();
  const slider_inner_rect = slider_inner.getBoundingClientRect();

  if (parseInt(slider_inner.style.left) > 0) {
    slider_inner.style.left = 0;
  } else if (slider_inner_rect.right < slider_container_rect.right) {
    slider_inner.style.left = `-${slider_inner_rect.width - slider_container_rect.width}px`;
  }
}