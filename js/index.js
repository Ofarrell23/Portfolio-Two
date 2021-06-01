
$(document).ready(function(){
    // $(window).scroll(function() {
    // var scroll = $(window).scrollTop();
    // $(".hero").css({
    //     transform: 'translate3d(0, +'+(scroll/100)+'%, 0) scale('+(100 - scroll/100)/100+')'
    // });
    // });
//=================FOR nav
    $( ".menuBar" ).hide() 
    $( "#hider" ).mouseover(function() {
        $( ".menuBar" ).show( 1500 );
        $( "#hider" ).hide( 500 );
        return;
    });
    $( ".menuBarUL" ).mouseleave(function() {
        $( ".menuBar" ).hide( 1500 );
        $( "#hider" ).show( 1500 );
    });
    
function heroIntroAnimation(){
    $( ".intro" ).slideDown( 1500 );
        return;
    }
function subHeroAnimation(){
    $( ".subHero" ).slideDown( 1500 );
        return;
    }
function readAboutMeAnimation(){
    $( ".readAbtMeBtn" ).show( 1500 );
        return;
    }
      
    //========dont delete below
});
function ShowStack(){
    // console.log("onlcick works?")
    // $( "#devStacks" ).show(  );
    $('html, body').animate({
        scrollTop: $("#devStacks").offset().top
    }, 1500);
}
function scrolAbout(){
    
    $( ".someme" ).show(  );
    $('html, body').animate({
        scrollTop: $(".aboutMe").offset().top
        }, 1500);
};

 
