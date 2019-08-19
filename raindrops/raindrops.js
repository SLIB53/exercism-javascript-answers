export const convert = n => {
  const pling = n % 3 ? "" : "Pling";
  const plang = n % 5 ? "" : "Plang";
  const plong = n % 7 ? "" : "Plong";

  return `${pling}${plang}${plong}` || n.toString();
};
