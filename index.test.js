
const { ObjEmojify } = require('./');

test('emojify with return', () => {
    const objEmojify = new ObjEmojify();
    const emojify = objEmojify.emojify({
        "coffee": "I :heart: coffee value",
        "100": {
            "name": "100",
            "contents": {
                "name": "funny",
                "contents": [1, 2]
            }
        },
        "santa": ":santa: value"
    });

    console.log('%j', emojify);

    expect(emojify).toEqual({"💯":{"name":"100","contents":{"name":"funny","contents":[1,2]}},"☕️":"I ❤️  ☕️  value","🎅":"🎅  value"});
});