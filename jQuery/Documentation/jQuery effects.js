$("document").ready(function(){
    //Hide button
    $(".btn1").click(func1)
    function func1(){
        $("#img1").hide(400);
    }
    //Show button
    $("#btn2").click(func2);
    function func2(){
    $("#img1").show(400);
    }
    //Toggle button
    $("#btn3").click(func3);
    function func3(){
        $("#img1").toggle(400);
    }
    //Fade in Button
    $("#btn4").click(func4);
    function func4(){
        $("#img1").fadeIn(300);
    }
    //Fade out Button
    $("#btn5").click(func5);
    function func5(){
        $("#img1").fadeOut(300);
    }
    //Fade toggle button
    $("#btn6").click(func6);
    function func6(){
        $("#img1").fadeToggle(300)
    }
    //SlideUp button
    $("#btn7").click(func7);
    function func7(){
        $("#img1").slideUp();
    }
    //SlideDown Button
    $("#btn8").click(func8);
    function func8(){
        $("#img1").slideDown();
    }
    //SlideToggle button
    $("#btn9").click(func9);
    function func9(){
        $("#img1").slideToggle();
    }
    //ToggleNavbar
    $("#toggle").click(function1);
    function function1(){
        $("#div").slideToggle();
    }
    

})