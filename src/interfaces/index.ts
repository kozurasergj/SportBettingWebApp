export interface IfetchHeaders {
  SiteId: number
  Lang: string
  Accept: string
  'Content-Type': string
}

export interface Isport {
  Id: number
  N: string
  C: number
  Ct: Icity[]
  Slug: string
  Collapsed: boolean
}

export interface Icity {
  Id: number
  N: string
  I: string
  C: number
  Slug: string
  Trn: Itournament[]
  Collapsed: boolean
}

export interface Itournament {
  Id: number
  N: string
  C: number
  RefTournamentId: number
  Slug: string
  T: string
  IsFavorite: boolean
}
