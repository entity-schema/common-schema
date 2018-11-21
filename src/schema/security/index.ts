import {
  assertEntitySchema, assertEntityReferenceSchema, assertRootSchema,
  assertSecuritySchema, EntitySchema, SecuritySchema, EntityReferenceSchema,
  RootSchema
} from '@entity-schema/predicates'

import * as apiKeySchemaJson from './api-key.schema.json'
import * as userReferenceSchemaJson from './user-reference.schema.json'
import * as userSchemaJson from './user.schema.json'

// ensure all schema are what they should be before casting the exports

assertEntitySchema( apiKeySchemaJson, '(api-key.schema.json)' )
assertEntitySchema( userSchemaJson, '(user.schema.json)' )

assertSecuritySchema( apiKeySchemaJson, '(api-key.schema.json)' )
assertSecuritySchema( userSchemaJson, '(user.schema.json)' )

assertEntityReferenceSchema(
  userReferenceSchemaJson, '(user-reference.schema.json)'
)

assertRootSchema( userReferenceSchemaJson, '(user-reference.schema.json)' )

export const apiKeySchema = <EntitySchema & SecuritySchema>apiKeySchemaJson
export const userSchema = <EntitySchema & SecuritySchema>userSchemaJson

export const userReferenceSchema = <EntityReferenceSchema & RootSchema>userReferenceSchemaJson

export const securitySchemas = [ apiKeySchema, userSchema, userReferenceSchema ]
