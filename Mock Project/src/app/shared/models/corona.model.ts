export interface Corona {
    provincestate: string,
    countryregion: string,
    lastupdate: string,
    confirmed: number,
    deaths: number,
    recovered: number,
    location: {
      lat: number,
      lng: number
    },
    countrycode: {
      iso2: string,
      iso3: string
    }
}
