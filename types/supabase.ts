export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      Leistung_installiert: {
        Row: {
          Anfang: string | null
          Biomasse: number | null
          Braunkohle: string | null
          Datum: string | null
          Ende: string | null
          Erdgas: string | null
          id: number
          Kernenergie: string | null
          Photovoltaik: number | null
          Pumpspeicher: string | null
          "Sonstige Erneuerbare": number | null
          "Sonstige Konventionelle": string | null
          Steinkohle: string | null
          Wasserkraft: number | null
          "Wind Offshore": string | null
          "Wind Onshore": string | null
        }
        Insert: {
          Anfang?: string | null
          Biomasse?: number | null
          Braunkohle?: string | null
          Datum?: string | null
          Ende?: string | null
          Erdgas?: string | null
          id: number
          Kernenergie?: string | null
          Photovoltaik?: number | null
          Pumpspeicher?: string | null
          "Sonstige Erneuerbare"?: number | null
          "Sonstige Konventionelle"?: string | null
          Steinkohle?: string | null
          Wasserkraft?: number | null
          "Wind Offshore"?: string | null
          "Wind Onshore"?: string | null
        }
        Update: {
          Anfang?: string | null
          Biomasse?: number | null
          Braunkohle?: string | null
          Datum?: string | null
          Ende?: string | null
          Erdgas?: string | null
          id?: number
          Kernenergie?: string | null
          Photovoltaik?: number | null
          Pumpspeicher?: string | null
          "Sonstige Erneuerbare"?: number | null
          "Sonstige Konventionelle"?: string | null
          Steinkohle?: string | null
          Wasserkraft?: number | null
          "Wind Offshore"?: string | null
          "Wind Onshore"?: string | null
        }
      }
      Stromerzeugung_realisiert: {
        Row: {
          Anfang: string | null
          Biomasse: string | null
          Braunkohle: string | null
          Datum: string | null
          Ende: string | null
          Erdgas: string | null
          id: number
          Kernenergie: string | null
          Photovoltaik: string | null
          Pumpspeicher: string | null
          "Sonstige Erneuerbare": string | null
          "Sonstige Konventionelle": string | null
          Steinkohle: string | null
          Wasserkraft: string | null
          "Wind Offshore": string | null
          "Wind Onshore": string | null
        }
        Insert: {
          Anfang?: string | null
          Biomasse?: string | null
          Braunkohle?: string | null
          Datum?: string | null
          Ende?: string | null
          Erdgas?: string | null
          id: number
          Kernenergie?: string | null
          Photovoltaik?: string | null
          Pumpspeicher?: string | null
          "Sonstige Erneuerbare"?: string | null
          "Sonstige Konventionelle"?: string | null
          Steinkohle?: string | null
          Wasserkraft?: string | null
          "Wind Offshore"?: string | null
          "Wind Onshore"?: string | null
        }
        Update: {
          Anfang?: string | null
          Biomasse?: string | null
          Braunkohle?: string | null
          Datum?: string | null
          Ende?: string | null
          Erdgas?: string | null
          id?: number
          Kernenergie?: string | null
          Photovoltaik?: string | null
          Pumpspeicher?: string | null
          "Sonstige Erneuerbare"?: string | null
          "Sonstige Konventionelle"?: string | null
          Steinkohle?: string | null
          Wasserkraft?: string | null
          "Wind Offshore"?: string | null
          "Wind Onshore"?: string | null
        }
      }
      Stromverbrauch: {
        Row: {
          Anfang: string | null
          Datum: string | null
          Ende: string | null
          Gesamt: string | null
          id: number
          Pumpspeicher: string | null
          Residuallast: string | null
        }
        Insert: {
          Anfang?: string | null
          Datum?: string | null
          Ende?: string | null
          Gesamt?: string | null
          id: number
          Pumpspeicher?: string | null
          Residuallast?: string | null
        }
        Update: {
          Anfang?: string | null
          Datum?: string | null
          Ende?: string | null
          Gesamt?: string | null
          id?: number
          Pumpspeicher?: string | null
          Residuallast?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
