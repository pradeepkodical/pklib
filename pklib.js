/*
 * pklib UI framework 
 *
 * Copyright 2011, Pradeep Kodical @ kiprosh.com (http://kiprosh.com/about)
 *
 * Depends:
 *  pklib.Class
 */
var pklib = function(){
    var idSeed = -1000;
    return {
        nextValue: function () {
            idSeed--;
            return idSeed;
        },
        getId: function () {
            idSeed--;
            return 'pklib-id' + idSeed;
        },
        toArray : function(){
             return ($.browser.msie ?
                 function(a, i, j, res){
                     res = [];
                     for(var x = 0, len = a.length; x < len; x++) {
                         res.push(a[x]);
                     }
                     return res.slice(i || 0, j || res.length);
                 } :
                 function(a, i, j){
                     return Array.prototype.slice.call(a, i || 0, j || a.length);
                 });
         }(),
        format: function(format){
            var args = pklib.toArray(arguments, 1);
            return format.replace(/\{(\d+)\}/g, function(m, i){
                return args[i];
            });
        }
        
    };
}();

pklib.Observable = Class.extend({    
    fireEvent : function(evt, params){        
        this.elm.trigger(evt, params);
    },
    addListener : function(evt, fn, scope){
        this.elm.bind(evt.toLowerCase(), function(){
            var s = scope==null?this.elm:scope;
            fn.apply(s, arguments);
        });
    },
    removeListener : function(evt){
        this.elm.unbind(evt.toLowerCase());        
    }
});

Array.prototype.remove = function(o){
    var index = this.indexOf(o);
    if(index != -1){
        this.splice(index, 1);
    }
    return this;
};

Array.prototype.indexOf = function(o, from){
    var len = this.length;
    from = from || 0;
    from += (from < 0) ? len : 0;
    for (; from < len; ++from){
        if(this[from] === o){
            return from;
        }
    }
    return -1;
};