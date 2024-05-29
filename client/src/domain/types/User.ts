export type User = {
  email: string;
  name: string;
}

export type UserEntity = User & {
  id: string;
  profileId?: string | null;
  createdAt: string;
  updatedAt: string;
};
