import { useAppDispatch, useAppSelector } from '../../hooks/useRedux'
import { Icity, Isport } from '../../interfaces'
import { resetSelectedCountryIndexes } from '../../store/slices/selectedCountrySlice'
import { setSelectedSport } from '../../store/slices/selectedSportSlice'
import { resetTournamentEvents } from '../../store/slices/sportsSlice'
import styles from './allSports.module.scss'

export const AllSports = () => {
  const dispatch = useAppDispatch()

  const sports = useAppSelector(
    (state) => state.allInformationAboutSports.sports
  )

  const selectedSportId = useAppSelector((state) => state.selectedSport.sportId)

  const handleButtonClick = (sportId: number) => {
    dispatch(setSelectedSport(sportId))
    dispatch(resetSelectedCountryIndexes())
    dispatch(resetTournamentEvents())
  }

  return (
    <section>
      <div className={styles.sports}>
        {sports.map((sport: Isport, index: number) => (
          <div
            className={`${styles.sports__block} ${
              selectedSportId === sport.Id ? styles['sports__block-active'] : ''
            }`}
            key={index}
            onClick={() => handleButtonClick(sport.Id)}
          >
            <button className={styles.sports__button}>
              <img src={`./sports/${sport.Slug}.svg`} alt='dddd' />
            </button>
            <span className={styles.sports__count}>
              {sport.Ct &&
                sport.Ct.reduce(
                  (acc: number, country: Icity) => acc + country.Trn.length,
                  0
                )}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
