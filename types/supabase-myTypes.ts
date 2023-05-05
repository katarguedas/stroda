export type Stromverbrauch = {
  gesamt: number[][];
};

export type Stromerzeugung = {
  biomasse: number[][] | undefined;
  braunkohle: number[][] | undefined;
  erdgas: number[][] | undefined;
  kernenergie?: number[][] | undefined;
  photovoltaik?: number[][] | undefined;
  pumpspeicher?: number[][] | undefined;
  sonstigeErneuerbare?: number[][] | undefined;
  sonstigeKonventionelle?: number[][] | undefined;
  steinkohle?: number[][] | undefined;
  wasserkraft?: number[][] | undefined;
  windOffshore?: number[][] | undefined;
  windOnshore?: number[][] | undefined;
};

export type Leistung = {
  biomasse: number[][] | undefined;
  braunkohle: number[][] | undefined;
  erdgas: number[][] | undefined;
  kernenergie?: number[][] | undefined;
  photovoltaik?: number[][] | undefined;
  pumpspeicher?: number[][] | undefined;
  sonstigeErneuerbare?: number[][] | undefined;
  sonstigeKonventionelle?: number[][] | undefined;
  steinkohle?: number[][] | undefined;
  wasserkraft?: number[][] | undefined;
  windOffshore?: number[][] | undefined;
  windOnshore?: number[][] | undefined;
};

// 

export type Alldata = [
  {
    gesamt: number[][];
  },
  {
    biomasse: number[][];
    braunkohle: number[][];
    erdgas: number[][];
    kernenergie?: number[][];
    photovoltaik?: number[][];
    pumpspeicher?: number[][];
    sonstigeErneuerbare?: number[][];
    sonstigeKonventionelle?: number[][];
    steinkohle?: number[][];
    wasserkraft?: number[][];
    windOffshore?: number[][];
    windOnshore?: number[][];
  },
  {
    biomasse: number[][];
    braunkohle: number[][];
    erdgas: number[][];
    kernenergie?: number[][];
    photovoltaik?: number[][];
    pumpspeicher?: number[][];
    sonstigeErneuerbare?: number[][];
    sonstigeKonventionelle?: number[][];
    steinkohle?: number[][];
    wasserkraft?: number[][];
    windOffshore?: number[][];
    windOnshore?: number[][];
  }
];
