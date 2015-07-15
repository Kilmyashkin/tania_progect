// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function(){
     $( "#look" ).mouseover(function(){
         $( "#folder" ).addClass("hover");
     });
     $( "#look" ).mouseleave(function() {
    $( "#folder" ).removeClass( "hover" );
  });
});

$(document).ready(function(){

  var $window = $(window); 


  $('section[data-type="background"]').each(function(){
    var $bgobj = $(this); // assigning the object

    $(window).scroll(function() {
      var yPos = -($window.scrollTop() / $bgobj.data('speed'));

      // Put together our final background position
      var coords = '50% '+ yPos + 'px';

      // Move the background
      $bgobj.css({ backgroundPosition: coords });
    });
  });
});

$(document).ready(function(){

var $window = $(window); 

$('section[data-type="background-middle"]').each(function(){
  var $bgobj = $(this); // assigning the object
  
  $(window).scroll(function() {
    var yPos = -($window.scrollTop() / $bgobj.data('speed'))+250;
    
    // Put together our final background position
    var coords = '50% '+ yPos + 'px';
    
    // Move the background
    $bgobj.css({ backgroundPosition: coords });
    });
  });
});

$(document).ready(function(){

var $window = $(window); 

$('section[data-type="background-small"]').each(function(){
  var $bgobj = $(this); // assigning the object
  
  $(window).scroll(function() {
    var yPos = -($window.scrollTop() / $bgobj.data('speed'))+550;
    // Put together our final background position
    var coords = '50% '+ yPos + 'px';
    // Move the background
    $bgobj.css({ backgroundPosition: coords });
    });
  });
});


function linkScroll() {
  $('.nav-list').on('click', 'a', function(event){
    event.preventDefault();
    var id = $(this).attr('href').replace('/#',''),
        object = $('#'+id).offset().top;
    $('html,body').animate({ scrollTop: object }, 'slow', function(){
      parent.location.hash = id;
    });
  });
}