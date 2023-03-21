module.exports = {
  globals: {
    $: true,
    _: true,
    window: true,
    document: true,
    FormData: true,
    navigator: true,
    process: true,
    __dirname: true
  },
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      generators: true
    }
  },
  extends: ["eslint:recommended", "plugin:import/recommended", "plugin:@typescript-eslint/recommended", "plugin:vue/vue3-recommended", "prettier"],
  plugins: ["html", "@typescript-eslint/eslint-plugin", "prettier"],
  settings: {
    "import/ignore": [
      "node_modules",
      "\\.(json|css|less|scss|jpg|png|gif|eot|svg|ttf|woff|woff2|mp4|webm)$",
      "\\.eslintrc"
    ],
    "import/extensions": [".js", '.mjs', ".vue"],
    "import/resolver": {
      node: {
        extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx', '.d.ts']
      }
    }
  },
  rules: {
    // js
    "accessor-pairs": 2,
    "arrow-spacing": 2,
    "block-scoped-var": 2,
    "computed-property-spacing": 2,
    "default-case": 2,
    "dot-location": [2, "property"],
    eqeqeq: [2, "smart"],
    "func-style": [ 2, "declaration", {
        allowArrowFunctions: true
      }
    ],
    'import/no-unresolved': 'off',
    indent: [ 2, 4, {
       SwitchCase: 1
      }
    ],
    'import/order': 'error',
    "max-depth": 2,
    "max-params": [2, 4],
    "new-parens": 2,
    "no-alert": 2,
    "no-array-constructor": 2,
    "no-bitwise": 2,
    "no-caller": 2,
    "no-confusing-arrow": 2,
    "no-console": 0,
    "no-div-regex": 2,
    "no-duplicate-imports": 2,
    "no-else-return": 2,
    "no-empty-label": 0,
    "no-empty": 0,
    "no-eval": 2,
    "no-extend-native": 2,
    "no-extra-bind": 2,
    "no-extra-parens": 0,
    "no-floating-decimal": 2,
    "no-implied-eval": 2,
    "no-inline-comments": 2,
    "no-iterator": 2,
    "no-lone-blocks": 2,
    "no-loop-func": 2,
    "no-mixed-requires": 2,
    "no-nested-ternary": 2,
    "no-new-func": 2,
    "no-new-object": 2,
    "no-new-require": 2,
    "no-new-wrappers": 2,
    "no-new": 2,
    "no-octal-escape": 2,
    "no-path-concat": 2,
    "no-proto": 2,
    "no-restricted-modules": 2,
    "no-return-assign": 2,
    "no-self-compare": 2,
    "no-sequences": 2,
    "no-shadow-restricted-names": 2,
    "no-this-before-super": 2,
    "no-throw-literal": 2,
    "no-trailing-spaces": 2,
    "no-undef-init": 2,
    "no-unneeded-ternary": 2,
    "no-unused-expressions": 2,
    "no-unused-vars": [ 1, {
        vars: "all",
        args: "after-used"
      }
    ],
    "no-use-before-define": 2,
    "no-useless-call": 2,
    "no-useless-concat": 2,
    "no-void": 2,
    "object-shorthand": 2,
    "operator-assignment": 2,
    "operator-linebreak": 0,
    "prefer-const": 2,
    "prefer-spread": 2,
    'prefer-template': 'error',
    radix: 2,
    semi: ["error", "never"],
    "wrap-regex": 2,
    "arrow-parens": [2, "as-needed"],
    "generator-star-spacing": [2, "before"],

    // ts
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-unused-vars": "off",
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-use-before-define': ['error', { functions: false, classes: false, variables: true }],
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-non-null-assertion": 0,
    '@typescript-eslint/member-delimiter-style': ['error', { multiline: { delimiter: 'none' } }],
    '@typescript-eslint/type-annotation-spacing': ['error', {}],
    '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports', disallowTypeAnnotations: false }],
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],

    // vue
    'vue/no-v-html': 'off',
    "vue/html-indent": 0,
    "vue/this-in-template": [2, "never"],
    "vue/html-quotes": [
      "error",
      "double"
    ],
    'vue/component-tags-order': ['error', {
      order: ['template','script',  'style'],
    }],
    'vue/define-macros-order': ['error', {
      order: ['defineProps', 'defineEmits'],
    }],
    "vue/order-in-components": "error",
    'vue/operator-linebreak': ['error', 'before'],
    'vue/prefer-template': 'error',
    'vue/quote-props': ['error', 'consistent-as-needed'],
    'vue/space-in-parens': ['error', 'never'],
    'vue/space-infix-ops': 'error',
    'vue/space-unary-ops': ['error', { words: true, nonwords: false }],
    'vue/template-curly-spacing': 'error',

    // prettier
    "prettier/prettier": "error",
  }
};
