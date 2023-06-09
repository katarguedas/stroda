
//---------
export const getDateString = (date: Date) => {
  if (date) {
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const yyyy = String(date.getFullYear());
    const dateString = dd.concat('.').concat(mm).concat('.').concat(yyyy);
    return dateString;
  } else return null;
};
//-----------

export const getDateValues = (rowDate: string, rowStarthour: string) => {
  const yyyy = rowDate.slice(6, 11);
  const mm = rowDate.slice(3, 5);
  const dd = rowDate.slice(0, 2);
  const hh = rowStarthour.slice(0, 2);

  const values = {
    yyyy: Number(yyyy),
    mm: Number(mm),
    dd: Number(dd),
    hh: Number(hh),
  };
  return values;
};

//-------------

export const calcTimestamp = (rowDate: string, rowStarthour: string) => {
  const yyyy = rowDate.slice(6, 11);
  const mm = rowDate.slice(3, 5);
  const dd = rowDate.slice(0, 2);
  const hh = rowStarthour.slice(0, 2);

  const dateTimestamp = new Date(
    yyyy
      .concat('-')
      .concat(mm)
      .concat('-')
      .concat(dd)
      .concat('T')
      .concat(hh)
      .concat(':00:00')
  ).getTime();

  return dateTimestamp;
};

//---------

export const formatValue = (valueString: string) => {
  let tmp: string[];

  if (valueString.includes('.')) {
    tmp = valueString.split('.');
    if (tmp[1].length < 3) {
      tmp[1] = tmp[1].padEnd(3, '0'); // Daten enthalten '.' als Tatusendertrennzeichen. Beim importieren in Supabase wird Eine '0' am Ende gelöscht(Bsp: aus 45.450 wird 45.45). Daher muss die Null zur richtigen darstellung der Zahl wieder hinzugefügt werden.
    }
    const str = tmp[0].concat(tmp[1]);
    if (str.includes(',')) {
      tmp = str.split(',');
      const string = tmp[0].concat('.').concat(tmp[1]);
      return parseFloat(string);
    } else {
      return parseFloat(str);
    }
  } else {
    if (valueString.includes(',')) {
      tmp = valueString.split(',');
      const string = tmp[0].concat('.').concat(tmp[1]);
      return parseFloat(string);
    }
    return parseFloat(valueString);
  }
};
