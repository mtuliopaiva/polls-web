export type Poll = {
  uuid: string;
  title: string;
  description?: string | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
};

export type PollInput = {
  title: string;
  description?: string;
};

