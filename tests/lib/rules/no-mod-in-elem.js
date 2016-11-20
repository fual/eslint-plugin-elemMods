/**
 * @fileoverview no mod in elem mod
 * @author Alexey Khlebaev
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-mod-in-elem");
var RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-mod-in-elem", rule, {
    valid: [
        "var b = {block: 'page-layout', elem: 'right-column', eleMods: {wide: 'l'} };",
	    "var b = {block: 'page-layout', elem: 'right-column', content: {block: 'bb', mods: {b: 'b'} } };"
    ],

    invalid: [
        {
            code: "function b() { return {block: 'page-layout', elem: 'right-column', mods: {wide: 'l'} }; };",
            errors: [{
                message: "You must use elemMods with elems in BEMHTML"
            }]
        }
    ]
});
