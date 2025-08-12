export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function normalize(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");
}

export function searchFilter(query: string, haystack: string) {
  const q = normalize(query);
  const h = normalize(haystack);
  return q.split(/\s+/).every((w) => h.includes(w));
}
