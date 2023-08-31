import { stringToLowerCase } from '../../helpers'
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux'
import { Icity, Isport, Itournament } from '../../interfaces'
import { toggleSelectedCountryIndex } from '../../store/slices/selectedCountrySlice'
import { toggleSelectedDayIndex } from '../../store/slices/selectedDateSlice'
import { Tournaments } from '../Tournaments/Tournaments'
import styles from './Countries.module.scss'

export const Countries = () => {
  const dispatch = useAppDispatch()
  const selectedSportId = useAppSelector((state) => state.selectedSport.sportId)
  const sports = useAppSelector((state) => state.sports)
  const selectedCountryIndexes = useAppSelector(
    (state) => state.selectedCountry.selectedCountryIndexes
  )

  const selectedButtonIndexes = useAppSelector((state) => state.selectedDate)

  const selectedSport = sports.find(
    (sport: Isport) => sport.Id === selectedSportId
  )

  const handleCountryClick = (countryIndex: number) => {
    dispatch(toggleSelectedCountryIndex(countryIndex))
  }

  const buttons = [
    { label: 'All' },
    { label: 'Today' },
    { label: ' 3 Hour' },
    { label: ' 3 Day' },
  ]

  const handleButtonClick = (buttonIndex: number) => {
    dispatch(toggleSelectedDayIndex(buttonIndex))
  }

  return (
    <section className={styles.countries}>
      <div className={styles.countries__date}>
        {buttons.map((button, indexButton: number) => (
          <button
            className={`${styles.countries__button}
              ${
                selectedButtonIndexes.includes(indexButton) &&
                styles['countries__button-active']
              }`}
            onClick={() => handleButtonClick(indexButton)}
          >
            {button.label}
          </button>
        ))}
      </div>
      <div className={styles.countries__heading}>
        <img src='./countries/countri.svg' alt='countri images' />
        <h2 className={styles.countries__text}>Countries</h2>
      </div>
      {selectedSport && (
        <ul className={styles.countries__list}>
          {selectedSport.Ct.map((country: Icity, countryIndex: number) => (
            <li
              key={countryIndex}
              onClick={() => handleCountryClick(countryIndex)}
            >
              <div className={styles.countries__country}>
                <img
                  width='20'
                  height='20'
                  src={`https://img.icons8.com/color/48/${stringToLowerCase(
                    country.N
                  )}.png`}
                  alt='images'
                />
                <p className={styles.countries__name}>{country.N}</p>
                {selectedCountryIndexes.includes(countryIndex) ? (
                  <img
                    src='./countries/arrow-top.svg'
                    alt='arrow image'
                    className={styles.countries__arrow}
                  />
                ) : (
                  <img
                    src='./countries/arrow-right.svg'
                    alt='arrow image'
                    className={styles.countries__arrow}
                  />
                )}
              </div>
              {selectedCountryIndexes.includes(countryIndex) && (
                <ul className={styles.countries__tournaments}>
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
