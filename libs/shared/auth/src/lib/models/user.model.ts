export type UserRole = 'ADMIN' | 'PASSENGER' | 'OWNER';

export interface User {
  username: string;
  email: string;
  password: string;
  role: UserRole;
  accessToken?: string | null;
}