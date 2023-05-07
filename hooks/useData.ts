'use client';
import { supabase } from '@/lib/helpers/supabaseClient';
import { useDataContext } from '@/lib/provider/dataContext';
import {
  getDateString,
  calcTimestamp,
  formatValue,
  getDateValues,
} from '@/lib/helpers/fetchDataHelper';

const useData = () => {
  const { selectedGroup, firstDate, lastDate, searchedCategory } =
    useDataContext();

  const fetchTimeSeriesData = async () => {
    let firstId = 0;
    let lastId = 0;

    let tableName = '';
    if (selectedGroup === 'Stromverbrauch') tableName = 'Stromverbrauch';
    else if (selectedGroup === 'Stromerzeugung')
      tableName = 'Stromerzeugung_realisiert';
    console.log(tableName);

    //------------

    console.log('first date:', new Date(firstDate));

    const firstDateString = getDateString(firstDate);
    const lastDateString = getDateString(lastDate);

    try {
      const searchedData1 = await supabase
        .from(tableName)
        .select()
        .textSearch('Datum', firstDateString!) // oder .like('Datum', firstDateString!)
        .limit(1)
        .single();

      if (searchedData1) {
        firstId = searchedData1.data!.id;
      }
    } catch (error) {
      console.log('error', error);
      throw new Error('Gewünschte Daten nicht gefunden.');
    }
    try {
      const searchedData2 = await supabase
        .from(tableName)
        .select()
        .textSearch('Datum', lastDateString!) // oder .like('Datum', lastDateString!)
        .limit(1)
        .single();

      if (searchedData2) {
        lastId = searchedData2.data!.id + 23;
      }
    } catch (error) {
      console.log('error', error);
      throw new Error('Gewünschte Daten nicht gefunden.');
    }
    //
    let array = [firstId.toString()];
    for (let i = firstId + 1; i < lastId + 1; i++) {
      array.push(i.toString());
    }

    //-----

    let chartData: number[][] = new Array(array.length).fill(new Array(2));

    console.log('Category: ', searchedCategory);
    try {
      const data = await supabase.from(tableName).select().in('id', array);
      console.log('länge', chartData.length);

      if (!data.data) {
        console.log('Keine Daten gefunden!');
      } else {
        data.data.map((e, i) => {
          const timestamp = calcTimestamp(e.Datum, e.Anfang);
          const value = formatValue(e[searchedCategory]);
          chartData[i] = [timestamp, value];
        });
      }
    } catch (error) {
      console.log('error', error);
      throw new Error('Gewünschte Daten nicht gefunden.');
    }
    return chartData;
  };
  return [fetchTimeSeriesData];
};

export default useData;
