'use client';

import { supabase } from '../helpers/supabaseClient';

const useData = () => {
  //
  const getDataForBarChart = async (category: string, year: number) => {
    if (category && category.length > 0) {
      const tableName = getTableName(category);
      console.log('start....');
      const { data, error } = await supabase
        .from(tableName!)
        .select()
        .like('Datum', '%' + year.toString());
      console.log('DATA aus ', tableName, ' \n', data);
      console.log('fertig');
      return(data);
    }

    function getTableName(category: string) {
      switch (category) {
        case 'Stromverbrauch':
          return 'Stromverbrauch';
        case 'Stromerzeugung':
          return 'Stromerzeugung_realisiert';
        case 'installierte Leistung':
          return 'Leistung_installiert';
      }
    }
  };


  //
  return [getDataForBarChart];
};

export default useData;
