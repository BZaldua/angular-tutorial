export interface User {
    ID: number,
    Name: string,
    Surname: string,
    Nick: string,
    Email: string,
    Password: string,
    Type: UserType
}

export enum UserType {
    Admin,
    Client,
    Other
}