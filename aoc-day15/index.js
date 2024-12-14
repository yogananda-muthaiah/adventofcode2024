sap.ui.define([
	'sap/ui/core/mvc/Controller',
	"sap/ui/core/mvc/XMLView",
     'jquery.sap.global', 
     'sap/suite/ui/commons/library', 
     'sap/ui/model/json/JSONModel', 
     'sap/m/MessageToast', 
     'sap/suite/ui/commons/ProcessFlowLaneHeader'     
], function(Controller, XMLView, jQuery, SuiteLibrary, JSONModel, MessageToast, ProcessFlowLaneHeader) {
     "use strict";

     Controller.extend("myController", {
		onInit: function () {
               var sDataPath = "https://ui5.sap.com/test-resources/sap/suite/ui/commons/demokit/sample/ProcessFlowUpdateLanes/ProcessFlowNodes.json";
			var oModel = new JSONModel(sDataPath);
			this.getView().setModel(oModel);

			this.oProcessFlow = this.getView().byId("processflow");
			this.oProcessFlow.updateModel();
		},

		onOnError: function(event) {
			MessageToast.show("Exception occurred: " + event.getParameter("text"));
		},

		onNodePress: function(event) {
			MessageToast.show("Node " + event.getParameters().getNodeId() + " has been clicked.");
		},

		onZoomIn: function () {
			this.oProcessFlow.zoomIn();

			MessageToast.show("Zoom level changed to: " + this.oProcessFlow.getZoomLevel());
		},

		onZoomOut: function () {
			this.oProcessFlow.zoomOut();

			MessageToast.show("Zoom level changed to: " + this.oProcessFlow.getZoomLevel());
		},

		onUpdateModelAdd: function () {
			if (this.oProcessFlow.getLanes().length < 3) {
				var oLaneHeader = new ProcessFlowLaneHeader({
					iconSrc: "sap-icon://money-bills",
					text: "In Accounting",
					position: 2
				});
				this.oProcessFlow.addLane(oLaneHeader);
				this.oProcessFlow.updateModel();
				MessageToast.show("Model has been updated.");
			}
		}
	});

     XMLView.create({definition: jQuery('#myXml').html()}).then(function (oView) {
          oView.placeAt("content");
});

});

