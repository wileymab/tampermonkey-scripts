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
    /**
     * Given a list of selectors, will add hidden attributes to the respective 
     * elements to hide the from view.
     * 
     * @param {*} selectors array of CSS selectors to be hidden
     */
    const hide = function(selectors) {
        for(let i = 0; i < selectors.length; i++) {
            document.querySelector(selectors[i]).setAttribute("hidden","hidden")
        }
    }

    // Hide these elements.
    hide([
        "#taw",
        ".iq-content-first"
    ])
})();