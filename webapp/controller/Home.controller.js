sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, UIComponent) {
        "use strict";

        return Controller.extend("employeedirectory1.controller.Home", {
            onInit: function () {

            },
            getRouter : function () {
                return UIComponent.getRouterFor(this);
            },
        onShowEmployeeList: function(){
            this.getRouter().navTo("RouteEmployee");
        }, 
        onDisplayNotFound: function(){
            this.getRouter().navTo("NotFound");
        }
        });
    });
