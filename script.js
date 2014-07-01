function manageNameSize()
{
	$('.banner p').css('font-size',($(window).width()*0.08)+'px');    
}

$(document).ready(function()
{
    //initialize window
    manageNameSize();
    
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
    
    $(window).resize(function()
    {
        manageNameSize();
    });
    
    
    
});