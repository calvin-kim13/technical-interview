const sum = require("./index");

test("Return number", () => {
    expect(sum(2, 5)).toBe(7);
});