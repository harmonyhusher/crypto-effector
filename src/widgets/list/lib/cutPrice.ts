export function cutPrice(price: string) {
  const splittedPrice = price?.split(".");

  return splittedPrice[0] + '.' + splittedPrice[1]?.slice(0, 2);
}
