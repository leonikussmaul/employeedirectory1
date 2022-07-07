
    sap.ui.define([
        "employeedirectory1/controller/BaseController"
     ], function (BaseController) {
        "use strict";
        return BaseController.extend("employeedirectory1.controller.Home", {
           onInit: function () {
           }, 
           onDisplayNotFound: function(){
            this.getRouter().getTargets().display("notFound", {
				fromTarget : "Home"
            });
        },
           
        onShowEmployeeList: function(){
            this.getRouter().getTargets().display("TargetList");
           }, 

           onShowEmployeesOverview: function(){
            this.getRouter().getTargets().display("TargetOverview");
               
           }
           
        });
     });



    
