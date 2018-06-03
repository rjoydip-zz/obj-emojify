'use strict';
const emoji = require('node-emoji');
const mapObj = require('map-obj');

class ObjEmojify {
    constructor(option) {
        this.option = option || {
            enableOnKey: true,
            enableOnValue: false,
        };
    }

    isString(val) {
        return typeof val === 'string';
    }

    emojify(data, cb) {
        const objEmojify = mapObj(
            data,
            (key, val) => [
                this.option.enableOnKey && this.string(key) && emoji.find(key) ? emoji.get(key) : key,
                this.option.enableOnValue && this.string(val) ? val.split(/(\s+)/).filter(n => n && is.truthy(n)).map(item => emoji.hasEmoji(item) ? (emoji.emojify(item).toString() !== item ? emoji.emojify(item) : emoji.get(item)) + ' ' : item).join('') : val,
            ]
        );

        if (cb) return cb(objEmojify);
        else return objEmojify;
    }
}

module.exports = Object.assign(new ObjEmojify(), { ObjEmojify });