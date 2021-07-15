

export type HistoryEntry = {
  id: number;
  opName: string;
  opValue: number;
};

export type NewHistoryEntry = Omit<HistoryEntry, "id">;