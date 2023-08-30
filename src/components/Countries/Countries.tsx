import { useAppDispatch, useAppSelector } from '../../hooks/useRedux'
import { Icity, Isport, Itournament } from '../../interfaces'
import { toggleSelectedCountryIndex } from '../../store/slices/selectedCountrySlice'
import { Tournaments } from '../Tournaments/Tournaments'
import styles from './Countries.module.scss'

export const Countries = () => {
  const dispatch = useAppDispatch()
  const selectedSportId = useAppSelector((state) => state.selectedSport.sportId)
  const sports = useAppSelector((state) => state.sports)
  const selectedCountryIndexes = useAppSelector(
    (state) => state.selectedCountry.selectedCountryIndexes
  )

  const selectedSport = sports.find(
    (sport: Isport) => sport.Id === selectedSportId
  )

  const handleCountryClick = (
    event: React.MouseEvent<HTMLLIElement>,
    countryIndex: number
  ) => {
    dispatch(toggleSelectedCountryIndex(countryIndex))
  }

  return (
    <section>
      <div className={styles.countries}>Countries</div>
      {selectedSport && (
        <ul>
          {selectedSport.Ct.map((country: Icity, countryIndex: number) => (
            <li
              key={countryIndex}
              className={styles.country}
              onClick={(event) => handleCountryClick(event, countryIndex)}
            >
              {country.N}
              {selectedCountryIndexes.includes(countryIndex) && (
                <ul>
                  {country.Trn.map(
                    (tournament: Itournament, tournamentIndex: number) => (
                      <Tournaments
                        tournament={tournament}
                        key={tournamentIndex}
                      />
                    )
                  )}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
