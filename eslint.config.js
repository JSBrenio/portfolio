import tseslint from 'typescript-eslint'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default tseslint.config({
  // Files to lint
  files: ['**/*.{ts,tsx}'],
  
  // Ignore patterns
  ignores: ['dist', 'node_modules'],
  
  // Language options
  languageOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
  
  // Extend configurations - using strict type-checked rules
  extends: [
    ...tseslint.configs.recommendedTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
  ],
  
  // Settings
  settings: { 
    react: { version: '18.3' } 
  },
  
  // Plugins
  plugins: {
    react,
    'react-hooks': reactHooks,
    'react-refresh': reactRefresh,
  },
  
  // Rules
  rules: {
    // React plugin recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
    
    // React Hooks rules
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    
    // React Refresh rules
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    
    // TypeScript specific rules
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/prefer-nullish-coalescing': 'error',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/no-unnecessary-condition': 'warn',
    '@typescript-eslint/no-floating-promises': 'error',
    
    // React specific overrides
    'react/prop-types': 'off', // We use TypeScript for prop validation
    'react/react-in-jsx-scope': 'off', // Not needed with new JSX transform
  },
})
