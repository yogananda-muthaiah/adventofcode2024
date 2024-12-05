 sap.ui.define(["sap/ui/core/mvc/Controller", "sap/ui/core/mvc/XMLView", "sap/ui/model/json/JSONModel"],
     function (Controller, XMLView, JSONModel) {
          Controller.extend("myController", {
               onInit: function () {
                    var model = new JSONModel();
                    model.setData({
                         productData: [
                              {highlight: "Error", productName: "Car", productId: "001"},
                              {highlight: "Warning", productName: "E-scooter", productId: "002"},
                              {highlight: "Information", productName: "Train", productId: "003"}
                         ]
                    });
                    this.getView().setModel(model);
               }
          });

          XMLView.create({definition: jQuery('#myXml').html()}).then(function (oView) {
               oView.placeAt("content");
          });
     });