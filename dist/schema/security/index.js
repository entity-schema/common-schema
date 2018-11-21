"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const predicates_1 = require("@entity-schema/predicates");
const apiKeySchemaJson = require("./api-key.schema.json");
const userReferenceSchemaJson = require("./user-reference.schema.json");
const userSchemaJson = require("./user.schema.json");
// ensure all schema are what they should be before casting the exports
predicates_1.assertEntitySchema(apiKeySchemaJson, '(api-key.schema.json)');
predicates_1.assertEntitySchema(userSchemaJson, '(user.schema.json)');
predicates_1.assertSecuritySchema(apiKeySchemaJson, '(api-key.schema.json)');
predicates_1.assertSecuritySchema(userSchemaJson, '(user.schema.json)');
predicates_1.assertEntityReferenceSchema(userReferenceSchemaJson, '(user-reference.schema.json)');
predicates_1.assertRootSchema(userReferenceSchemaJson, '(user-reference.schema.json)');
exports.apiKeySchema = apiKeySchemaJson;
exports.userSchema = userSchemaJson;
exports.userReferenceSchema = userReferenceSchemaJson;
exports.securitySchemas = [exports.apiKeySchema, exports.userSchema, exports.userReferenceSchema];
//# sourceMappingURL=index.js.map