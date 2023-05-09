import { fetchData } from '../jahresdaten/fetchData';
//
const years = [
  '2015',
  '2016',
  '2017',
  '2018',
  '2019',
  '2020',
  '2021',
  '2022',
  '2023',
];

export const calcData = async () => {
  const data = await fetchData('Stromverbrauch', years, 'Gesamt');

  let verbrauch: number[] = new Array(years.length);

  for (let i = 0; i < 9; i++) {
    const sum = data[i].reduce((pv, cv) => pv + cv, 0);
    verbrauch[i] = sum;
  }
  const searchedData = verbrauch.filter(function (value) {
    return !Number.isNaN(value);
  });
  return searchedData;
};
