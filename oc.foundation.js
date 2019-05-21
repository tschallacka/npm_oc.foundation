var disposeControls = require('@tschallacka/oc.foundation.dispose_controls');
var triggerRender = require('@tschallacka/oc.foundation.trigger_render');
var $ = require('jquery');

module.exports = {
	foundation : {
		_proxyCounter: 0,
		base: require('@tschallacka/oc.foundation.base'),
		event: require('@tschallacka/oc.foundation.event'),
		element: require('@tschallacka/oc.foundation.element'),
		controlUtils: require('@tschallacka/oc.foundation.controlutils'),
		
		init: function() {
			
			$(document).on('ajaxBeforeReplace', disposeControls);
			/*
		     * Invent our own event that unifies document.ready with window.ajaxUpdateComplete
		     *
		     * $(document).render(function() { })
		     * $(document).on('render', function() { })
		     */
			
			$(document).ready(triggerRender);

		    $(window).on('ajaxUpdateComplete', triggerRender);   
		},
        destroy: function() {
			$(document).off('ajaxBeforeReplace', disposeControls);
			/*
		     * Invent our own event that unifies document.ready with window.ajaxUpdateComplete
		     *
		     * $(document).render(function() { })
		     * $(document).on('render', function() { })
		     */
		    $(window).off('ajaxUpdateComplete', triggerRender);   
        }
	}
};