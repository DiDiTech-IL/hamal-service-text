import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { hamal, roles, targetGroups, type role } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const convertSlug = (slug: string) => {
  const found = hamal.find((h) => h.slug === slug);
  return found?.name || slug;
};

export function convertRole(roleName: string): role | undefined {
  const found = roles.find((r) => r.code === roleName);
  return found;
}

export const convertTarget = (formValue: string) => {
  const found = targetGroups.find((t) => t.value === formValue);
  return found;
};
