$("document").ready(function(){
    $("#btn").click(function1);
    function function1(){
        $("#img").animate({
            left:'300px',
            opacity:'1',
            height:'400px',
            width:'400px'




        },2000,function(){
            $("#img").animate({
                opacity:'0.4',
                right:'300px',
                position:'absolute',
                width:'240px',
                height:'240px'
            },)
        })
            
    }
})