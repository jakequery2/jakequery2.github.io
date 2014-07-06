function manageNameSize()
    {
        $('.banner p').css('font-size', ($(window).width() * 0.08) + 'px');
        $('.banner').height($(window).width()/5);
        
        $('.pastjob h1').css('font-size', ($(window).width() * 0.028) + 'px');
        $('.pastjob p').css('font-size', ($(window).width() * 0.018) + 'px'); 
    }

function typeNameTest(name, iteration) 
    {
        var delayTime = 150;
        // Prevent our code executing if there are no letters left
        if (iteration === name.length){
            underscoreToggle = 1;
            flashUnderscore();
            return;
        }
        
        setTimeout(function() {
            // Set the name to the current text + the next character
            // whilst incrementing the iteration variable            
            
            $('.banner p').text( $('.banner p').text().slice(0, -1) + name[iteration++] + "_" );
            
            // Re-trigger our function
            typeNameTest(name, iteration);
        }, delayTime);
    }

function flashUnderscore()
{
    setInterval(function() 
    {
        if(underscoreToggle == 0)
        {
            underscoreToggle = 1;
            $(".banner p").text('Jake Demian ');
        }
        else
        {
            underscoreToggle = 0;
            $(".banner p").text('Jake Demian_');
        }
    }, 500);
    
}

function manageJobPanelSize()
{
    var totalTextHeight = $(".pastjob h1").height() + $(".pastjob p").height();
    
    $(".pastjob").height(totalTextHeight + 100);
}

function goToByScroll(id){
      // Remove "link" from the ID
    id = id.replace("link", "");
      // Scroll
    $('html,body').stop().animate({
        scrollTop: $("#"+id).offset().top - 100},
        'slow');
}

$(document).ready(function()
{

    //initialize window ///////////////////////////
    manageNameSize();
    typeNameTest("Jake Demian", 0);

    // if the user resizes the window, dynamically change the height and width
    $(window).resize(function()
    {
        manageNameSize();
    });
    
    // logo effect ////////////////////////////
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
        
    //nav button effect /////////////////////////
    $('.button').hover(function()
    {
        $('.buttonBorder', this).stop().fadeTo(0, 1);
    }, function()
    {
        $('.buttonBorder', this).stop().fadeTo(0, 0);
    });
    
    // scrolling effect when nav button is clicked ////////////////
    $('#about').click(function()
    {
        goToByScroll("aboutScroll");  
    });
    $('#work').click(function()
    {
        goToByScroll("workScroll");  
    });
    $('#contact').click(function()
    {
        goToByScroll("contactScroll");  
    });

    
    //trigger quote when you scroll far enough///////////
    $(window).on('scroll', function() {
        var y_scroll_pos = window.pageYOffset;
        var scroll_pos_test = 525;             // set to whatever you want it to be

        if(y_scroll_pos > scroll_pos_test) {
            $('.quote').fadeTo(800, 1);
        }
        
        if(y_scroll_pos > scroll_pos_test + 30)
        {
            $('.credit').fadeTo(800, 1);
        }
    });
    
    //fade effect for social media links /////////////////////////   
    $('.social-link').hover(function()
    {
        $(this).stop().fadeTo(200, 1);
    }, function()
    {
        $(this).stop().fadeTo(200, 0.7);
    });





});
