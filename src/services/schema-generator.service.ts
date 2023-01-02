import path from 'path'
import { getProgramFromFiles, generateSchema } from 'typescript-json-schema'
import fs from 'fs'

const settings = {
  required: true,
  ref: false,
}
const compilerOptions = {
  strictNullChecks: true,
}

const program = getProgramFromFiles(
  [
    path.resolve('src/requests/category-schema.definition.ts'),
    path.resolve('src/requests/post-schema.definition.ts')
  ],
  compilerOptions,
  './'
)

const schema = generateSchema(program, '*', settings)

fs.writeFileSync(
  'src/_schema.ts',
  'const schema = ' +
  JSON.stringify(schema) +
  ' as const;\nexport default schema.definitions;'
)