// moduleA.js
export const message = "Hello, world!";

// moduleB.js
import { message } from "./moduleA.js";
console.log(message); // "Hello, world!"