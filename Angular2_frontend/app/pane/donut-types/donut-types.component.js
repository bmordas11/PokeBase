"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ng2_nvd3_1 = require('ng2-nvd3');
var DonutTypesComponent = (function () {
    function DonutTypesComponent() {
    }
    DonutTypesComponent.prototype.ngOnInit = function () {
        this.options = {
            chart: {
                type: 'pieChart',
                height: 250,
                donut: true,
                x: function (d) { return d.name; },
                y: function (d) { return d.poke_type_id; },
                showLabels: false,
                pie: {
                    startAngle: function (d) { return d.startAngle / 2 - Math.PI / 2; },
                    endAngle: function (d) { return d.endAngle / 2 - Math.PI / 2; }
                },
                duration: 500,
                legend: {
                    margin: {
                        top: 5,
                        right: 0,
                        bottom: 5,
                        left: 0
                    }
                }
            }
        };
        this.data = [
            {
                key: "Types",
                values: []
            }
        ];
    };
    DonutTypesComponent.prototype.ngOnChanges = function (changes) {
        if (this.nvD3.chart) {
            this.nvD3.updateWithData(changes.pokemon.currentValue.types);
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DonutTypesComponent.prototype, "pokemon", void 0);
    __decorate([
        core_1.ViewChild(ng2_nvd3_1.nvD3), 
        __metadata('design:type', ng2_nvd3_1.nvD3)
    ], DonutTypesComponent.prototype, "nvD3", void 0);
    DonutTypesComponent = __decorate([
        core_1.Component({
            selector: "donut-types",
            directives: [ng2_nvd3_1.nvD3],
            template: "\n    <div>\n      <nvd3 #nvD3 [options]=\"options\" [data]=\"data\"></nvd3>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], DonutTypesComponent);
    return DonutTypesComponent;
}());
exports.DonutTypesComponent = DonutTypesComponent;
//# sourceMappingURL=donut-types.component.js.map