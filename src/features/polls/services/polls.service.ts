import { apiClient } from "@/lib/api/client";

import type { Poll, PollInput } from "../types";

export async function listPolls(): Promise<Poll[]> {
  const { data } = await apiClient.get<Poll[]>("/polls");

  return data;
}

export async function getPoll(uuid: string): Promise<Poll> {
  const { data } = await apiClient.get<Poll>(`/polls/${uuid}`);

  return data;
}

export async function createPoll(input: PollInput): Promise<Poll> {
  const { data } = await apiClient.post<Poll>("/polls", input);

  return data;
}

export async function updatePoll(
  uuid: string,
  input: PollInput,
): Promise<Poll> {
  const { data } = await apiClient.put<Poll>(`/polls/${uuid}`, input);

  return data;
}

export async function deletePoll(uuid: string): Promise<void> {
  await apiClient.delete(`/polls/${uuid}`);
}

