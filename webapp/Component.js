sap.ui.define([
	"sap/ui/core/UIComponent",
	"elvis/Customers/model/models",
	"sap/ui/model/resource/ResourceModel"
], function (UIComponent, models, ResourceModel) {
	return UIComponent.extend("elvis.Customers.Component", {

		metadata: {
			manifest: "json"
		},

		init: function () {
			
			UIComponent.prototype.init.apply(this, arguments);
			
			this.setModel(models.createRecipient());
			
			var i18nModel = new ResourceModel({
				bundleName: "elvis.Customers.i18n.i18n"
			});
			this.setModel(i18nModel, "i18n");

		}

	});
});