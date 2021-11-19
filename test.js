"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const japa_1 = __importDefault(require("japa"));
const index_js_1 = __importDefault(require("./index.js"));
(0, japa_1.default)('main', t => {
    t.equal((0, index_js_1.default)('\\ ^ $ * + ? . ( ) | { } [ ]'), '\\\\ \\^ \\$ \\* \\+ \\? \\. \\( \\) \\| \\{ \\} \\[ \\]');
});
(0, japa_1.default)('escapes `-` in a way compatible with PCRE', t => {
    t.equal((0, index_js_1.default)('foo - bar'), 'foo \\x2d bar');
});
(0, japa_1.default)('escapes `-` in a way compatible with the Unicode flag', t => {
    t.match('-', new RegExp((0, index_js_1.default)('-'), 'u'));
});
