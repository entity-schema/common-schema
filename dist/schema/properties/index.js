"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const predicates_1 = require("@entity-schema/predicates");
const nameSchemaJson = require("./name.schema.json");
const tagSchemaJson = require("./tag.schema.json");
// ensure all schema are what they should be before casting the exports
predicates_1.assertStringSchema(nameSchemaJson, '(name.schema.json)');
predicates_1.assertStringSchema(tagSchemaJson, '(tag.schema.json)');
predicates_1.assertRootSchema(nameSchemaJson, '(name.schema.json)');
predicates_1.assertRootSchema(tagSchemaJson, '(tag.schema.json)');
exports.nameSchema = nameSchemaJson;
exports.tagSchema = tagSchemaJson;
exports.propertySchemas = [exports.nameSchema, exports.tagSchema];
//# sourceMappingURL=index.js.map