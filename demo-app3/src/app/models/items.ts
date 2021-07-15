

export type Item = {
  id: number;
  value: string;
};

export type NewItem = Omit<Item, "id">;