import { fetchTournamentEvents } from '../../api'
import { generateRandomNumber } from '../../helpers'
import { useAppDispatch } from '../../hooks/useRedux'
import { Itournament } from '../../interfaces'
import styles from './Tournaments.module.scss'

interface ITournamentsProps {
  tournament: Itournament
  key: number
}

export const Tournaments = ({ tournament }: ITournamentsProps) => {
  const dispatch = useAppDispatch()

  const handleTournamentClick = () => {
    dispatch(fetchTournamentEvents(tournament.Id))
  }

  return (
    <>
      <li className={styles.tournament} onClick={handleTournamentClick}>
        <span className={styles.tournament__name}>{tournament.N} </span>
        <span className={styles.tournament__count}> {generateRandomNumber()}</span>
      </li>
    </>
  )
}
