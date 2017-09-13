$( document ).ready(function() {
          $("input").click(function(){
              var cat = $(this).attr("value");
              // if checked
              if ($(this).is(":checked")) { show(cat); $(this).parent().addClass('selected');}
              else { hide(cat); $(this).parent().removeClass('selected');}
            });
/*          $("button").click(function(){
              // if checked
              if ($(this).is("[data-toggle='on']")) {show(overlay); $(this).attr('data-toggle','off');}
              else { hide(overlay); $(this).attr('data-toggle','on');}
            });
*/
      });