    sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/core/UIComponent"
    ], function(Controller, UIComponent) {
        "use strict";
    
        return Controller.extend("employeedirectory1.controller.BaseController ", {
    
            getRouter : function () {
                return UIComponent.getRouterFor(this);
            },
    
            onNavBack: function () {
                return this.getOwnerComponent().getRouter().navTo("Home")
            }
    
        });
    
    });
    


   