sap.ui.define(["sap/ui/core/mvc/Controller", "sap/ui/core/mvc/XMLView"],
     function (Controller, XMLView) {
          Controller.extend("myController", {
               onInit: function () {
                    this.getView().setModel();
               }
          });

          XMLView.create({definition: jQuery('#myXml').html()}).then(function (oView) {
               oView.placeAt("content");
          });
     });