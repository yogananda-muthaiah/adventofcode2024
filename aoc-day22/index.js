sap.ui.define([
	'sap/ui/core/mvc/Controller',
	"sap/ui/core/mvc/XMLView",
	"sap/m/MessageBox",
     "sap/ui/model/json/JSONModel",
	"sap/ui/core/library"
], function(Controller, XMLView, JSONModel, MessageBox, coreLibrary) {
     "use strict";

     Controller.extend("myController", {
          onInit: function () {
		},
		_getColorByState: function (oItem) {
			switch (oItem.getState()) {
				case "Error" : return coreLibrary.IconColor.Negative;
				case "Warning" : return coreLibrary.IconColor.Critical;
				case "Success" : return coreLibrary.IconColor.Positive;
			}
		},
		itemPress: function (oEvent) {
			var oItem = oEvent.getSource(),
				aCustomData = oItem.getCustomData(),
				sTitle = aCustomData[0].getValue(),
				sIcon = aCustomData[1].getValue(),
				sSubTitle = aCustomData[2].getValue(),
				sDescription = aCustomData[3].getValue();

			var oPopover = new sap.m.Popover({
				contentWidth: "300px",
				title: "Order status",
				content: [
					new sap.m.HBox({
						items: [
							new sap.ui.core.Icon({
								src: sIcon,
								color: this._getColorByState(oItem)
							}).addStyleClass("sapUiSmallMarginBegin sapUiSmallMarginEnd"),
							new sap.m.FlexBox({
								width: "100%",
								renderType: "Bare",
								direction: "Column",
								items: [new sap.m.Title({
									level: coreLibrary.TitleLevel.H1,
									text: sTitle
								}), new sap.m.Text({
									text: sSubTitle
								}).addStyleClass("sapUiSmallMarginBottom sapUiSmallMarginTop"),
									new sap.m.Text({
										text: sDescription
									})
								]
							})
						]
					}).addStyleClass("sapUiTinyMargin")
				],
				footer: [
					new sap.m.Toolbar({
						content: [
							new sap.m.ToolbarSpacer(),
							new sap.m.Button({
								text: "Close",
								press: function() {
									oPopover.close();
								}
							})]
					})
				]
			});

			oPopover.openBy(oEvent.getParameter("item"));
		}
	});

     XMLView.create({definition: jQuery('#myXml').html()}).then(function (oView) {
          oView.placeAt("content");
});

});

