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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function reportableClassDecorator(constructor) {
    return class extends constructor {
        constructor() {
            super(...arguments);
            this.reportingURL = 'http://www...';
        }
    };
}
function decorator() {
    return function (target, propertyKey, descriptor) {
        console.log('target', target);
        console.log('propertyKey', propertyKey);
        console.log('descriptor', descriptor);
    };
}
function configurable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.configurable = value;
    };
}
function incrementDecorator(target, propertyKey) {
    let val = target[propertyKey];
    const getter = () => val;
    const setter = (next) => {
        val = next + 1;
    };
    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true,
    });
}
function required(target, propertyKey, parameterIndex) {
    console.log('prop_target', target);
    console.log('prop_propertyKey', propertyKey);
    console.log('prop_parameterIndex', parameterIndex);
}
let Calc = class Calc {
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }
    multi(a, b) {
        return a * b;
    }
    get x() {
        return this._x;
    }
};
__decorate([
    incrementDecorator,
    __metadata("design:type", Number)
], Calc.prototype, "_x", void 0);
__decorate([
    decorator(),
    __param(0, required),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], Calc.prototype, "multi", null);
__decorate([
    configurable(false),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], Calc.prototype, "x", null);
Calc = __decorate([
    reportableClassDecorator,
    __metadata("design:paramtypes", [Number, Number])
], Calc);
const calc = new Calc(2, 2);
calc.multi(999, 3);
calc.x;
console.log('calc.x: ', calc.x);
