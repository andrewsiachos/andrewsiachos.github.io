var colors = {
    "endless":{
        "color":"rgba(174, 161, 145, 0.4)",
        "rgb":"rgb(174, 161, 145)"
    },
    "imaginaerum":{
        "color":"rgba(17, 54, 70, 0.4)",
        "rgb":"rgb(17, 54, 70)"
    },
    "darkPassion":{
        "color":"rgba(39, 50, 72, 0.4)",
        "rgb":"rgb(39, 50, 72)"
    },
    "once":{
        "color":"rgba(194, 207, 213, 0.4)",
        "rgb":"rgb(194, 207, 213)"
    },
    "centuryChild":{
        "color":"rgba(160, 143, 185, 0.4)",
        "rgb":"rgb(160, 143, 185)"
    },
    "wishmaster":{
        //"color":"rgba(70, 19, 18, 0.4)",
        //"rgb":"rgb(70, 19, 18)"
        'color':'rgba(125, 35, 45, 0.4)',
        'rgb':'rgb(125, 35, 45)'
    },
    "oceanborn":{
        "color":"rgba(33, 44, 100, 0.4)",
        "rgb":"rgb(33, 44, 100)"
    },
    "angels":{
        "color":"rgba(69, 16, 44, 0.4)",
        "rgb":"rgb(69, 16, 44)"
    }
};



$(".view").on("click", function(){
    var parentId = $(this).parent().prop("id");
    var wrapperBack = $("#bigWrapper").css("background-color");
    $("#bigWrapper").css('background-image', 'none');

    if($(this).parent().prop('class').includes('activated')){
        $(this).siblings('.trackList').toggle();
        $(this).parent().removeClass('activated');
    }else{
        $(this).siblings('.trackList').toggle('slow');
        $('#bigWrapper').css('background-image', 'none');
        $('#bigWrapper').css('background-color', '#1a2d3c');
        $('#albums').css('background-color', colors[parentId].color);

        $(this).parent().addClass('activated');
    }
    
    console.log(wrapperBack);
    
    
});