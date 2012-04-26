/*
 * pklib UI framework 
 *
 * Copyright 2011, Pradeep Kodical @ kiprosh.com (http://kiprosh.com/about)
 *
 * Depends:
 *  pklib.Observable
 *  pklib.Control
 */
pklib.TabPanel = pklib.Control.extend({
    init: function (config) {
        var defaults = {};
        this._super($.extend({},
        defaults, config));
    },
    initEvents: function () {
        this._super();
        this.elm.tabs();
    },
    render: function () {
        var i = 0,
        p = this.controls;
        var sHtml = '';
        sHtml = pklib.format('<div id="{0}" name="{1}">', this.id, this.name);
        sHtml += '<ul>';
        for (i = 0; i < p.length; i++) {
            sHtml += '<li><a href="#' + p[i].id + '">' + p[i].title + '</a></li>';
        }
        sHtml += '</ul>';
        for (i = 0; i < p.length; i++) {
            sHtml += '<div id="' + p[i].id + '">' + p[i].render() + '</div>';
        }
        sHtml += '</div>';
        return sHtml;
    }
});