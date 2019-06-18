import { Owner } from "./Owner";
import { PropertyType } from "./PropertyType";

export class Property {
    constructor(
        id?: number,
        name?: string,
        description?: string,
        address?: string,
        city?: string,
        propertyType?: PropertyType,
        owner?: Owner,
        longitude?: number,
        latitude?: number,
        addedDate?: string
    ) {
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
    id: number;
    name: string;
    description: string;
    address: string;
    city: string;
    propertyType: PropertyType;
    owner: Owner;
    longitude: number;
    latitude: number;
    addedDate: string;
    public getName(): string {
        return this.name;
    }
    public setName(name: string) {
        this.name = name;
    }
}