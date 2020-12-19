$(function() {

    $(window).scroll(function(){

        if($(window).scrollTop() > 0){ 
            $(".header").addClass('header-scroll');
            $(".header-inside").addClass('header-inside-scroll');
            $(".logo-wrapper").attr("height" , "50")
        }
        else{
            $(".header").removeClass('header-scroll');
            $(".header-inside").removeClass('header-inside-scroll');
        }

        if($(".service-boxes").offset()){
        var x = $(".service-boxes").offset().top - $(window).height() / 2;
        if($(window).scrollTop() > x){ 
            $(".service-boxes").addClass("animation-top");
        };
        }

    })


    $(".menu-toggler").click(function(){

        $(this).toggleClass("menu-toggler-close");
        $(".navigation").fadeToggle();

    });

    $(".navigation").click(function(){
        $(".navigation").fadeOut();
        $(".menu-toggler").removeClass("menu-toggler-close");
    })
    
    $(".navigation > ul").click(function(e){
        e.stopPropagation();
    })

    //contact-us page JS //
    //contact-us page JS //
    //contact-us page JS //

    // service select
    
        $(".select-service").click(function(e){
            e.stopPropagation();
        });
        $(".service-selected").click(function(e){
            e.stopPropagation();
            $(this).siblings("ul").slideToggle();
        });
    
        $("body").click(function(){
            $(".select-service ul").slideUp();
        });
        $(".select-service ul li").click(function(e){
            e.stopPropagation();
            $(this).parent("ul").hide();
            $(".service-selected > span").html($(this).html());
        });
    
    
            $(".opening-time").css("height" , $(".booking").outerHeight())
        
        if($(window).outerWidth() < 768){
            $(".opening-time").css("height" , "auto");
        }
        $(window).resize(function(){
            if($(window).outerWidth() < 768){
                $(".opening-time").css("height" , "auto");
            }else{
                $(".opening-time").css("height" , $(".booking").outerHeight())
    
            }
        });


    });

    