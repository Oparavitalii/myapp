$( document ).ready(function() {
    $(".btn__timer").on("click",function(e){

       e.preventDefault();
       var timer = $(".timer__input").val();

       if(isNaN(timer) || timer == ""){
          $(".resultat").text("Введите сумму заказа.")
       }
       		else {
       var res = parseInt(timer)*10/100;
       $(".resultat").text("Ваша скидка:"+Math.ceil(res)+"грн")}
    })
});