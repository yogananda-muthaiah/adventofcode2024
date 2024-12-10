sap.ui.define([
	'sap/ui/core/mvc/Controller',
	"sap/ui/core/mvc/XMLView"
], function(Controller, XMLView) {


 Controller.extend("myController", {
     pressOnTileOne : function(evt) {
          MessageToast.show("The generic tile one pressed.");
     },
     pressOnTileTwo : function(evt) {
          MessageToast.show("The generic tile two pressed.");
     }
});

     XMLView.create({definition: jQuery('#myXml').html()}).then(function (oView) {
          oView.placeAt("content");
});

});

