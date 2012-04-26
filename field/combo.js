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
pklib.ComboBox = pklib.Field.extend({
    init: function (config) {
        var defaults = {
            ftype: 'combofield',
            width: 120
        };
        this._super($.extend({},
        defaults, config));
    },
    initEvents: function () {
        this._super();
        if(this.store != null){
            this.store.addListener('afterremoveall', function () {
                this.elm[0].options.length = 0;
            },
            this);        
            this.store.addListener('afteradd', function (evt, data) {
                this.elm[0].options.length = 0;
            },
            this); 
            this.store.addListener('afterremoveat', function (evt, index) {
                var c = this.elm[0];
                this.elm[0].options[index] = null;                
            },
            this); 
            this.store.addListener('afterload', function () {                
                var i = 0, s = this.store;                
                for(i = 0; i < s.getCount(); i++){
                    var opt = document.createElement("OPTION");
                    var itm = s.getAt(i);
                    opt.text = itm[this.displayField];
                    opt.value = itm[this.valueField];
                    this.elm[0].options.add(opt);
                }
            },
            this);
        }
    },
    render: function () {
        var sHtml = pklib.format('<select style="width:{0}" id="{1}" name="{2}" class="ui-widget-content"></select>', this.width, this.id, this.name);
        return sHtml;
    }
});