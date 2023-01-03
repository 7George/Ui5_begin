//@ui5-bundle walkthrough/02/Component-preload.js
sap.ui.require.preload({
	"walkthrough/02/index.js":function(){sap.ui.define([],function(){"use strict";alert("UI5 is ready")});
},
	"walkthrough/02/manifest.json":'{"sap.app":{"id":"walkthrough.02","type":"application"}}'
});
