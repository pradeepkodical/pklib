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
pklib.CheckField = pklib.Field.extend({
    init: function (config) {
        var defaults = {
            ftype: 'checkfield'
        };

        this._super($.extend({},
        defaults, config));
    },
    render: function () {
        return pklib.format('<input type="checkbox" id="{0}" name="{1}" class="check ui-widget-content pk-field"><span class="pk-field-label">{2}</span></input>', this.id, this.name, this.checkLabel);
    }
});