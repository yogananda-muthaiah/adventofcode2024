sap.ui.define([
     "sap/ui/core/mvc/Controller", 
     "sap/ui/core/mvc/XMLView",
     "sap/m/MessageToast",
     "sap/suite/ui/commons/util/DateUtils",
     "sap/ui/model/json/JSONModel"],
     function (Controller, XMLView, MessageToast, DateUtils, JSONModel) {
     "use strict";
     function getBasePath() {
          return sap.ui.require.toUrl("sap/suite/ui/commons/demokit/sample/TimelineCustomGrouping/data.json");
     }

	function convertData(oEvent) {
		var oData,
			oModel = oEvent.getSource(),
			sBasePath = getBasePath();

		if (!oEvent.getParameters().success) {
			return;
		}

		oData = oModel.getData();
		oData.Employees.forEach(function(oEmployee) {
			oEmployee.HireDate = DateUtils.parseDate(oEmployee.HireDate);
			oEmployee.Photo = sBasePath + oEmployee.Photo;
		});
		oModel.updateBindings(true);
	}
     

          Controller.extend("myController", {
               onInit: function() {
                    var sDataPath = "https://ui5.sap.com/test-resources/sap/suite/ui/commons/demokit/sample/TimelineCustomGrouping/data.json";
                    var oModel = new JSONModel(sDataPath);
                    oModel.attachRequestCompleted(convertData);

                    this.getView().setModel(oModel);
                    this.byId("idTimeline").setCustomGrouping(function(oDate) {
                         return {
                              key: oDate.getFullYear() + "/" + (oDate.getMonth() < 6 ? 1 : 2),
                              title: oDate.getFullYear() + "/" + (oDate.getMonth() < 6 ? "1. half" : "2. half"),
                              date: oDate
                         };
                    });
               },
               onUserNameClick : function(oEvent) {
                    MessageToast.show(oEvent.getSource().getUserName() + " is pressed.");
               },
               onPressItems : function(evt) {
                    MessageToast.show("The TimelineItem is pressed.");
               }
          });
          XMLView.create({definition: jQuery('#myXml').html()}).then(function (oView) {
               oView.placeAt("content");
          });
     });