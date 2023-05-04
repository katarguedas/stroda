import { supabase } from './supabaseClient';
import type { StromverbrauchUpdate } from '@/types/supabase-myTypes';
import { DateTime } from 'luxon';

//
/**
 * Prepares the date and time to save as timestamp
 * @param tablename
 * @returns
 */
export default async function calcAndInsertTimestamp(tablename: string) {
  for (let i = 1000; i < 2000; i++) {
    const rowData = await fetchChartData(tablename, i, 'Datum');

    let startDateToSave: string = '';
    let endDateToSave: string = '';
    if (rowData) {
      startDateToSave = createDatetime(rowData, 'start');
      endDateToSave = createDatetime(rowData, 'end');
    }

    const { data, error } = await supabase
      .from(tablename)
      .update({
        Datum: rowData!.Datum!,
        Anfang: rowData!.Anfang!,
        Ende: rowData!.Ende!,
        Gesamt: rowData!.Gesamt!,
        Pumpspeicher: rowData!.Pumpspeicher!,
        Residuallast: rowData!.Residuallast!,
        id: rowData?.id!,
        datetime_start: startDateToSave,
        datetime_end: endDateToSave,
      })
      .eq('id', i)
      .select();

    if (!data) {
      console.log('error, Daten konnten nicht aktualisiert werden', error);
      return;
    }
    console.log('timestamp für id ', i, 'eingefügt.');
  }
}

/**********************
 *
 * @param tablename
 * @param id
 * @param name
 * @returns
 */
async function fetchChartData(tablename: string, id: number, name: string) {
  const { data, error } = await supabase
    .from(tablename)
    .select()
    .eq('id', id)
    .limit(1)
    .single();

  // console.log('data', data);
  if (!data) {
    console.log('error, Daten konnten nicht abgerufen werden', error);
    return;
  }

  const returnData: StromverbrauchUpdate = data;
  return returnData;
}
/**
 *
 * @param rowData Data from one table row
 * @param flag
 * @returns a string which will saved as timestamp in the table
 */

function createDatetime(rowData: StromverbrauchUpdate, flag: string) {
  const yyyy = rowData.Datum!.slice(6, 11);
  const mm = rowData.Datum!.slice(3, 5);
  const dd = rowData.Datum!.slice(0, 2);
  let hh = '';
  if (flag === 'start') {
    hh = rowData.Anfang!.slice(0, 2);
  }
  if (flag === 'end') {
    hh = rowData.Ende!.slice(0, 2);
  }
  const datetimeToSave: string = yyyy
    .concat('-')
    .concat(mm)
    .concat('-')
    .concat(dd)
    .concat('T')
    .concat(hh)
    .concat(':00:00');

  // console.log(datetimeToSave);
  return datetimeToSave;
}

// const dateTimeTmp = DateTime.fromISO(
//   yyyy
//     .concat('-')
//     .concat(mm)
//     .concat('-')
//     .concat(dd)
//     .concat('T')
//     .concat(hh)
//     .concat(':00:00')
// );
// const timestampValue = dateTimeTmp.toMillis();
