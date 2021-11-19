/**
 Escape RegExp special characters.
 You can also use this to escape a string that is inserted into the middle of a regex, for example, into a character class.
 @example
 ```
 import escapeStringRegexp from 'escape-string-regexp';
 const escapedString = escapeStringRegexp('How much $ for a 🦄?');
 //=> 'How much \\$ for a 🦄\\?'
 new RegExp(escapedString);
 ```
 */

export = function escapeRegexp(string: string) {
    // noinspection SuspiciousTypeOfGuard
    if (typeof string !== 'string') {
        throw new TypeError('Expected a string');
    }

    // Escape characters with special meaning either inside or outside character sets.
    // Use a simple backslash escape when it’s always valid, and a `\xnn` escape when the simpler form would be disallowed by Unicode patterns’ stricter grammar.
    return string
        .replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
        .replace(/-/g, '\\x2d');
}