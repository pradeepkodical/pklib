/*
 * pklib UI framework 
 *
 * Copyright 2011, Pradeep Kodical @ kiprosh.com (http://kiprosh.com/about)
 *
 * Depends:
 *  pklib.Observable
 *  pklib.Control
 */
pklib.Field = pklib.Control.extend({
    originalValue: null,
    invalidCls: 'ui-state-error',
    readOnly: false,
    disabled: false,
    init: function (config) {
        var defaults = {
            fieldLabel: '',
            hideLabel: false
        };
        this._super($.extend({},
        defaults, config));
    },
    initEvents: function () {
        this._super();
        this.addListener('blur', function () {
            this.isValid();
        },
        this);
    },
    setValue: function (v) {
        if (this.rendered) {
            this.elm.val(v);
        }
        this.value = v;
    },
    setFocus: function () {
        if (this.rendered) {
            return this.elm.focus();
        }
    },
    getValue: function () {
        if (this.rendered) {
            return this.elm.val();
        }
        return this.value;
    },
    isDirty: function () {
        if (this.disabled || !this.rendered) {
            return false;
        }
        return String(this.getValue()) !== String(this.originalValue);
    },
    isValid: function () {
        if (this.disabled) {
            return true;
        }
        if (this.validator != null) {
            var v = this.validator();
            if (!v) {
                if (!this.elm.hasClass(this.invalidCls)) {
                    this.elm.addClass(this.invalidCls);
                }
            } else {
                this.elm.removeClass(this.invalidCls);
            }
            return v;
        } else {
            return true;
        }
    },
    setReadOnly: function (v) {
        if (this.rendered) {
            this.elm.attr("readonly", v);
        }
        this.readOnly = v;
    },
    setDisabled: function (v) {
        if (this.rendered) {
            this.elm.attr("disabled", v);
        }
        this.disabled = v;
    }
});