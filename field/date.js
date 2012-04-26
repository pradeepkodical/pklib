/*
 * pklib UI framework 
 *
 * Copyright 2011, Pradeep Kodical @ kiprosh.com (http://kiprosh.com/about)
 *
 * Depends:
 *  pklib.Observable
 *  pklib.Control
 *	pklib.Field
 *	pklib.TextField
 */
pklib.DateField = pklib.TextField.extend({
    init: function (config) {
        var defaults = {
            ftype: 'datefield'
        };
        this._super($.extend({},
        defaults, config));
    },
    initEvents: function () {
        this._super();
        this.elm.datepicker();
    }
});