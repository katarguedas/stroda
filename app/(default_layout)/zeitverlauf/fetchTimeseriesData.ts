// 'use client';
// import { supabase } from '@/lib/helpers/supabaseClient';
// import { useDataContext } from '@/lib/provider/dataContext';
// import { getDateString, calcTimestamp } from '@/lib/helpers/fetchDataHelper';
// import { useState } from 'react';

// const fetchTimeSeriesData = async () => {
//   const { selectedGroup, categoryChecked, categories, firstDate, lastDate } =
//     useDataContext();

//   const [searchedCategory, setSearchedCategory] = useState('');
//   const [chartData, setChartData] = useState<number[][]>([]);

//   let firstId: number;
//   let lastId: number;

//   let tableName = '';
//   if (selectedGroup === 'Stromverbrauch') tableName = 'Stromverbrauch';
//   else if (selectedGroup === 'Stromerzeugung')
//     tableName = 'Stromerzeugung_realisiert';
//   console.log(tableName);

//   //---------

//   const firstDateString = getDateString(firstDate);
//   const lastDateString = getDateString(lastDate);

//   const searchedData1 = await supabase
//     .from(tableName)
//     .select()
//     .textSearch('Datum', firstDateString!) // oder .like('Datum', firstDateString!)
//     .limit(1)
//     .single();

//   // console.log('firstID', searchedData1.data.id);
//   if (searchedData1) {
//     firstId = searchedData1.data!.id;
//   }

//   const searchedData2 = await supabase
//     .from(tableName)
//     .select()
//     .textSearch('Datum', lastDateString!) // oder .like('Datum', lastDateString!)
//     .limit(1)
//     .single();

//   // console.log('lastID', searchedData2.data.id + 23);
//   if (searchedData2) {
//     lastId = searchedData2.data!.id + 23;
//   }
//   //
//   let array = [firstId.toString()];
//   for (let i = firstId + 1; i < lastId + 1; i++) {
//     array.push(i.toString());
//   }
//   // console.log(array);

//   //------------

//   categories.map((category, i) => {
//     if (categoryChecked[i]) {
//       setSearchedCategory(category);
//     }
//   });
//   console.log('category', searchedCategory);

//   //-----

//   const data = await supabase.from(tableName).select().in('id', array);

//   if (!data.data) {
//     console.log('Keine Daten gefunden!');
//   } else {
//     console.log('DATA:', data);

//     // const chartData = [[ts, data]]

//     data.data.map((e, i) => {
//       const timestamp = calcTimestamp(e.Datum, e.Anfang);
//       setChartData([...chartData, [timestamp, e[searchedCategory]]]);
//     });

//     console.log('ausgelesene Daten: ', chartData);
//   }
//   return chartData;
// };

// export default fetchTimeSeriesData;
