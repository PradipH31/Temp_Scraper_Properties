export interface IGenericInterface<T> {
    save(model: T, callback: any): void;
    getAll(callback: any): Array<T>;
    getById(id: number, callback: any): T;
    delete(id: number, callback: any): void;
}

export class IGenericService<T> implements IGenericInterface<T> {
    models = new Array<T>();
    save(model: T, callback: any): void {
        this.models.push(model);
        callback();
    }
    getAll(callback: any): T[] {
        callback();
        return this.models;
    }
    getById(id: number, callback: any): T {
        callback();
        return this.models[id - 1];
    }
    delete(id: number, callback: any): void {
        this.models.splice(id - 1, 1);
        callback();
    }
}