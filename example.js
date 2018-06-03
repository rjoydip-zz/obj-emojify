const { ObjEmojify } = require('./');

// Example 1: ObjEmojify with return

const objEmojifyEx1 = new ObjEmojify({
    enableOnKey: true,
    enableOnValue: true,
});
const emojifyEx1 = objEmojifyEx1.emojify({
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

console.log(emojifyEx1);


// Example 2: ObjEmojify with callback

const objEmojifyEx2 = new ObjEmojify();
objEmojifyEx2.emojify({
    "coffee": "I :heart: coffee value",
    "100": {
        "name": "100",
        "contents": {
            "name": "funny",
            "contents": [1, 2]
        }
    },
    "santa": ":santa: value"
}, (emojify) => {
    if (emojify.error) {
        console.log(emojify.error);
    } else {
        console.log(emojify.value);
    }
});



// Example 3: ObjEmojify with ES6 object literal

const objEmojifyEx3 = new ObjEmojify({
    enableOnKey: true,
    enableOnValue: true,
});
const { error, value } = objEmojifyEx3.emojify({
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

if (error) {
    console.log('error', error);
} else {
    console.log('value', value);
}
