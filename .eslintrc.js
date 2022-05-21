module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['plugin:react/recommended', 'airbnb'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
        'react/react-in-jsx-scope': 0,
        'react/function-component-definition': 0,
        'arrow-body-style': 0,
        'react/jsx-filename-extension': 0,
        indent: ['error', 4],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-fragments': 0,
        'react/prop-types': [2],
        'react/require-default-props': [2],
    },
};
