import { supabase } from '@/lib/helpers/supabaseClient';
//

export const fetchData = async (
  group: string,
  years: string[],
  dataName: string
) => {
  let tableName = '';
  if (group === 'Stromverbrauch') tableName = 'Stromverbrauch';
  else if (group === 'Stromerzeugung') tableName = 'Stromerzeugung_realisiert';

  let monthlyDataPerYear: number[][] = new Array(years.length).fill(
    new Array(12)
  );
  let oneYear: number[] = [];

  let m = 0;
  let i = 0;
  for (i = 0; i < years.length; i++) {
    oneYear = [];
    const year = years[i];

    for (m = 1; m < 13; m++) {
      let gesamtOneMonth: number[] = []; // Array mit allen stündlichen Einzelwerten des Monats
      let month = '';
      if (m < 10) month = '.0'.concat(m.toString());
      else month = '.'.concat(m.toString());

      const { data, error } = await supabase
        .from(tableName!)
        .select()
        .like('Datum', '%' + month + '.' + year);

      if (!data) {
        console.log('Keine Daten gefunden!');
      } else {
        data.map((e, i) => {
          let tmp: string[];
          const val = e[dataName] as string;
          if (val.includes('.')) {
            tmp = val.split('.');
            if (tmp[1].length < 3) {
              tmp[1] = tmp[1].padEnd(3, '0'); //Daten enthalten '.' als Tatusendertrennzeichen. Beim importieren in Supabase wird Eine '0' am Ende gelöscht(Bsp: aus 45.450 wird 45.45). Daher muss die Null zur richtigen darstellung der Zahl wieder hinzugefügt werden.
            }
            const str = tmp[0].concat(tmp[1]);
            if (str.includes(',')) {
              tmp = str.split(',');
              const stringValue = tmp[0].concat('.').concat(tmp[1]);
              gesamtOneMonth.push(parseFloat(stringValue));
              return;
            } else {
              gesamtOneMonth.push(parseFloat(str));
              return;
            }
          } else {
            if (val.includes(',')) {
              tmp = val.split(',');
              const stringValue = tmp[0].concat('.').concat(tmp[1]);
              gesamtOneMonth.push(parseFloat(stringValue));
              return;
            }
            gesamtOneMonth.push(parseFloat(val));
            return;
          }
        });
        const sumOneMonth = gesamtOneMonth.reduce((pv, cv) => pv + cv, 0);
        oneYear.push(sumOneMonth);
      }
      monthlyDataPerYear[i] = oneYear;
    }
  }
  return monthlyDataPerYear;
};
