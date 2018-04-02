/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
"use strict"

module.exports = {
    meta: {
        docs: {
            description: "disallow RegExp `y` flag.",
            category: "ES2015",
            recommended: false,
            url:
                "https://github.com/mysticatea/eslint-plugin-es/blob/v0.0.0/docs/rules/no-regexp-y-flag.md",
        },
        fixable: null,
        schema: [],
        messages: {
            forbidden: "ES2015 RegExp 'y' flag is forbidden.",
        },
    },
    create(context) {
        return {
            "Literal[regex]"(node) {
                if (node.regex.flags.includes("y")) {
                    context.report({ node, messageId: "forbidden" })
                }
            },
        }
    },
}