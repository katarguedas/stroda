export type StromverbrauchRow = {
  Anfang: string | null;
  Datum: string | null;
  Ende: string | null;
  Gesamt: string | null;
  id: number;
  Pumpspeicher: string | null;
  Residuallast: string | null;
};

export type StromerzeugungRow = {
  Anfang: string | null;
  Biomasse: string | null;
  Braunkohle: string | null;
  Datum: string | null;
  Ende: string | null;
  Erdgas: string | null;
  id: number;
  Kernenergie: string | null;
  Photovoltaik: string | null;
  Pumpspeicher: string | null;
  'Sonstige Erneuerbare': string | null;
  'Sonstige Konventionelle': string | null;
  Steinkohle: string | null;
  Wasserkraft: string | null;
  'Wind Offshore': string | null;
  'Wind Onshore': string | null;
};

export type LeistungRow = {
  Anfang: string | null;
  Biomasse: number | null;
  Braunkohle: string | null;
  Datum: string | null;
  Ende: string | null;
  Erdgas: string | null;
  id: number;
  Kernenergie: string | null;
  Photovoltaik: number | null;
  Pumpspeicher: string | null;
  'Sonstige Erneuerbare': number | null;
  'Sonstige Konventionelle': string | null;
  Steinkohle: string | null;
  Wasserkraft: number | null;
  'Wind Offshore': string | null;
  'Wind Onshore': string | null;
};
