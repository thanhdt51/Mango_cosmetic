/* eslint-disable import/prefer-default-export */
export const moneyParser = (value) =>
  `${value}đ`.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
