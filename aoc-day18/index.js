sap.ui.define(["sap/ui/core/mvc/Controller", "sap/ui/core/mvc/XMLView", "sap/ui/model/json/JSONModel"],
     function (Controller, XMLView, JSONModel, MessageToast) {
          Controller.extend("myController", {
               onInit : function () {
                    var oData = {
                         RS1: [0,100],
                         RS2: [-50,50],
                         RS3: [20,80],
                         RS4: [-500,500],
                         RS5: [0, 500]
                    };
     
                    var oModel =  new JSONModel(oData);
                    this.getView().setModel(oModel);
               }
          });

          XMLView.create({definition: jQuery('#myXml').html()}).then(function (oView) {
               oView.placeAt("content");
          });
     });