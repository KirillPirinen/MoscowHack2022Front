const baseConfig = {
    env: {
        browser: true,
        es6: true,
    },

    extends: [
        'airbnb',
        'prettier',
        'plugin:prettier/recommended',
        'prettier/react',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },

    plugins: ['react', 'prettier', 'react-hooks'],

    rules: {
        indent: 0,
        // 'prettier/prettier': ['error', { endOfLine: 'auto' }],
        quotes: ['error', 'single'],
        'max-len': [2, 140, 4],
        'linebreak-style': ['error', 'unix'],
        // 'react/jsx-filename-extension': 0,
        'no-tabs': 0,
        'react/jsx-indent': [2, 'tab'],
        'react/jsx-indent-props': [0, 'tab'],
        'import/prefer-default-export': 0,
        // 'import/extensions': 0,
        'import/no-unresolved': 0,
        'import/no-extraneous-dependencies': 0,
        // 'react/forbid-prop-types': 0,
        'import/no-named-as-default': 0,
        // 'react/no-array-index-key': 0,
        // 'jsx-a11y/click-events-have-key-events': 1,
        // 'jsx-a11y/no-static-element-interactions': 1,
        // 'react/require-default-props': 1,
        'jsx-a11y/anchor-is-valid': 0,
        // 'react/prop-types': 1,
        'no-unused-vars': 1,
        'no-restricted-syntax': 0,
        'react/prefer-stateless-function': 0,
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
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
        'react/jsx-filename-extension': [
            2,
            { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
        ],
        'prettier/prettier': 0,
        'react/jsx-props-no-spreading': 0,
        'react/no-array-index-key': 0,
        'react/require-default-props': 0,
        'jsx-a11y/mouse-events-have-key-events': 0,
        'jsx-a11y/no-static-element-interactions': 0,
        'jsx-a11y/click-events-have-key-events': 0,
        'no-plusplus': 0,
    },

    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
};

module.exports = {
    ...baseConfig,
    overrides: [
        {
            ...baseConfig,
            files: ['**/*.ts', '**/*.tsx'],
            extends: [
                'airbnb',
                'prettier',
                'prettier/react',
                'plugin:prettier/recommended',
            ],
            rules: {
                ...baseConfig.rules,
                'import/prefer-default-export': 0,
            },
        },
    ],
};
