export const USER_STATUS = {
  ACTIF: "ACTIF",
  SUSPENDU: "SUSPENDU",
} as const;

export type UserStatus = keyof typeof USER_STATUS;

export interface UserDto {
  id: string;
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

export interface UserUpdateDto {
  id: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  status?: UserStatus;
}
