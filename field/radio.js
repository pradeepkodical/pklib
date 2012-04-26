/*
 * pklib UI framework 
 *
 * Copyright 2011, Pradeep Kodical @ kiprosh.com (http://kiprosh.com/about)
 *
 * Depends:
 *  pklib.Observable
 *  pklib.Control
 *	pklib.Field
 */
pklib.RadioField = pklib.Field.extend({
    init: function (config) {
        var defaults = {
            ftype: 'radiofield'
        };

        this._super($.extend({},
        defaults, config));
    },
    render: function () {
        return pklib.format('<input type="radio" id="{0}" name="{1}" class="radio ui-widget-content pk-field"><span class="pk-field-label">{2}</span></input>', this.id, this.name, this.radioLabel);
    }
});