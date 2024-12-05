sap.ui.define(["sap/ui/core/mvc/Controller", "sap/ui/core/mvc/XMLView", "sap/ui/model/json/JSONModel", "sap/m/MessageToast"],
     function (Controller, XMLView, JSONModel, MessageToast) {
          Controller.extend("myController", {
               onInit: function () {
                    var model = new JSONModel();
                    this.getView().setModel(model);
               },
               onGenericTagPress: function () {
                    MessageToast.show("The GenericTag is pressed.");
               }
          });

          XMLView.create({definition: jQuery('#myXml').html()}).then(function (oView) {
               oView.placeAt("content");
          });
     });