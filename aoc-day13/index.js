sap.ui.define([
	'sap/ui/core/mvc/Controller',
	"sap/ui/core/mvc/XMLView",
	"sap/m/MessageToast"     
], function(Controller, XMLView, MessageToast) {
     "use strict";

     Controller.extend("myController", {

		handleMessageToastPress: function(oEvent) {
			var msg = 'Enjoy UI5 Development, Keep sharing to all your front-end or full stack Developers\r\n Happy UI5 Coding.. Welcome to 2025.';
			MessageToast.show(msg);
		}
	});

     XMLView.create({definition: jQuery('#myXml').html()}).then(function (oView) {
          oView.placeAt("content");
});

});

