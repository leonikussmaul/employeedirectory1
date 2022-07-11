sap.ui.define([
    "employeedirectory1/controller/BaseController"
 ], function (BaseController) {
    "use strict";
    return BaseController.extend("employeedirectory1.controller.NotFound", {
       onInit: function () {
        var oRouter, oTarget;

        oRouter = this.getRouter();
        oTarget = oRouter.getTarget("notFound");
        oTarget.attachDisplay(function (oEvent) {
            this._oData = oEvent.getParameter("data");	// store the data
        }, this);
    }
  
    });
 });