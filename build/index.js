"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mailer = require("./mailer");
const age = 1;
let newA;
function sum(a, b) {
    return a + b;
}
const multiply = (a, b) => a * b;
const sendEmail = async ({ email, content, subject, }) => {
    const res = await Mailer.send(email, subject, content);
    return res;
};
function waitAndDo(cb) {
    return setTimeout(() => {
        cb('Oops!!');
    }, 2000);
}
class Dog {
    sayHi(name) {
        console.log('Gau gau ', name);
        return 'a';
    }
}
