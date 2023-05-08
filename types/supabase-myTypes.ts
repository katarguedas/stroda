
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
  }
];
