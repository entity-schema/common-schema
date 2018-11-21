"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
describe('common', () => {
    it('it imports without any assertion being raised', () => {
        assert.doesNotThrow(() => {
            require('..');
        });
    });
});
//# sourceMappingURL=index.js.map