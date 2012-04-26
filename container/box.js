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
pklib.BoxPanel = pklib.Panel.extend({
    init: function (config) {
        var defaults = {
            bAlign: 'h'
        };
        this._super($.extend({},
        defaults, config));
    },
    render: function () {
        var sHtml = pklib.format('<div id="{0}" class="ui-widget-content ui-helper-clearfix pk-box" name="{1}">{2}</div>', this.id, this.name, this.renderChild());
        return sHtml;
    },
    renderChild: function () {
        var sHtml = '',
        c = this.controls,
        bA = (this.bAlign == 'h');
        if (c != null && c.length > 0) {
            var i = 0;
            sHtml = '<table width="100%" class="ui-dialog-content">';
            if (bA) {
                sHtml += '<tr><td></td>';
            }
            for (i = 0; i < c.length; i++) {
                if (!bA) {
                    sHtml += '<tr>';
                }
                sHtml += '<td width="' + c[i].width + '">' + c[i].render() + '</td>';
                if (!bA) {
                    sHtml += '</tr>';
                }
            }
            if (bA) {
                sHtml += '</tr>';
            }
            sHtml += '</table>';
        }
        return sHtml;
    }
});