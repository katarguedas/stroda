import GetData from '../jahresdaten/getData';
//

export const calcData = async () => {
  const allData = await GetData();

  let verbrauch: number[] = new Array(9);

  for (let i = 0; i < 9; i++) {
    const sum = allData[0].gesamt[i].reduce((pv, cv) => pv + cv, 0);
    verbrauch[i] = sum;
  }
  const data = verbrauch.filter(function (value) {
    return !Number.isNaN(value);
  });
  return data;
};
