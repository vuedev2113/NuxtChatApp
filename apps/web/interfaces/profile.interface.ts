export enum Role {
    ADMIN = 'admin',
    USER = 'user',
}

export interface Profile {
    id: string;
    username: string;
    full_name: string;
    avatar: string;
    role: 'user' | 'admin';
}

export interface ProfileWithTotalMessages extends Profile {
    total_messages?: number;
    avatarUrl?: string;
}
