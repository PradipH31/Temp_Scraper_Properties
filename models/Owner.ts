export class Owner {
    constructor(id?: number, firstName?: string, lastName?: string, email?: string, contactNo?: string, status?: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.contactNo = contactNo;
        this.status = status;
    }
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    contactNo: string;
    status: string;
}