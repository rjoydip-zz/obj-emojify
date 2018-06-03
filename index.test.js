
const { ObjEmojify } = require('./');

test('ObjEmojify with return', () => {
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

    expect(emojify.value).toEqual({ "💯": { "name": "100", "contents": { "name": "funny", "contents": [1, 2] } }, "☕️": "I ❤️  ☕️  value", "🎅": "🎅  value" });
});

test('ObjEmojify with return, option', () => {
    const objEmojify = new ObjEmojify({
        enableOnKey: true,
        enableOnValue: true,
    });
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

    expect(emojify.value).toEqual({ "💯": { "name": "100", "contents": { "name": "funny", "contents": [1, 2] } }, "☕️": "I ❤️  ☕️  value", "🎅": "🎅  value" });
});

test('ObjEmojify with return, option (enableOnKey: false)', () => {
    const objEmojify = new ObjEmojify({
        enableOnKey: false,
        enableOnValue: true,
    });
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

    expect(emojify.value).toEqual({ "100": { "name": "100", "contents": { "name": "funny", "contents": [1, 2] } }, "coffee": "I ❤️  ☕️  value", "santa": "🎅  value" });
});

test('ObjEmojify with return, option (enableOnValue: false)', () => {
    const objEmojify = new ObjEmojify({
        enableOnKey: true,
        enableOnValue: false,
    });
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

    expect(emojify.value).toEqual({
        "☕️": "I :heart: coffee value",
        "💯": {
            "name": "100",
            "contents": {
                "name": "funny",
                "contents": [1, 2]
            }
        },
        "🎅": ":santa: value"
    });
});

test('ObjEmojify with callback', () => {
    const objEmojify = new ObjEmojify();
    objEmojify.emojify({
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
            expect(() => {
                throw new Error(emojify.error);
            }).toThrow();
        } else {
            expect(emojify.value).toEqual({ "💯": { "name": "100", "contents": { "name": "funny", "contents": [1, 2] } }, "☕️": "I ❤️  ☕️  value", "🎅": "🎅  value" });
        }
    });
});

test('ObjEmojify with callback, option', () => {
    const objEmojify = new ObjEmojify({
        enableOnKey: true,
        enableOnValue: true,
    });
    objEmojify.emojify({
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
            expect(() => {
                throw new Error(emojify.error);
            }).toThrow();
        } else {
            expect(emojify.value).toEqual({ "💯": { "name": "100", "contents": { "name": "funny", "contents": [1, 2] } }, "☕️": "I ❤️  ☕️  value", "🎅": "🎅  value" });
        }
    });
});

test('ObjEmojify with return, blank option', () => {
    const objEmojify = new ObjEmojify({});
    const emojify = objEmojify.emojify({ "coffee": "I :heart: coffee value" });
    expect(() => {
        throw new Error(emojify.error);
    }).toThrow();
    expect(emojify.value).toEqual(null);
});

test('ObjEmojify with return, blank option, ES6 object literal', () => {
    const objEmojify = new ObjEmojify({});
    const { error, value } = objEmojify.emojify({ "coffee": "I :heart: coffee value" });
    expect(() => {
        throw new Error(error);
    }).toThrow();
    expect(value).toEqual(null);
});

test('ObjEmojify with callback, blank option', () => {
    const objEmojify = new ObjEmojify({});
    objEmojify.emojify({ "coffee": "I :heart: coffee value" }, (emojify) => {
        if (emojify.error) {
            expect(() => {
                throw new Error(emojify.error);
            }).toThrow();
        } else {
            expect(emojify.value).toEqual({ "coffee": "I :heart: coffee value" });
        }
    });
});

test('ObjEmojify with return, blank option, ES6 object literal', () => {
    const objEmojify = new ObjEmojify({});
    const { error, value } = objEmojify.emojify({ "coffee": "I :heart: coffee value" });
    expect(() => {
        throw new Error(error);
    }).toThrow();
    expect(value).toEqual(null);
});

test('ObjEmojify with callback, blank option', () => {
    const objEmojify = new ObjEmojify({});
    objEmojify.emojify({ "coffee": "I :heart: coffee value" }, (emojify) => {
        if (emojify.error) {
            expect(() => {
                throw new Error(emojify.error);
            }).toThrow();
        } else {
            expect(emojify.value).toEqual({ "coffee": "I :heart: coffee value" });
        }
    });
});

test('ObjEmojify with return, blank option, ES6 object literal, null value', () => {
    const objEmojify = new ObjEmojify({});
    const { error, value } = objEmojify.emojify("");
    expect(() => {
        throw new Error(error);
    }).toThrow();
    expect(value).toEqual(null);
});

test('ObjEmojify with callback, blank option, null value', () => {
    const objEmojify = new ObjEmojify({});
    objEmojify.emojify("", (emojify) => {
        if (emojify.error) {
            expect(() => {
                throw new Error(emojify.error);
            }).toThrow();
        } else {
            expect(emojify.value).toEqual({ "coffee": "I :heart: coffee value" });
        }
    });
});


test('ObjEmojify with return, blank option, ES6 object literal, blank array', () => {
    const objEmojify = new ObjEmojify({});
    const { error, value } = objEmojify.emojify([]);
    expect(() => {
        throw new Error(error);
    }).toThrow();
    expect(value).toEqual(null);
});

test('ObjEmojify with callback, blank option, blank array', () => {
    const objEmojify = new ObjEmojify({});
    objEmojify.emojify("", (emojify) => {
        if (emojify.error) {
            expect(() => {
                throw new Error(emojify.error);
            }).toThrow();
        } else {
            expect(emojify.value).toEqual({ "coffee": "I :heart: coffee value" });
        }
    });
});