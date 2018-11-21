"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const predicates_1 = require("@entity-schema/predicates");
const collection_1 = require("@entity-schema/collection");
const files_1 = require("./schema/files");
const properties_1 = require("./schema/properties");
const security_1 = require("./schema/security");
exports.commonSchemas = [
    ...files_1.fileSchemas, ...properties_1.propertySchemas, ...security_1.securitySchemas
];
exports.commonSchemaMap = collection_1.createRootSchemaMap(exports.commonSchemas);
exports.commonEntitySchemas = exports.commonSchemas.filter(predicates_1.isEntitySchema);
exports.resolvedCommonEntitySchemas = exports.commonEntitySchemas.map(entitySchema => collection_1.resolveRefSchemas(entitySchema.id, exports.commonSchemaMap));
exports.resolvedCommonEntitySchemas.forEach(entitySchema => {
    predicates_1.assertEntitySchema(entitySchema, `(${entitySchema.title})`);
});
//# sourceMappingURL=index.js.map