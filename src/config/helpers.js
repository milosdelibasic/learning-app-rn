export const hitBox10 = { left: 10, right: 10, top: 10, bottom: 10 };
export const hitBox20 = { left: 20, right: 20, top: 20, bottom: 20 };

export const numberWithSpaces = x =>
  x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
