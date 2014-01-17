(function($)
{  
  $.fn.extend({
    lazyslide: function() { 
      var
        elements = this,
        el = {
          current: 3,
          first: 0,
          number: elements.length
        },

        Lazyslide = {

          set_table: function() {
            Lazyslide.clean_table();

            if (el.first <= 0)
              el.first = 0; // do not show under 0

            if (el.first + el.current >= el.number)
              el.first = (el.number - el.current); // do not show over el.number

            elements
              .slice(el.first, (el.first + el.current))
              .css({
                width: (100 / el.current)+'%'
              });
          },

          clean_table: function() {
            elements.slice().css({
              width: 0
            });
          },

          slide: function(dir) {
              if (dir == "before")
                el.first -= el.current;
              else
                el.first += el.current;

              Lazyslide.set_table();
          },

          init: function() {
            // define bindings
            $(document).on('click','[class^="lazyslide-"]', function() {
              var target = $(this).attr('class').split('-').pop();
              Lazyslide.slide(target);
            });

            // init slider
            Lazyslide.clean_table();
            Lazyslide.set_table();

            console.log(el.number);

          }  
        };
      Lazyslide.init();
    }
  });
})
(jQuery);
