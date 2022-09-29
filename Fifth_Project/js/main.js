// Problem: if the user want he can hide the nav bar
//Solution: toggle the nav bar with a button

$(document).ready(function(){
    $("button").click(function(){
        $(".nav").toggle();
    });
});