'use client';
import { supabase } from '@/lib/helpers/supabaseClient';
import { useDataContext } from '@/lib/provider/dataContext';
import {
  getDateString,
  calcTimestamp,
  formatValue,
} from '@/lib/helpers/fetchDataHelper';

const useData = () => {
  const { selectedGroup, firstDate, lastDate, categoryChecked, categories } =
    useDataContext();

  const fetchTimeSeriesData = async () => {
    let firstId = 0;
    let lastId = 0;

    let tableName = '';
    if (selectedGroup === 'Stromverbrauch') tableName = 'Stromverbrauch';
    else if (selectedGroup === 'Stromerzeugung')
      tableName = 'Stromerzeugung_realisiert';

    //------------

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
    }
    //
    let array = [firstId.toString()];
    for (let i = firstId + 1; i < lastId + 1; i++) {
      array.push(i.toString());
    }
    //-----

    let allData: number[][][] = [];

    try {
      const data = await supabase.from(tableName).select().in('id', array);

      if (!data.data) {
        console.log('Keine Daten gefunden!');
      } else {
        if (selectedGroup === 'Stromerzeugung') {
          categories.map((category, index) => {
            let oneCat: number[][] = [];
            data.data.map((e, i) => {
              const timestamp = calcTimestamp(e.Datum, e.Anfang);
              let value: number;
              try {
                value = formatValue(e[category]);
              } catch (error) {
                value = 0;
              }
              oneCat.push([timestamp, value]);
            });
            allData.push(oneCat);
          });
        } else if (selectedGroup === 'Stromverbrauch') {
          let oneCat: number[][] = [];
          data.data.map((e, i) => {
            const timestamp = calcTimestamp(e.Datum, e.Anfang);
            const value = formatValue(e['Gesamt']);
            oneCat.push([timestamp, value]);
          });
          allData.push(oneCat);
        }

        // console.log('ALL DATA:.....', allData);
      }
    } catch (error) {
      console.log('error', error);
      // throw new Error('Gewünschte Daten nicht gefunden.');
    }

    return allData;

    // });
  };

  //-----------------------------

  return [fetchTimeSeriesData];
};

export default useData;
