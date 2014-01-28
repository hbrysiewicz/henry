/* Admin sidebar starts */

$(document).ready(function(){

  $(window).resize(function()
  {
    if($(window).width() >= 991){
      $(".sidey").slideDown(350);
    }                
  });

});

$(document).ready(function(){

  $(".has_submenu > a").click(function(e){
    e.preventDefault();
    var menu_li = $(this).parent("li");
    var menu_ul = $(this).next("ul");

    if(menu_li.hasClass("open")){
      menu_ul.slideUp(350);
      menu_li.removeClass("open")
    }
    else{
      $(".nav > li > ul").slideUp(350);
      $(".nav > li").removeClass("open");
      menu_ul.slideDown(350);
      menu_li.addClass("open");
    }
  });
  
});

$(document).ready(function(){
  $(".sidebar-dropdown a").on('click',function(e){
      e.preventDefault();

      if(!$(this).hasClass("dropy")) {
        // hide any open menus and remove all other classes
        $(".sidey").slideUp(350);
        $(".sidebar-dropdown a").removeClass("dropy");
        
        // open our new menu and add the dropy class
        $(".sidey").slideDown(350);
        $(this).addClass("dropy");
      }
      
      else if($(this).hasClass("dropy")) {
        $(this).removeClass("dropy");
        $(".sidey").slideUp(350);
      }
  });

});



/* Admin sidebar navigation ends */

/* Progressbar animation starts */

    setTimeout(function(){

        $('.progress-animated .progress-bar').each(function() {
            var me = $(this);
            var perc = me.attr("data-percentage");

            //TODO: left and right text handling

            var current_perc = 0;

            var progress = setInterval(function() {
                if (current_perc>=perc) {
                    clearInterval(progress);
                } else {
                    current_perc +=1;
                    me.css('width', (current_perc)+'%');
                }

                me.text((current_perc)+'%');

            }, 600);

        });

    },600);  
    
/* Progressbar animation ends */ 

/* ************************************** */   

/* Slider starts */

    $(function() {
        // Horizontal slider
        $( "#master1, #master2" ).slider({
            value: 60,
            orientation: "horizontal",
            range: "min",
            animate: true
        });

        $( "#master4, #master3" ).slider({
            value: 80,
            orientation: "horizontal",
            range: "min",
            animate: true
        });        

        $("#master5, #master6").slider({
            range: true,
            min: 0,
            max: 400,
            values: [ 75, 200 ],
            slide: function( event, ui ) {
                $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
            }
        });


        // Vertical slider 
        $( "#eq > span" ).each(function() {
            // read initial values from markup and remove that
            var value = parseInt( $( this ).text(), 10 );
            $( this ).empty().slider({
                value: value,
                range: "min",
                animate: true,
                orientation: "vertical"
            });
        });
    });
    
/* Slider ends */    

/* ************************************** */

/* Scroll to Top starts */

  $(".totop").hide();

  $(function(){
    $(window).scroll(function(){
      if ($(this).scrollTop()>300)
      {
        $('.totop').slideDown();
      } 
      else
      {
        $('.totop').slideUp();
      }
    });

    $('.totop a').click(function (e) {
      e.preventDefault();
      $('body,html').animate({scrollTop: 0}, 500);
    });

  });
  
/* Scroll to top ends */

/* ************************************** */

/* Date and picker starts */

  $(function() {
    $('#datetimepicker1').datetimepicker({
      pickTime: false
    });
  });



   $(function() {
    $('#datetimepicker2').datetimepicker({
      pickDate: false
    });
  });


  $(function() {
    $( "#todaydate" ).datepicker();
  });

