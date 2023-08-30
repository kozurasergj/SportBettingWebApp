import { formatMatchDate } from '../../helpers'
import { useAppSelector } from '../../hooks/useRedux'
import { Markets } from '../Markets/Markets'
import styles from './Matches.module.scss'

export const Matches = () => {
  const selectedTournament = useAppSelector((state) => state.tournaments)

  return (
    <>
      <div className={styles.matches}>
        {selectedTournament.Matches &&
          selectedTournament.Matches.map((matches) => (
            <div key={matches.Id}>
              <span>
                {matches.Hn} ------- {matches.An}
              </span>
              <p>{formatMatchDate(matches.Md)}</p>
              <Markets
                markets={matches.Markets}
                keyFirstMarket={selectedTournament.HP[0]}
              />
            </div>
          ))}
      </div>
    </>
  )
}
