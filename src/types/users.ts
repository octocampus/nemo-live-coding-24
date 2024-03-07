export type UserStatus = "ACTIF" | "SUSPENDU";

export interface UserDto {
  email: string;
  firstName: string;
  lastName: string;
  createdAt: string;
  status: UserStatus;
}

export interface UserCreationDto {
  email: string;
  firstName: string;
  lastName: string;
}
