# ObjEmojify [![Build Status](https://travis-ci.org/rjoydip/obj-emojify.svg?branch=master)](https://travis-ci.org/rjoydip/obj-emojify)

> Emojify object keys and values into a new emojify object.

## Install

```
$ npm i obj-emojify
```

## Usage

```js
const { ObjEmojify } = require('obj-emojify');
const obj = {
    "coffee": "I :heart: coffee value",
    "100": {
        "name": "100",
        "contents": {
            "name": "funny",
            "contents": [1, 2]
        }
    },
    "santa": ":santa: value"
};
const objEmojify = new ObjEmojify();
const firstEmojify = objEmojify.emojify(obj, (result) => { /* TODO: result.value */ });
const secondEmojify = objEmojify.emojify(obj); // output: secondEmojify.value
```

## Configuration

To enable global configuration define the options.The following illustrates all the available options with their respective default values.

```json
{
    "enableOnKey": true,
    "enableOnValue": true,
}
```

## API

### emojify(data, [cb])

#### data

Type: `Object`

Data object for emojify.

#### cb

Type: `Callback`

Return emojify object in callback.

## License

MIT © [Joydip Roy (rjoydip)](https://github.com/rjoydip/obj-emojify/blob/master/license.md)
