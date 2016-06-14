/**
 * Created by rbanning on 6/14/2016.
 */
/*global jQuery*/
;(function ($) {
    'use strict';
    $(function () {

        var h1 = $('h1'),
            contents = h1.text().split('');

        h1.text(""); //clear
        for (var i = 0; i < contents.length; i++) {
            $('<span></span>')
                .text(contents[i])
                .addClass("wild")
                .appendTo(h1);
        }
    });
}(jQuery));