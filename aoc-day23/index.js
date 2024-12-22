sap.ui.define([
	'sap/ui/core/mvc/Controller',
	"sap/ui/core/mvc/XMLView",
     "sap/ui/model/json/JSONModel",
	"sap/m/MessageToast",     
], function(Controller, XMLView, JSONModel, MessageToast) {
     "use strict";

      Controller.extend("myController", {

		press: function (oEvent) {
			MessageToast.show("The interactive bar chart is pressed.");
		},

		selectionChanged: function (oEvent) {
			var oBar = oEvent.getParameter("bar");
			MessageToast.show("The selection changed: " + oBar.getLabel() + " " + ((oBar.getSelected()) ? "selected" : "deselected"));
		}
	});

     XMLView.create({definition: jQuery('#myXml').html()}).then(function (oView) {
          oView.placeAt("content");
});

});

