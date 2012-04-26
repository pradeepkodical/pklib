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
pklib.TextField = pklib.Field.extend({
    init: function (config) {
        var defaults = {
            ftype: 'textfield',
            width: 120,
            maxLength: 0,
            type: 'text'
        };
        this._super($.extend({},
        defaults, config));
    },
    render: function () {
        var sHtml = pklib.format('<input type="{0}" id="{1}" name="{2}" class="text ui-widget-content pk-field"/>', this.type, this.id, this.name);
        return sHtml;
    }
});

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
pklib.TextArea = pklib.Field.extend({
    init: function (config) {
        var defaults = {
            ftype: 'textarea',
            width: 120,
            maxLength: 0
        };
        this._super($.extend({},
        defaults, config));
    },
    render: function () {
        var sHtml = pklib.format('<textarea id="{0}" name="{1}" class="text ui-widget-content pk-field"/>', this.id, this.name);
        return sHtml;
    }
});