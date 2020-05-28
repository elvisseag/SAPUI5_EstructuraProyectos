sap.ui.define(
	[
		"sap/ui/core/mvc/Controller",
		"sap/m/MessageToast",
		"elvis/Customers/model/models",
		"sap/ui/model/resource/ResourceModel"
	],
	function (Controller, MessageToast, models, ResourceModel) {
		"use strict";
		return Controller.extend("elvis.Customers.controller.App", {

			onInit: function () {

			},

			onShowHello: function () {
				var sHello = this.getView().getModel("i18n").getResourceBundle().getText("sayHello");
				var sName = this.getView().getModel().getProperty("/recipient/name");
				var sMsg = sHello.concat(" ").concat(sName);
				
				MessageToast.show(sMsg);
			}
		});
	}
);