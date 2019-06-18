"use strict";
exports.__esModule = true;
var Property = /** @class */ (function () {
    function Property(id, name, description, address, city, propertyType, owner, longitude, latitude, addedDate) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.address = address;
        this.city = city;
        this.propertyType = propertyType;
        this.owner = owner;
        this.longitude = longitude;
        this.latitude = latitude;
        this.addedDate = addedDate;
    }
    Property.prototype.getName = function () {
        return this.name;
    };
    Property.prototype.setName = function (name) {
        this.name = name;
    };
    return Property;
}());
exports.Property = Property;
