import {
  EntitySchema, EntityReferenceSchema, ObjectSchema, StringSchema,
  RootSchema, assertEntitySchema, assertEntityReferenceSchema,
  assertObjectSchema, assertStringSchema, assertRootSchema
} from '@entity-schema/predicates'

import * as diskFileSchemaJson from './entities/disk-file.schema.json'
import * as imageFileSchemaJson from './entities/image-file.schema.json'
import * as zipFileSchemaJson from './entities/zip-file.schema.json'
import * as diskFileReferenceSchemaJson from './references/disk-file-reference.schema.json'
import * as imageFileReferenceSchemaJson from './references/image-file-reference.schema.json'
import * as zipFileReferenceSchemaJson from './references/zip-file-reference.schema.json'
import * as fileMetaSchemaJson from './file-meta.schema.json'
import * as filePathSchemaJson from './file-path.schema.json'
import * as imageFileMetaSchemaJson from './image-file-meta.schema.json'

// ensure all schema are what they should be before casting the exports

assertEntitySchema( diskFileSchemaJson, '(disk-file.schema.json)' )
assertEntitySchema( imageFileSchemaJson, '(image-file.schema.json)' )
assertEntitySchema( zipFileSchemaJson, '(zip-file.schema.json)' )

assertEntityReferenceSchema(
  diskFileReferenceSchemaJson, '(disk-file-reference.schema.json)'
)
assertEntityReferenceSchema(
  imageFileReferenceSchemaJson, '(image-file-reference.schema.json)'
)
assertEntityReferenceSchema(
  zipFileReferenceSchemaJson, '(zip-file-reference.schema.json)'
)

assertRootSchema(
  diskFileReferenceSchemaJson, '(disk-file-reference.schema.json)'
)
assertRootSchema(
  imageFileReferenceSchemaJson, '(image-file-reference.schema.json)'
)
assertRootSchema(
  zipFileReferenceSchemaJson, '(zip-file-reference.schema.json)'
)

assertObjectSchema( fileMetaSchemaJson, '(file-meta.schema.json)' )
assertStringSchema( filePathSchemaJson, '(file-path.schema.json)' )
assertObjectSchema( imageFileMetaSchemaJson, '(image-file-meta.schema.json)' )

assertRootSchema( fileMetaSchemaJson, '(file-meta.schema.json)' )
assertRootSchema( filePathSchemaJson, '(file-path.schema.json)' )
assertRootSchema( imageFileMetaSchemaJson, '(image-file-meta.schema.json)' )

export const diskFileSchema = <EntitySchema>diskFileSchemaJson
export const imageFileSchema = <EntitySchema>imageFileSchemaJson
export const zipFileSchema = <EntitySchema>zipFileSchemaJson
export const diskFileReferenceSchema = <EntityReferenceSchema & RootSchema>diskFileReferenceSchemaJson
export const imageFileReferenceSchema = <EntityReferenceSchema & RootSchema>imageFileReferenceSchemaJson
export const zipFileReferenceSchema = <EntityReferenceSchema & RootSchema>zipFileReferenceSchemaJson
export const fileMetaSchema = <ObjectSchema & RootSchema>fileMetaSchemaJson
export const filePathSchema = <StringSchema & RootSchema>filePathSchemaJson
export const imageFileMetaSchema = <ObjectSchema & RootSchema>imageFileMetaSchemaJson

export const fileSchemas = [
  diskFileSchema, imageFileSchema, zipFileSchema, diskFileReferenceSchema,
  imageFileReferenceSchema, zipFileReferenceSchema, fileMetaSchema,
  filePathSchema, imageFileMetaSchema
]
