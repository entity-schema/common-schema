import { EntitySchema } from '@entity-schema/predicates';
export declare const commonSchemas: ((import("@entity-schema/predicates/dist/object-schema").ObjectSchema & import("@entity-schema/predicates/dist/root-schema").RootSchema) | (import("@entity-schema/predicates/dist/string-schema").StringSchema & import("@entity-schema/predicates/dist/root-schema").RootSchema))[];
export declare const commonSchemaMap: import("@entity-schema/collection/dist/root-schema-map").RootSchemaMap;
export declare const commonEntitySchemas: EntitySchema[];
export declare const resolvedCommonEntitySchemas: EntitySchema[];
export { diskFileSchema, imageFileSchema, zipFileSchema, diskFileReferenceSchema, imageFileReferenceSchema, zipFileReferenceSchema, fileMetaSchema, filePathSchema, imageFileMetaSchema } from './schema/files';
export { nameSchema, tagSchema } from './schema/properties';
export { apiKeySchema, userSchema, userReferenceSchema } from './schema/security';
