
export type UserStatus = "ACTIF" | "SUSPENDU"

export interface  UserDto {
    email: string;
    firstName: string;
    lastName: string;
    createAt: string;
    status: UserStatus;
}