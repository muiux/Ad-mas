export const currencyFormatter = (num, type = "currency", digits = 2) => {
  return new Intl.NumberFormat("en-US", {
    currency: "USD",
    currencyDisplay: "narrowSymbol",
    style: type,
    notation: "compact",
    maximumFractionDigits: digits,
  }).format(num ?? 0);
};
