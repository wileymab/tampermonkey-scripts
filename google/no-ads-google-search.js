// ==UserScript==
// @name         Google Search
// @namespace    wileymab
// @version      1.0
// @description  Hide the annoying ads and suggestions during google searches.
// @author       wileymab@gmail.com
// @match        https://www.google.com/search**
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const hide = function(selectors) {
        for(let i = 0; i < selectors.length; i++) {
            document.querySelector(selectors[i]).setAttribute("hidden","hidden")
        }
    }

    hide([
        "#taw",
        ".iq-content-first"
    ])
})();