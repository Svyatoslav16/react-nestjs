module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint/eslint-plugin'],
    extends: [
        // TODO: Вынести одинаковые правила в корневой .eslintrc
        // './../.eslintrc.js',
        'airbnb',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    root: true,
    env: {
        node: true,
        jest: true,
    },
    ignorePatterns: ['.eslintrc.js'],

    rules: {
        'no-trailing-spaces': 'error',
        'no-underscore-dangle': [1],
        indent: ['error', 4],
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        'import/prefer-default-export': [0],
        'no-useless-constructor': [0],
        'prettier/prettier': [
            'warn',
            {
                singleQuote: true,
                tabWidth: 4,
            }
        ],
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
        'class-methods-use-this': [0]
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.d.ts', '.tsx'],
            },
        },
    },
};
