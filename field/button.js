/*
 * pklib UI framework 
 *
 * Copyright 2011, Pradeep Kodical @ kiprosh.com (http://kiprosh.com/about)
 *
 * Depends:
 *  pklib.Observable
 *  pklib.Control
 */
pklib.Button = pklib.Control.extend({
    init: function (config) {
        var defaults = {
            text: '',
            width: 60,
            height: 30
        };
        this._super($.extend({},
        defaults, config));
    },
    initEvents: function () {
        this._super();
        this.elm.button();
    },
    render: function () {
        return pklib.format('<button id="{0}" name="{1}">{2}</button>', this.id, this.name, this.text);
    }
});