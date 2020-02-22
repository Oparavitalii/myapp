
 $(document).ready(function(){

 	$(function(){
new WOW().init();
console.log("наконец-то")});
















$("#phone").mask("+380 (99) 999-99-99");



 	$("#form").on("submit",function(){

 	var mail = $("#mail").val();
 	var phone = $("#phone").val();
 	var name = $("#name").val();
 	var select = $("#select").val();
     var textarea = $("#textarea").val();
var rv_email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
var rv_name = /^[a-zA-Zа-яА-Я]+$/;


if(mail !== "" && rv_email.test(mail)){


                   $("#mail").addClass("True");
                 
                }

                 else
                {

                   $("#mail").removeClass("True").addClass("False");                                          
	$("#errorMess").text("Напишите почту");
    $("#errorMess").addClass("jello");
   


return false;
}

if(phone !== ""){

                   $("#phone").addClass("True");
                 
                }
    else
                {


                   $("#phone").removeClass("True").addClass("False");                                          
	$("#errorMess").text("Введите номер телефона");
    $("#errorMess").addClass("jello");
   


return false;
}

if(name !== "" && rv_name.test(name)){


                   $("#name").addClass("True");
                 
                }

                 else
                {

    $("#name").removeClass("True").addClass("False");                                          
	$("#errorMess").text("Введите имя");
    $("#errorMess").addClass("jello");
   


return false;
}
if(textarea !== "" ){

    $("#textarea").addClass("True");
                 
                }

                 else
                {

                   $("#textarea").removeClass("True").addClass("False");                                          
	$("#errorMess").text("Введите сообщение");
    $("#errorMess").addClass("jello");
   


return false;
}

$("#errorMess").text("Спасибо за заявку");
$("#mail ").removeClass("True False");
$("#phone ").removeClass("True False");
$("#name ").removeClass("True False");
$("#textarea ").removeClass("True False");





		$.ajax({
			type: "POST",
			url: "build/ajax/mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");

			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#form").trigger("reset");
		});
		return false
	});


	$( "#form" ).on( "submit", function( event ) {

  event.preventDefault();

  console.log( $(this).serialize() );

});


  $( ".call__img" ).on( "click", function() {
$("#call__form").css({"display":"block"});
$(".call__img").removeClass("call__img")
  
});

$( ".call__close" ).on( "click", function() {
$("#call__form").css({"display":"none"});
$(".call__show").addClass("call__img");
  
});


$(".call__input").on("click",function(){


   $(this).attr("placeholder", "+380 (99) 999-99-99");
 });
$("#phone1").mask("+380 (99) 999-99-99");
/*CALL_BACKCALL_BACKCALL_BACK*/
$("#call__test").on("submit" , function(){

var callInput =$(".call__input").val();

if (callInput == ""){
  $(".call__input").attr("placeholder","     введите номер");
  return false
};

  $.ajax({
      type: "POST",
      url: "build/ajax/phone.php",
      data: $(this).serialize()
    }).done(function() {
      $(this).find("input").val("");

      alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
      $("#call__test").trigger("reset");
    });
    return false
  });

 $( "#call__test" ).on( "submit", function( event ) {

  event.preventDefault();

  console.log( $(this).serialize() );
});











});











