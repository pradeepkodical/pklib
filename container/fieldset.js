/*
 * pklib UI framework 
 *
 * Copyright 2011, Pradeep Kodical @ kiprosh.com (http://kiprosh.com/about)
 *
 * Depends:
 *  pklib.Observable
 *  pklib.Control
 *	pklib.Panel
 */
pklib.FieldSet = pklib.Panel.extend({
    init: function (config) {
        var defaults = {
            cOffset: {
                top: 15,
                left: 5
            }
        };
        this._super($.extend({},
        defaults, config));
        var i = 0,
        c = this.controls;
        if (c != null && $.browser.msie) {
            for (i = 0; i < c.length; i++) {
                c[i].offset = this.cOffset;
            }
        }
    },
    render: function () {
        var sHtml = pklib.format('<fieldset class="ui-widget-content pk-control-title " id="{0}" name="{1}">', this.id, this.name);

        sHtml += pklib.format('<legend>{0}</legend>{1}</fieldset>', this.title, this.renderChild());
        return sHtml;
    }
});