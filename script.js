var nameHasBeenTyped = false;

function manageNameSize()
{
	$('.banner p').css('font-size',($(window).width()*0.08)+'px');    
}

function typeName()
{
    var delayTime = 500;
    
    
//    setTimeout(function(){$(".banner p").text('J_');}, 500);
//    setTimeout(function(){$(".banner p").text('Ja_');}, 500);
//    setTimeout(function(){$(".banner p").text('Jak_');}, 500);
    
    
    
    nameHasBeenTyped = true;
}

$(document).ready(function()
{
    //initialize window
    manageNameSize();
    typeName();
    
    // logo effect
    var animationSpeed = 100;

    $('.logo').hover(function()
    {   
       $('.logoEffect').dequeue().fadeTo(animationSpeed, 1);
       $('.logoEffect').dequeue().animate({top: '-15'}, animationSpeed);
    }, function()
    {

       $('.logoEffect').dequeue().fadeTo(animationSpeed, 0);
       $('.logoEffect').dequeue().animate({top: '15'}, animationSpeed);
    });
    
    var buttonEffect = 200;
    
    //nav button effect
    $('.button').hover(function()
    {
        $('.buttonBorder', this).stop().fadeTo(buttonEffect, 1);
    }, function()
    {
        $('.buttonBorder', this).stop().fadeTo(buttonEffect, 0);
    });
    
    //banner
    underscoreToggle = 1;
    
    if(nameHasBeenTyped)
    {
        setInterval(function() 
        {
            if(underscoreToggle == 0)
            {
                underscoreToggle = 1;
                $(".banner p").text('Jake Demian_');
            }
            else
            {
                underscoreToggle = 0;
                $(".banner p").text('Jake Demian  ');
            }
        }, 500);
    }
    
    
    $(window).resize(function()
    {
        manageNameSize();
    });
    
    //trigger quote when you scroll far enough
    $(window).on('scroll', function() {
        var y_scroll_pos = window.pageYOffset;
        var scroll_pos_test = 675;             // set to whatever you want it to be

        if(y_scroll_pos > scroll_pos_test) {
            $('.quote').fadeTo(1200, 1);
        }
        
        if(y_scroll_pos > scroll_pos_test + 30)
        {
            $('.credit').fadeTo(1200, 1);
        }
    });
    
    //fade effect for social media links    
    $('.social-link').hover(function()
    {
        $(this).stop().fadeTo(200, 1);
    }, function()
    {
        $(this).stop().fadeTo(200, 0.7);
    });
});