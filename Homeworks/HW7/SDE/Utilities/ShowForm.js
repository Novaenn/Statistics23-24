"use strict";

/**
 * This class manages SDE form elements.
 */
class ShowForm {

    constructor() {
		
	}

    /**
     * This utility method shows a specific SDE form elements and hide the others.
     * @param {*} cssClasseNamesSet every CSS class name of SDE form components.
     * @param {*} selectedCSSClassName the CSS class name of the SDE components to be shown.
     */
    static showSDEForm(cssClasseNamesSet, selectedCSSClassName) {

        cssClasseNamesSet.forEach(function display(className,set) {  
            $('.' + className).hide();
        });
    
        $('.' + selectedCSSClassName).fadeIn();
    }

}

