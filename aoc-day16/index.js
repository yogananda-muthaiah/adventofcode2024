sap.ui.define(
     ["sap/ui/core/mvc/Controller", 
     "sap/ui/core/mvc/XMLView", 
     "sap/ui/model/json/JSONModel", 
     "sap/m/MessageToast"],
     function (Controller, XMLView, JSONModel, MessageToast) {
          Controller.extend("myController", {
               onInit: function () {
                    var model = new JSONModel();
                    this.getView().setModel(model);
               },
               onGenericTagPress: function () {
                    MessageToast.show("The GenericTag is pressed.");
               },
               onFormatJsonPress: function () {
                    var oCodeEditor = this.byId("myCodeEditor");
                    if (!oCodeEditor) {
                         MessageToast.show("Code editor not found.");
                         return;
                    }
                    var sValue = oCodeEditor.getValue();
                    try {
                         var oJson = JSON.parse(sValue);
                         var sFormatted = JSON.stringify(oJson, null, 4); // Indentation of 4 spaces
                         oCodeEditor.setValue(sFormatted);
                    } catch (e) {
                         MessageToast.show("Invalid JSON format.");
                    }
               }
          });

          XMLView.create({definition: jQuery('#myXml').html()}).then(function (oView) {
               oView.placeAt("content");
          });
     });