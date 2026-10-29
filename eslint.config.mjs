import boundaries from 'eslint-plugin-boundaries';
import tseslint from 'typescript-eslint';
import { importX } from 'eslint-plugin-import-x';
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';

export default [
  {
    files: ['src/**/*.ts'],
    ignores: ['**/*.spec.ts'],
    languageOptions: { parser: tseslint.parser },
    plugins: { boundaries },
    settings: {
      'import/resolver': {
        typescript: { project: './tsconfig.app.json' },
      },
      'boundaries/elements': [
        { type: 'ui', pattern: 'src/libs/*/ui', partialMatch: false, capture: ['scope'] },
        { type: 'utils', pattern: 'src/libs/*/utils', partialMatch: false, capture: ['scope'] },
        { type: 'lib', pattern: 'src/libs/*', partialMatch: false, capture: ['scope'] },
        { type: 'app', pattern: 'src/app', partialMatch: false },
      ],
    },
    rules: {
      'boundaries/dependencies': [
        'error',
        {
          default: 'allow',
          policies: [
            // shared/ui: block every local import...
            {
              from: { element: { type: 'ui', captured: { scope: 'shared' } } },
              disallow: { to: { module: { origin: 'local' } } }, //any local import will be rejected
              message: 'shared/ui may only import from @shared/util (its index.ts).',
            },
            // ...except the shared/util public API (later policies win)
            {
              from: { element: { type: 'ui', captured: { scope: 'shared' } } },
              allow: {
                to: {
                  file: { path: '**/index.ts' },
                  element: { type: 'utils', captured: { scope: 'shared' } },
                },
              },
            },
          ],
        },
      ],
    },
  },
  //circular dependancy
  {
    files: ['src/**/*.ts'],
    languageOptions: { parser: tseslint.parser },
    plugins: { 'import-x': importX },
    settings: {
      'import-x/extensions': ['.ts'],
      'import-x/parsers': { '@typescript-eslint/parser': ['.ts'] },
      'import-x/resolver-next': [
        createTypeScriptImportResolver({ project: './tsconfig.app.json' }),
      ],
    },
    rules: {
      'import-x/no-cycle': ['error', { ignoreExternal: true }],
    },
  },
];
