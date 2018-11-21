# common-schema

Common Entity Schema definitions

`npm install @entity-schema/common`

## files

```javascript
const {
  diskFileSchema, imageFileSchema, zipFileSchema, diskFileReferenceSchema,
  imageFileReferenceSchema, zipFileReferenceSchema, fileMetaSchema,
  filePathSchema, imageFileMetaSchema
} = require( '@entity-schema/common' )
```

## properties

```javascript
const { nameSchema, tagSchema } = require( '@entity-schema/common' )
```

## security

```javascript
const {
  apiKeySchema, userSchema, userReferenceSchema
} = require( '@entity-schema/common' )
```

## collections etc

All common schema in an array:

```javascript
const { commonSchemas } = require( '@entity-schema/common' )
```

All common schema in an object map of id->schema:

```javascript
const { commonSchemaMap } = require( '@entity-schema/common' )
```

All common `EntitySchema` in an array:

```javascript
const { commonEntitySchemas } = require( '@entity-schema/common' )
```

All common `EntitySchema` with their `RefSchema` subschemas already resolved:

```javascript
const { resolvedCommonEntitySchemas } = require( '@entity-schema/common' )
```

## license

MIT License

Copyright (c) 2018 Nik Coughlin

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.