sap.ui.define([
     "sap/ui/core/mvc/Controller", 
     "sap/ui/core/mvc/XMLView", 
     "sap/m/MessageToast",
     "sap/ui/model/json/JSONModel"],
     function (Controller, XMLView, MessageToast, JSONModel) {
          Controller.extend("myController", {

               onInit: function () {
                    // set explored app's demo model on this sample
                    var sDataPath = "https://ui5.sap.com/test-resources/sap/ui/documentation/sdk/products.json";
                    var oModel = new JSONModel(sDataPath);                    
                    this.getView().setModel(oModel);
               },
     
               handleButtonPress: function () {
                    MessageToast.show("Header toolbar button pressed.");
               }
     
          });

          XMLView.create({definition: jQuery('#myXml').html()}).then(function (oView) {
               oView.placeAt("content");
          });
     });