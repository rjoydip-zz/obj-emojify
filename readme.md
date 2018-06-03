# ObjEmojify [![Build Status](https://travis-ci.org/rjoydip/obj-emojify.svg?branch=master)](https://travis-ci.org/rjoydip/obj-emojify)

> Emojify object keys and values into a new emojify object.

## Install

```
$ npm i obj-emojify
```

## Usage

```js
const { ObjEmojify } = require('obj-emojify');

const objEmojify = new ObjEmojify();
const firstEmojify = objEmojify.emojify({foo: 'bar'}, (value) => { /* TODO: value */ });
const secondEmojify = objEmojify.emojify({foo: 'bar'});
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
