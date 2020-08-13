$(function(){

       $('input.input').focusin(function(){
         $(this).sublings("label").css({top: "5px", left: "12px", "font-size" : "16px"});

       });
       
       $('input.input').focusout(function(){
           if($(this).val()=="")
         $(this).sublings("label").css({top: "5px", left: "12px", "font-size" : "16px"
        });
});