import { fetchData } from './fetchData';
import type { Alldata } from '@/types/supabase-myTypes';
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
const groups = ['Stromverbrauch', 'Stromerzeugung'];

const GetData = async () => {
  const allData: Alldata = [
    {
      gesamt: await fetchData(groups[0], years, 'Gesamt'),
    },
    {
      biomasse: await fetchData(groups[1], years, 'Biomasse'),
      wasserkraft: await fetchData(groups[1], years, 'Wasserkraft'),
      windOffshore: await fetchData(groups[1], years, 'Wind Offshore'),
      windOnshore: await fetchData(groups[1], years, 'Wind Onshore'),
      photovoltaik: await fetchData(groups[1], years, 'Photovoltaik'),
      kernenergie: await fetchData(groups[1], years, 'Kernenergie'),
      braunkohle: await fetchData(groups[1], years, 'Braunkohle'),
      steinkohle: await fetchData(groups[1], years, 'Steinkohle'),
      erdgas: await fetchData(groups[1], years, 'Erdgas'),
      pumpspeicher: await fetchData(groups[1], years, 'Pumpspeicher'),
      sonstigeErneuerbare: await fetchData(
        groups[1],
        years,
        'Sonstige Erneuerbare'
      ),
      sonstigeKonventionelle: await fetchData(
        groups[1],
        years,
        'Sonstige Konventionelle'
      ),
    },
  ];

  // console.log('gefetchte Daten für Balkendiagramm:', allData);
  return allData;
};

export default GetData;
