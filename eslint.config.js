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
  
  // Extend configurations - using less strict rules
  extends: [
    ...tseslint.configs.recommended,
    // Remove stylisticTypeChecked for less strictness
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
    
    // TypeScript specific rules - made less strict
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/prefer-nullish-coalescing': 'warn',
    '@typescript-eslint/prefer-optional-chain': 'warn',
    '@typescript-eslint/no-unnecessary-condition': 'off',
    '@typescript-eslint/no-floating-promises': 'warn',
    '@typescript-eslint/no-unsafe-assignment': 'warn',
    '@typescript-eslint/no-unsafe-member-access': 'warn',
    '@typescript-eslint/no-unsafe-call': 'warn',
    '@typescript-eslint/no-unsafe-return': 'warn',
    '@typescript-eslint/consistent-indexed-object-style': 'warn',
    '@typescript-eslint/no-unnecessary-type-assertion': 'warn',
    '@typescript-eslint/no-misused-promises': 'warn',
    
    // React specific overrides
    'react/prop-types': 'off', // We use TypeScript for prop validation
    'react/react-in-jsx-scope': 'off', // Not needed with new JSX transform
    'react/no-unescaped-entities': 'warn', // Make this a warning instead of error
    
    // React Refresh rules - made less strict
    'react-refresh/only-export-components': 'off', // Disable this strict rule
  },
})
