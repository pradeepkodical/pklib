/*
 * pklib UI framework 
 *
 * Copyright 2011, Pradeep Kodical @ kiprosh.com (http://kiprosh.com/about)
 *
 * Depends:
 *  pklib.Observable
 */
pklib.DataStore = pklib.Observable.extend({
    store: [],
    init: function (config) {
        this.Id = pklib.getId();
        $("body").append(pklib.format('<div id="{0}"/>', this.Id));
        this.elm = $('#' + this.Id);
    },
    getAt: function(index){
        return this.store[index];
    },
    getCount: function(){
        return this.store.length;
    },
    removeAll: function(){        
        this.store.length = 0;
        this.fireEvent('afterremoveall');
    },
    loadData: function(data){
        this.store = this.store.concat(data);
        this.fireEvent('afterload');
    },
    addData: function(data){
        this.store.push(data);
        this.fireEvent('afteradd', [data]);
    },
    removeAt: function(index){       
        this.store.remove(index);
        this.fireEvent('afterremoveat', [index]);
    }
});