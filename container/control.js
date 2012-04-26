/*
 * pklib UI framework 
 *
* Copyright 2011, Pradeep Kodical @ kiprosh.com (http://kiprosh.com/about)
 *
 * Depends:
 *  pklib.Observable
 */
pklib.Control = pklib.Observable.extend({
    rendered: false,
    init: function (config) {
        this.id = pklib.getId();
        var defaults = {
            name: this.id + '-name',
            offset: {
                left: 0,
                top: 0
            }
        };
        $.extend(true, this, defaults);
        $.extend(true, this, config);

        if (this.renderTo != null) {
            $('#' + this.renderTo).append(this.render());
            this.initEvents();
            this.afterrender();
        }
    },
    initEvents: function () {
        this.rendered = true;
        this.elm = $('#' + this.id);
        var c = this.controls;
        if (c != null && c.length > 0) {
            var i = 0;
            for (i = 0; i < c.length; i++) {
                c[i].elm = $('#' + c[i].id);
                c[i].initEvents();
            }
        }
        if (this.attachEvents != null) {
            this.attachEvents();
        }
    },
    afterrender: function () {
        var p = this.position,
        cs = this.style,
        c = this.controls;
        if (p != null) {
            this.setBox(p);
        }
        if (cs != null) {
            this.setCss(cs);
        }
        if (c != null && c.length > 0) {
            var i = 0;
            for (i = 0; i < c.length; i++) {
                c[i].elm = $('#' + c[i].id);
                c[i].afterrender();
            }
        }
        this.fireEvent('afterrender');
    },
    render: function () {
        return pklib.format('<div id="{0}" name="{1}" />', this.id, this.name);
    },
    renderChild: function () {
        var sHtml = ''
        var c = this.controls;
        if (c != null && c.length > 0) {
            var i = 0;
            for (i = 0; i < c.length; i++) {
                sHtml += c[i].render();
            }
        }
        return sHtml;
    },
    setWidth: function (w) {
        if (this.rendered) {
            this.elm.width(w);
        }
    },
    setHeight: function (h) {
        if (this.rendered) {
            this.elm.height(h);
        }
    },
    setCss: function (cssObj) {
        if (this.rendered) {
            this.elm.css(cssObj);
        }
    },
    getBox: function () {
        if (this.rendered) {
            var e = this.elm;
            return {
                left: e.offset().left,
                top: e.offset().top,
                width: e.outerWidth(),
                height: e.outerHeight()
            };
        }
        return null;
    },
    setBox: function (b) {
        if (this.rendered) {
            var e = this.elm;
            var o = this.offset;
            o = o != null ? o : {
                left: 0,
                top: 0
            };
            this.setCss({
                left: (b.left + o.left) + 'px',
                top: (b.top + o.top) + 'px'
            });
            this.setWidth(b.width);
            this.setHeight(b.height);
            this.fireEvent('resize');
        }
    }
});