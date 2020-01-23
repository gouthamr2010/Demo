sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("com.sap.Demo.controller.View1", {
		onInit: function () {
			var oJson = {
				"Collections": [{
					"Collection1": [{
						"title": "Oil",
						"SupplierName": "Shakeer",
						"Street": "1123"
					}]
				}, {
					"Collection2": [{
						"title": "Petroluem",
						"SupplierName": "Goutham",
						"Street": "1147"
					}]
				}, {
					"Collection3": [{
						"title": "Uranium",
						"SupplierName": "Alen",
						"Street": "237"
					}]
				}]
			};
			var oFragmentId1 = this.getView().createId("form1");
			var oFragmentId2 = this.getView().createId("form2");
			var oForm1 = sap.ui.core.Fragment.byId(oFragmentId1, "simpleForm");
			var oForm2 = sap.ui.core.Fragment.byId(oFragmentId2, "simpleForm");

			this.oModel = new JSONModel(oJson);
			this.getView().setModel(this.oModel, "formData");
			oForm1.bindElement("formData>/Collections/0/Collection1/0");
			oForm2.bindElement("formData>/Collections/1/Collection2/0");
		},

		onClick: function (oEvent) {
			var oPanel = this.byId("panel");
			var oFragment = sap.ui.xmlfragment(this.createId("form3"), "com.sap.Demo.fragment.Form", this);
			oPanel.addContent(oFragment);
			var oForm = sap.ui.core.Fragment.byId(this.createId("form3"), "simpleForm");
			oForm.bindElement("formData>/Collections/2/Collection3/0");
		}

	});
});