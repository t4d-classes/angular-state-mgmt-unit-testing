

export type User = {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  title: string;
  archived: boolean;
};

export type NewUser = Omit<User, "id">;

