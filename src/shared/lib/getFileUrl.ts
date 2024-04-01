export function getFileUrl(str: string) {
  return `${process.env.NEXT_PUBLIC_API_URL}${str}`;
}
