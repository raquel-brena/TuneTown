export type User = {
  email: string;
  name: string;
  username: string;
}

export type UserEntity = User & {
  id: string;

  profileId: string;
  createdAt: string;
  updatedAt: string;
}

export type UserResponseDTO =  User & {
  profileId: string;
  createdAt: string;
}

export type CreateUserDTO = User & {
  password: string;
};

export type CreateUserAndProfileDTO = CreateUserDTO & {
};

export type UpdateUserDTO = {
  email?: string | null;
  name?: string | null;
  username?: string | null;
  password?: string | null;
}


