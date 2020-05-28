sap.ui.define(
	[
		"sap/ui/model/json/JSONModel"
	],
	function (JSONModel) {
		"use strict";
		return {
			createRecipient: function () {
				var OData = {
					recipient: {
						name: "World"
					}
				};
				return new JSONModel(OData);
			}
		};
	});