sap.ui.define([
	'sap/ui/core/mvc/Controller',
	"sap/ui/core/mvc/XMLView",
     "sap/ui/model/json/JSONModel",
	"sap/m/MessageBox",     
     "sap/ui/core/date/UI5Date"
], function(Controller, XMLView, JSONModel, MessageBox, UI5Date) {
     "use strict";

      Controller.extend("myController", {

          press : function(evt) {
               MessageToast.show("The numeric content is pressed.");
          }
     });
                    
 
     XMLView.create({definition: jQuery('#myXml').html()}).then(function (oView) {
          oView.placeAt("content");
});

});