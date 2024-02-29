import { ApplicationMode } from "./ApplicationMode";

export interface RedirectTarget {
  mode?: ApplicationMode;
  type?: string;
  id?: string;
}

export function generateQuery(target: RedirectTarget): string {
  let result = [];
  if (target.mode) {
    result.push(`mode=${target.mode}`);
  }
  if (target.type) {
    result.push(`type=${target.type}`);
  }
  if (target.id) {
    result.push(`id=${target.id}`);
  }
  return `?${result.join("&")}`;
}

export function generateUrl(target: RedirectTarget): string {
  const query = generateQuery(target);
  return `/${query}`;
}

export function openLinkHere(target: RedirectTarget) {
  window.open(generateUrl(target), "_self");
}
