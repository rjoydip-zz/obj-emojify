'use strict';
const emoji = require('node-emoji');
const mapObj = require('map-obj');

class ObjEmojify {
    constructor(option) {
        this.defaultOption = {
            enableOnKey: true,
            enableOnValue: true,
        };
        this.option = option || this.defaultOption;
    }

    isString(val) {
        return typeof val === 'string';
    }

    isObjectEmpty(obj) {
        return Object.keys(obj).length === 0 && obj.constructor === Object
    }

    emojify(data, cb) {
        const payload = {
            error: null,
            value: null
        };
        if (this.isObjectEmpty(this.option)) {
            payload.error = 'Option is empty';
            if (cb) return cb(payload);
            else return payload;
        } else {
            const objEmojify = mapObj(
                data,
                (key, val) => [
                    this.option.enableOnKey && this.isString(key) && emoji.find(key) ? emoji.get(key) : key,
                    this.option.enableOnValue && this.isString(val) ? val.split(/(\s+)/).filter(n => n).map(item => emoji.hasEmoji(item) ? (emoji.emojify(item).toString() !== item ? emoji.emojify(item) : emoji.get(item)) + ' ' : item).join('') : val,
                ]
            );

            payload.value = objEmojify;
            if (cb) return cb(payload);
            else return payload;
        }
    }
}

module.exports = Object.assign(new ObjEmojify(), { ObjEmojify });