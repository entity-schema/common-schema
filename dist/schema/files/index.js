"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const predicates_1 = require("@entity-schema/predicates");
const diskFileSchemaJson = require("./entities/disk-file.schema.json");
const imageFileSchemaJson = require("./entities/image-file.schema.json");
const zipFileSchemaJson = require("./entities/zip-file.schema.json");
const diskFileReferenceSchemaJson = require("./references/disk-file-reference.schema.json");
const imageFileReferenceSchemaJson = require("./references/image-file-reference.schema.json");
const zipFileReferenceSchemaJson = require("./references/zip-file-reference.schema.json");
const fileMetaSchemaJson = require("./file-meta.schema.json");
const filePathSchemaJson = require("./file-path.schema.json");
const imageFileMetaSchemaJson = require("./image-file-meta.schema.json");
predicates_1.assertEntitySchema(diskFileSchemaJson, '(disk-file.schema.json)');
predicates_1.assertEntitySchema(imageFileSchemaJson, '(image-file.schema.json)');
predicates_1.assertEntitySchema(zipFileSchemaJson, '(zip-file.schema.json)');
predicates_1.assertEntityReferenceSchema(diskFileReferenceSchemaJson, '(disk-file-reference.schema.json)');
predicates_1.assertEntityReferenceSchema(imageFileReferenceSchemaJson, '(image-file-reference.schema.json)');
predicates_1.assertEntityReferenceSchema(zipFileReferenceSchemaJson, '(zip-file-reference.schema.json)');
predicates_1.assertRootSchema(diskFileReferenceSchemaJson, '(disk-file-reference.schema.json)');
predicates_1.assertRootSchema(imageFileReferenceSchemaJson, '(image-file-reference.schema.json)');
predicates_1.assertRootSchema(zipFileReferenceSchemaJson, '(zip-file-reference.schema.json)');
predicates_1.assertObjectSchema(fileMetaSchemaJson, '(file-meta.schema.json)');
predicates_1.assertStringSchema(filePathSchemaJson, '(file-path.schema.json)');
predicates_1.assertObjectSchema(imageFileMetaSchemaJson, '(image-file-meta.schema.json)');
predicates_1.assertRootSchema(fileMetaSchemaJson, '(file-meta.schema.json)');
predicates_1.assertRootSchema(filePathSchemaJson, '(file-path.schema.json)');
predicates_1.assertRootSchema(imageFileMetaSchemaJson, '(image-file-meta.schema.json)');
exports.diskFileSchema = diskFileSchemaJson;
exports.imageFileSchema = imageFileSchemaJson;
exports.zipFileSchema = zipFileSchemaJson;
exports.diskFileReferenceSchema = diskFileReferenceSchemaJson;
exports.imageFileReferenceSchema = imageFileReferenceSchemaJson;
exports.zipFileReferenceSchema = zipFileReferenceSchemaJson;
exports.fileMetaSchema = fileMetaSchemaJson;
exports.filePathSchema = filePathSchemaJson;
exports.imageFileMetaSchema = imageFileMetaSchemaJson;
exports.fileSchemas = [
    exports.diskFileSchema, exports.imageFileSchema, exports.zipFileSchema, exports.diskFileReferenceSchema,
    exports.imageFileReferenceSchema, exports.zipFileReferenceSchema, exports.fileMetaSchema,
    exports.filePathSchema, exports.imageFileMetaSchema
];
//# sourceMappingURL=index.js.map