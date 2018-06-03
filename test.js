
const Jmojify = require('./');

const jmojify = new Jmojify();
const parse = jmojify.emojify({
    "coffee": "I :heart: coffee value",
    "100": {
        "name": "100",
        "contents": {
            "name": "fileA1",
            "contents": []
        }
    },
    "santa": ":santa: value"
});