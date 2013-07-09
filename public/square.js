var x=0; //this is the PROPER placement for defining x because it sets x=0 for the whole script
$(document).ready(function() {   
  $('form').on('change', 'select', function(){
     // alert("my, my, how you've changed"); this makes sure that the change and select functions are connected 
    var newdropdown =$ ('form').find('div').first().html();
    // 7: new variable creates a newdropdown menu which is a form found in the div in the html file; .first calls the first div in the html file, however, it's not necessary in this case since ever div after the first is defined by a class or id   
    $('form').append('<div>' + newdropdown + '</div>');
    // var x=0; this is the WRONG placement for defining x because it will only apply to the method (which stops the counter after 1)
    x+=1;
    $('dd#drinks').text(x);
    $('select').each;   
  });
});