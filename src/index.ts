import {
  isEntitySchema, assertEntitySchema, EntitySchema
} from '@entity-schema/predicates'

import {
  createRootSchemaMap, resolveRefSchemas
} from '@entity-schema/collection'

import { fileSchemas } from './schema/files'
import { propertySchemas } from './schema/properties'
import { securitySchemas } from './schema/security'

export const commonSchemas = [
  ...fileSchemas, ...propertySchemas, ...securitySchemas
]

export const commonSchemaMap = createRootSchemaMap( commonSchemas )

export const commonEntitySchemas = commonSchemas.filter( isEntitySchema )

export const resolvedCommonEntitySchemas = <EntitySchema[]>commonEntitySchemas.map(
  entitySchema => resolveRefSchemas( entitySchema.id, commonSchemaMap )
)

// guard against accidentally having a $ref point to another EntitySchema
resolvedCommonEntitySchemas.forEach( entitySchema => {
  assertEntitySchema( entitySchema, `(${ entitySchema.title })` )
})

export {
  diskFileSchema, imageFileSchema, zipFileSchema, diskFileReferenceSchema,
  imageFileReferenceSchema, zipFileReferenceSchema, fileMetaSchema,
  filePathSchema, imageFileMetaSchema
} from './schema/files'

export { nameSchema, tagSchema } from './schema/properties'

export {
  apiKeySchema, userSchema, userReferenceSchema
} from './schema/security'
