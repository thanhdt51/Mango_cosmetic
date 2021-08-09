/* eslint-disable import/prefer-default-export */
export const moneyParser = (value) =>
  `${value}đ`.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

export async function fetchProducts(data) {
  const url = new URL(data.url);
  url.search = new URLSearchParams(data.params).toString();

  const response = await fetch(url);
  const json = await response.json();
  return json;
};
