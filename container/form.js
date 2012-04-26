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
pklib.FormPanel = pklib.Panel.extend({
    render: function () {
        var sHtml = pklib.format('<div id="{0}" class="ui-dialog ui-widget ui-widget-content" name="{1}">', this.id, this.name);
        if (this.title != null) {
            sHtml += pklib.format('<div class="ui-dialog-titlebar ui-widget-header ui-helper-clearfix">{0}</div>', this.title);
        }
        sHtml += this.renderChild();
        sHtml += this.renderButtons() + '</div>';
        return sHtml;
    },
    initEvents: function () {
        this._super();
        var c = this.buttons;
        if (c != null && c.length > 0) {
            var i = 0;
            for (i = 0; i < c.length; i++) {
                c[i].initEvents();
            }
        }
        this._super();
    },
    renderButtons: function () {
        var sHtml = '',
        c = this.buttons;
        if (c != null && c.length > 0) {
            var i = 0;
            sHtml = '<div class="ui-dialog-buttonpane ui-widget-content ui-helper-clearfix">';
            sHtml += '<div class="ui-dialog-buttonset">';
            for (i = 0; i < c.length; i++) {
                sHtml += c[i].render();
            }
            sHtml += '</div></div>';
        }
        return sHtml;
    },
    renderChild: function () {
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
    },
    isValid: function () {
        var bV = true,
        c = this.controls;
        if (c != null && c.length > 0) {
            var i = 0;
            for (i = 0; i < c.length; i++) {
                bV = c[i].isValid() && bV;
            }
        }
        return bV;
    }
});