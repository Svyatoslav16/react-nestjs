module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    plugins: ['react', '@typescript-eslint/eslint-plugin'],
    extends: [
        // TODO: Вынести одинаковые правила в корневой .eslintrc
        // './../.eslintrc.js',
        'plugin:react-hooks/recommended',
        'plugin:react/recommended',
        'airbnb',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    rules: {
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-indent': ['error', 4],
        indent: ['error', 4],
        'react/prop-types': [0],
        'jsx-a11y/anchor-is-valid': [0],
        'react/require-default-props': [0],
        'import/prefer-default-export': [1],
        'react/destructuring-assignment': [1],
        'jsx-a11y/click-events-have-key-events': [1],
        'no-underscore-dangle': [1],
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        camelcase: [1],
        'arrow-body-style': [1],
        'prefer-promise-reject-errors': [1],
        'react/jsx-props-no-spreading': [1],
        'no-unused-expressions': [1],
        'max-len': ['error', {
            ignoreStrings: true,
            ignoreRegExpLiterals: true,
            ignoreTemplateLiterals: true,
            code: 120,
        }],
        'no-plusplus': [2, { allowForLoopAfterthoughts: true }],
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
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'react/jsx-filename-extension': [
            1,
            { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
        ],
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.d.ts', '.tsx'],
            },
        },
    },
};
