import { EntitySchema, EntityReferenceSchema, ObjectSchema, StringSchema, RootSchema } from '@entity-schema/predicates';
export declare const diskFileSchema: EntitySchema;
export declare const imageFileSchema: EntitySchema;
export declare const zipFileSchema: EntitySchema;
export declare const diskFileReferenceSchema: EntityReferenceSchema & RootSchema;
export declare const imageFileReferenceSchema: EntityReferenceSchema & RootSchema;
export declare const zipFileReferenceSchema: EntityReferenceSchema & RootSchema;
export declare const fileMetaSchema: ObjectSchema & RootSchema;
export declare const filePathSchema: StringSchema & RootSchema;
export declare const imageFileMetaSchema: ObjectSchema & RootSchema;
export declare const fileSchemas: ((ObjectSchema & RootSchema) | (StringSchema & RootSchema))[];
