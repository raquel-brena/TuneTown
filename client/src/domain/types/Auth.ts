export type AuthProvider = { 
    isSignedIn?: boolean;
}

export type UserLoginDTO = {
  username: string;
  password: string;
};

export type UserRegisterDTO = UserLoginDTO & {
  name: string;
  email: string;
};
