module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "prettier",
        "plugin:i18next/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "i18next"
    ],
    "rules": {
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/strict-boolean-expressions": "off",
        "@typescript-eslint/no-floating-promises": "off",
        "react/prop-types": "off",
        "react/no-deprecated": "off",
        "react/react-in-jsx-scope": "off",
        "react/jsx-props-no-spreading": "off",
        "import/export-extension": "off",
        "@typescript-eslint/naming-convention": "off",
        "@typescript-eslint/no-unnecessary-type-assertion": "off",
        "@typescript-eslint/prefer-nullish-coalescing": "off",
        "i18next/no-literal-string": ['error', {markupOnly: true}],
    },
    "globals" : {
        '__IS_DEV__' : true
    }

}
