sap.ui.define([
	'sap/ui/core/mvc/Controller',
	"sap/ui/core/mvc/XMLView"
], function(Controller, XMLView) {


 Controller.extend("myController", {
	onOverflowToolbarPress : function () {
		var oPanel = this.byId("expandablePanel");
		oPanel.setExpanded(!oPanel.getExpanded());
	}
});

XMLView.create({definition: jQuery('#myXml').html()}).then(function (oView) {
	oView.placeAt("content");
});

});