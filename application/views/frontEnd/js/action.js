$(function(){
    
    var winWidth = $(window).width();
    var winHeight = $(window).height();
    
    $('.slickContainer').height(winHeight).width(winWidth);
   
    $('#whyBlueAirSlide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        infinite: false,
    });
    
    $('#navBtn').on('click', function(){
        $('#nav').addClass('actived');
        $("#navMask").addClass('actived');
    });
    
    $('#navMask').on('click', function(){
        $('#nav').removeClass('actived');
        $('#navMask').removeClass('actived');
    });
    
    $('#honorIdenty').on('click', function(event){
        $('.honorContentContainer').removeClass('actived');
        $('#honorIdentyContent').addClass('actived');
        $('.honorNav').removeClass('actived');
        $(event.currentTarget).addClass('actived');
    });
    
    $('#honorReport').on('click', function(event){
        $('.honorContentContainer').removeClass('actived');
        $('#honorReportContent').addClass('actived');
        $('.honorNav').removeClass('actived');
        $(event.currentTarget).addClass('actived');
    });
    
    $('#jumpEfficient').on('click', function(event){
        $('#whyBlueAirContainer').removeClass("inShow fadeIn").addClass("fadeOut");
        $('#efficient').addClass("fadeIn inShow").removeClass("fadeOut");
        $('#efficientDark').removeClass("fadeOut").addClass('actived'); 
    });
    
    $('#efficientBack').on('click', function(event){
        $('#whyBlueAirContainer').addClass("inShow fadeIn").removeClass("fadeOut");
        $('#efficient').addClass("fadeOut").removeClass("inShow");
        $('#efficientDark').removeClass('actievd'); 
        $('#efficientLight').removeClass('actived fadeOut');
    });
    
    $('#jumpMute').on('click', function(){
        $('#whyBlueAirContainer').removeClass("inShow fadeIn").addClass("fadeOut");
        $('#mute').addClass("fadeIn inShow").removeClass("fadeOut");
    });
    
    $('#muteBack').on('click', function(){
        $('#whyBlueAirContainer').addClass("inShow fadeIn").removeClass("fadeOut");
        $('#mute').addClass("fadeOut").removeClass("inShow");
    });
    
    $('#jumpEnergy').on('click', function(){
        $('#whyBlueAirContainer').removeClass("inShow fadeIn").addClass("fadeOut");
        $('#energy').addClass("fadeIn inShow").removeClass("fadeOut");
    });
    
    $('#energyBack').on('click', function(){
        $('#whyBlueAirContainer').addClass("inShow fadeIn").removeClass("fadeOut");
        $('#energy').addClass("fadeOut").removeClass("inShow");
    });
    
    $('#jumpByproduct').on('click', function(){
        $('#whyBlueAirContainer').removeClass("inShow fadeIn").addClass("fadeOut");
        $('#byproduct').addClass("fadeIn inShow").removeClass("fadeOut");
    });
    
    $('#byproductBack').on('click', function(){
        $('#whyBlueAirContainer').addClass("inShow fadeIn").removeClass("fadeOut");
        $('#byproduct').addClass("fadeOut").removeClass("inShow");
    });
    
    $('#openBlueAir').on('click', function(event){
        $('#efficientDark').addClass('fadeOut'); 
        $('#efficientLight').addClass('fadeIn actived');
    });
    
    
    $('#btnWhyEfficient').on('click', function(event){
        $('#efficient').addClass('slideOutLeft');
        $('#whyEfficient').addClass('slideInRight').addClass('inShow');
    });
    
    $('#whyEfficientBack').on('click', function(event){
        $('#whyEfficient').addClass('slideOutRight').removeClass("slideInRight");
        $('#efficient').addClass('slideInLeft').removeClass('slideOutLeft');
    });
    
    $('#energyBtn1').on('click', function(){
        $('#energy1Img').addClass("fadeIn");
        $('#energy1Content').addClass("fadeIn aniDelay");
    });
    
    $('#energyBtn2').on('click', function(){
        $('#energy2Img').addClass("fadeIn");
        $('#energy2Content').addClass("fadeIn aniDelay");
    });
    
    $('#energyBtn3').on('click', function(){
        $('#energy3Img').addClass("fadeIn");
        $('#energy3Content').addClass("fadeIn aniDelay");
    });
    
    $('#energyBtn4').on('click', function(){
        $('#energy4Img').addClass("fadeIn");
        $('#energy4Content').addClass("fadeIn aniDelay");
        $('#energyHonor').addClass("fadeIn aniDelay");
    });    
    
});