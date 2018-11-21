import { SecuritySchema, EntityReferenceSchema, RootSchema } from '@entity-schema/predicates';
export declare const apiKeySchema: import("@entity-schema/predicates/dist/entity-schema").EntityFormatSchema & RootSchema & import("@entity-schema/predicates/dist/object-schema").ObjectSchema & SecuritySchema;
export declare const userSchema: import("@entity-schema/predicates/dist/entity-schema").EntityFormatSchema & RootSchema & import("@entity-schema/predicates/dist/object-schema").ObjectSchema & SecuritySchema;
export declare const userReferenceSchema: EntityReferenceSchema & RootSchema;
export declare const securitySchemas: ((EntityReferenceSchema & RootSchema) | (import("@entity-schema/predicates/dist/entity-schema").EntityFormatSchema & RootSchema & import("@entity-schema/predicates/dist/object-schema").ObjectSchema & SecuritySchema))[];
