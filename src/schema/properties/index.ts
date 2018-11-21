import {
  assertStringSchema, assertRootSchema, RootSchema, StringSchema
} from '@entity-schema/predicates'

import * as nameSchemaJson from './name.schema.json'
import * as tagSchemaJson from './tag.schema.json'

// ensure all schema are what they should be before casting the exports

assertStringSchema( nameSchemaJson, '(name.schema.json)' )
assertStringSchema( tagSchemaJson, '(tag.schema.json)' )
assertRootSchema( nameSchemaJson, '(name.schema.json)' )
assertRootSchema( tagSchemaJson, '(tag.schema.json)' )

export const nameSchema = <StringSchema & RootSchema>nameSchemaJson
export const tagSchema = <StringSchema & RootSchema>tagSchemaJson

export const propertySchemas = [ nameSchema, tagSchema ]
