/*
 * pklib UI framework 
 *
 * Copyright 2011, Pradeep Kodical @ kiprosh.com (http://kiprosh.com/about)
 *
 * Depends:
 *  pklib.Observable
 *  pklib.Control
 */
pklib.Panel = pklib.Control.extend({
    init: function (config) {
        var defaults = {
            position: {
                top: 0,
                left: 0,
                height: 200,
                width: 200
            },
            showLabel: false,
            border: true
        };
        this._super($.extend({},
        defaults, config));
    },
    initEvents: function () {
        this._super();
        this.elmBody = $('#' + this.id + '-body');
        if (this.elmBody != null) {
            this.addListener('resize', function () {
                var b = this.getBox();
                this.elmBody.height(b.height);
                this.elmBody.width(b.width);
            },
            this);
        }
    },
    render: function () {

        var sHtml = pklib.format('<div id="{0}" name="{1}" class="ui-dialog ui-widget {2}">', this.id, this.name, (this.border ? ' ui-widget-content ' : ''));
        if (this.title != null) {
            sHtml += pklib.format('<div class="ui-dialog-titlebar ui-widget-header ui-helper-clearfix">{0}</div>', this.title);
        }
        sHtml += pklib.format('<div id="{0}-body" class="ui-dialog-content ui-widget-content">{1}</div></div>', this.id, this.renderChild());
        return sHtml;
    },
    renderChild: function () {
        if (this.showLabel) {
            var sHtml = '',
            c = this.controls;
            if (c != null && c.length > 0) {
                var i = 0;
                sHtml = '<table class="ui-dialog-content ui-widget-content">';
                for (i = 0; i < c.length; i++) {
                    sHtml += '<tr>';
                    if (!c[i].hideLabel) {
                        var sep = (c[i].fieldLabel.length > 0) ? ':': '';
                        sHtml += '<td class="pk-field-label">' + c[i].fieldLabel + sep + '</td>';
                    }
                    sHtml += '<td>' + c[i].render() + '</td></tr>';
                }
                sHtml += '</table>';
            }
            return sHtml;
        } else {
            return this._super();
        }
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
 */
pklib.Content = pklib.Control.extend({
    init: function (config) {
        var defaults = {
            position: {
                top: 0,
                left: 0,
                height: 200,
                width: 600,
                html:''
            },
            showLabel: false,
            border: true
        };
        this._super($.extend({},
        defaults, config));
    },
    render: function () {        
        return pklib.format('<div style="width:500px; overflow:auto;" class="DlHighlight"<pre id={0}></pre></div>', this.id);
    },
    setValue: function(code){
        this.elm.html(code);
    },
    isValid: function(){
        return true;
    },
    isDirty: function(){
        return true;
    }
});