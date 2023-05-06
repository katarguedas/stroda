'use client';

import { createContext, useContext } from 'react';

type StaticDataContext = {
  years: string[];
  groups: string[];
  categories: string[];
  categoriesLC: string[];
};


const Context = createContext<StaticDataContext>(undefined!);

const useStaticDataContext = () => useContext(Context);

function StaticDataProvider({
  children,
}: {
  children: React.ReactNode;
}) {

  const years = ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'];
  const groups = ['Stromverbrauch', 'Stromerzeugung'];
  const categories = ['Biomasse', 'Braunkohle', 'Erdgas', 'Kernenergie', 'Photovoltaik', 'Pumpspeicher', 'sonstige Erneuerbare', 'sonstige Konventionelle', 'Steinkohle', 'Wasserkraft', 'Wind Offshore', 'Wind Onshore']
  const categoriesLC = ['biomasse', 'braunkohle', 'erdgas', 'kernenergie', 'photovoltaik', 'pumpspeicher', 'sonstigeErneuerbare', 'sonstigeKonventionelle', 'steinkohle', 'wasserkraft', 'windOffshore', 'WindOnshore']

  return (
    <Context.Provider value={{ years, groups, categories, categoriesLC }}>
      {children}
    </Context.Provider>
  );
}

export { StaticDataProvider, useStaticDataContext }