export type UserRole = 'ADMIN' | 'OWNER' | 'PASSENGER';

export interface AuthUser {
    username: string;
    password?: string;
    role: UserRole;
}

export interface AuthState {
    user: AuthUser | null;
    isAuthenticated: boolean;
    error: string | null;
}