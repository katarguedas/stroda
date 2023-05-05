import { supabase } from "@/lib/helpers/supabaseClient";

//

export const getData = async (group: string, years: string[], dataName: string) => {

  let tableName: string;
  switch (group) {
    case "Stromverbrauch":
      tableName = 'Stromverbrauch';
      break
    case "Stromerzeugung":
      tableName = 'Stromerzeugung_realisiert';
      break;
    case "installierte Leistung":
      tableName = 'Leistung_installiert';
      break;
  }


  let monthlyDataPerYear: number[][] = new Array(years.length).fill(new Array(12))
  let oneYear: number[] = []

  let m = 0;
  let i = 0;
  for (i = 0; i < years.length; i++) {
    oneYear = []
    const year = years[i];

    for (m = 1; m < 13; m++) {
      let gesamtOneMonth: number[] = [];  // Array mit allen stündlichen Einzelwerten des Monats
      let month = '';
      if (m < 10)
        month = '.0'.concat(m.toString());
      else
        month = '.'.concat(m.toString());

      const { data, error } = await supabase
        .from(tableName!)
        .select()
        .like('Datum', '%' + month + '.' + year);


      if (!data) {
        console.log("Keine Daten gefunden!")
      } else if (tableName !== 'Leistung_installiert') {
        // console.log("Jahr:", years[i], "tableName: ", dataName)
        data.map((e, i) => {
          let tmp: string[];
          const val = e[dataName] as string;

          if (val.includes('.')) {
            tmp = val.split('.');
            const str = tmp[0].concat(tmp[1]);
            if (str.includes(',')) {
              tmp = str.split(',');
              const stringValue = tmp[0].concat('.').concat(tmp[1]);
              gesamtOneMonth.push(parseFloat(stringValue))
              return;
            } else {
              gesamtOneMonth.push(parseFloat(str))
              return;
            }
          } else {
            if (val.includes(',')) {
              tmp = val.split(',');
              const stringValue = tmp[0].concat('.').concat(tmp[1]);
              gesamtOneMonth.push(parseFloat(stringValue))
              return;
            }
            gesamtOneMonth.push(parseFloat(val))
            return;
          }
        })
        const sumOneMonth = gesamtOneMonth.reduce((pv, cv) => pv + cv, 0)
        oneYear.push(sumOneMonth)
      }
      monthlyDataPerYear[i] = oneYear;

    }
  } 
  // console.log("DATA:", monthlyDataPerYear)
  return monthlyDataPerYear;
};