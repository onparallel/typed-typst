import tseslint from 'typescript-eslint'
import typedTypst from './src/eslint.ts'

export default tseslint.config(
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      'tools/**',
      'src/gen/**',
      'test/.out/**',
      'test/suite/converted/**',
      'test/universe/converted/**',
      'examples/.build/**',
      'docs/api/**',
    ],
  },
  {
    files: ['**/*.{ts,tsx,mts,cts,js,mjs,cjs}'],
    languageOptions: { parser: tseslint.parser },
    plugins: { 'typed-typst': typedTypst },
    rules: { 'typed-typst/unsafe-raw': 'error', 'typed-typst/literal-path': 'error' },
  },
)
