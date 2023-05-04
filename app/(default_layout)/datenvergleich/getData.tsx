import { supabase } from "@/lib/helpers/supabaseClient";

//
export const getStromverbrauchData = async (years: string[]) => {

  const tableName = 'Stromverbrauch';

  // let allYears: number[] = new Array(years.length); // Array mit Jahreswerten
  let monthlyDataPerYear: number[][] = new Array(years.length).fill(new Array(12))   // Für jedes Jahr 12 Werte für die Summe eines Monats
  // let gesamtOneYear: number[] = [];  // Array mit stündlichen Einzelwerten des gesamten Jahres
  let oneYear: number[] = []
  const test: number[][] = [];


  let m = 0;
  let i = 0;
  for (i = 0; i < years.length; i++) {
    oneYear = []
    const year = years[i];
    let count = 0;

    for (m = 1; m < 13; m++) {
      let gesamtOneMonth: number[] = [];  // Array mit allen stündlichen Einzelwerten des Monats
      let month = '';
      if (m < 10)
        month = '.0'.concat(m.toString());
      else
        month = '.'.concat(m.toString());
      // console.log("String: ", 'Datum', '%' + month + '.' + year)

      const { data, error } = await supabase
        .from(tableName)
        .select()
        .like('Datum', '%' + month + '.' + year)
      count++;
      // console.log("Länge: ", data!.length)

      data!.map((e, i) => {
        let tmp: string[];
        if (e.Gesamt!.includes('.')) {
          tmp = e.Gesamt!.split('.');
          const str = tmp[0].concat(tmp[1]);
          if (str.includes(',')) {
            tmp = str.split(',');
            const stringValue = tmp[0].concat('.').concat(tmp[1]);
            // gesamtOneYear.push(parseFloat(stringValue));
            gesamtOneMonth.push(parseFloat(stringValue))
            return;
          } else {
            // gesamtOneYear.push(parseFloat(str));
            gesamtOneMonth.push(parseFloat(str))
            return;
          }
        } else {
          if (e.Gesamt!.includes(',')) {
            tmp = e.Gesamt!.split(',');
            const stringValue = tmp[0].concat('.').concat(tmp[1]);
            // gesamtOneYear.push(parseFloat(stringValue));
            gesamtOneMonth.push(parseFloat(stringValue))
            return;
          }
          // gesamtOneYear.push(parseFloat(e.Gesamt!))
          gesamtOneMonth.push(parseFloat(e.Gesamt!))
          return;
        }
      })

      const sumOneMonth = gesamtOneMonth.reduce((pv, cv) => pv + cv, 0)
      oneYear.push(sumOneMonth)
    }

    console.log("ein Jahr: ", oneYear)
    monthlyDataPerYear[i] = oneYear;

    // console.log("monthDataPerYear, i:", i, monthlyDataPerYear[i])

  }

  return monthlyDataPerYear;
};