//btn-detail)
$('.banner-fill').mouseenter(function(){
    $(".btn-detail").removeClass("animated fadeOut"); 
    $(".btn-detail").css("visibility", "visible");           $(".btn-detail").addClass("animated fadeIn");
     
  })
  $('.banner-fill').mouseleave(function(){   
   $(".btn-detail").removeClass("animated fadeIn");        $(".btn-detail").addClass("animated fadeOut");
    $('#btn-detail').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(".btn-detail").css("visibility", "hidden");
    } );       
  })
  
