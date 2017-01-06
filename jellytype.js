(function ($) {
        var defaults = {
            text: "",
            Intervals: 1,
            effect: null
        };

        var string_current = 0;
        var keyIn = function (target, typingString, Intervals) {
            var typingStr = typingString.slice(0, string_current);
            target.html(typingStr);
            string_current++;
            if (string_current <= typingString.length) {
                setTimeout(function () {
                    keyIn(target, typingString, Intervals);
                }, Intervals * 1000);
            } else {
                string_current = 0;
                clearInterval(doEffect);
            }
        };
        
        function doEffect() {
          console.log('test');
        }

        $.fn.jellytype = function (text, Intervals, effect) {
            var text = text || defaults.text;
            var effect = effect || defaults.effect;
            var Intervals = Intervals || defaults.Intervals;
            $(this).empty();
            keyIn($(this), text, Intervals);

            if (effect !== null) {
                setinterval(doEffect(), 500);
            }
        };
    })(jQuery);