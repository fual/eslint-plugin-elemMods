/**
 * @fileoverview no mod in elem mod
 * @author Alexey Khlebaev
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "no mod in elem mod",
            category: "Fill me in",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function(context) {
        return {
            ObjectExpression: function(node) {
		        var isElem = false;
		        var hasMod = false;

                node.properties.forEach(function(property) {
                    var propertyName = property.key && property.key.name;
                    if (propertyName === 'elem') {
                        isElem = true;
                    }
                    if (propertyName === 'mods') {
                        hasMod = true;
                    }
                });

                if(isElem && hasMod) {
	                context.report(node, 'You must use elemMods with elems in BEMHTML');
                }
            }
        };
    }
};
