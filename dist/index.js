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
// guard against accidentally having a $ref point to another EntitySchema
exports.resolvedCommonEntitySchemas.forEach(entitySchema => {
    predicates_1.assertEntitySchema(entitySchema, `(${entitySchema.title})`);
});
var files_2 = require("./schema/files");
exports.diskFileSchema = files_2.diskFileSchema;
exports.imageFileSchema = files_2.imageFileSchema;
exports.zipFileSchema = files_2.zipFileSchema;
exports.diskFileReferenceSchema = files_2.diskFileReferenceSchema;
exports.imageFileReferenceSchema = files_2.imageFileReferenceSchema;
exports.zipFileReferenceSchema = files_2.zipFileReferenceSchema;
exports.fileMetaSchema = files_2.fileMetaSchema;
exports.filePathSchema = files_2.filePathSchema;
exports.imageFileMetaSchema = files_2.imageFileMetaSchema;
var properties_2 = require("./schema/properties");
exports.nameSchema = properties_2.nameSchema;
exports.tagSchema = properties_2.tagSchema;
var security_2 = require("./schema/security");
exports.apiKeySchema = security_2.apiKeySchema;
exports.userSchema = security_2.userSchema;
exports.userReferenceSchema = security_2.userReferenceSchema;
//# sourceMappingURL=index.js.map