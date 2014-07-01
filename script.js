$(document).ready(function()
{
    
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
    
    
    
    
});