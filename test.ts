import test from 'japa';
import escapeRegexp from './index.js';

test('main', t => {
    t.equal(
        escapeRegexp('\\ ^ $ * + ? . ( ) | { } [ ]'),
        '\\\\ \\^ \\$ \\* \\+ \\? \\. \\( \\) \\| \\{ \\} \\[ \\]'
    );
});

test('escapes `-` in a way compatible with PCRE', t => {
    t.equal(
        escapeRegexp('foo - bar'),
        'foo \\x2d bar'
    );
});

test('escapes `-` in a way compatible with the Unicode flag', t => {
    t.match(
        '-',
        new RegExp(escapeRegexp('-'), 'u')
    );
});