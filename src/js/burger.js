$( document ).ready(function() {
    $(".icon-menu").on("click",function(){
      $(this).css("display","none");
      $(".open").css("display","block")
      $(".open").addClass("bounceInRight")


    });
    $(".icon-cross").on("click",function(){
         $(".open").css("display","none")
         $(".icon-menu").css("display","block")
        $(".open").removeClass("bounceInRight")
    });

});