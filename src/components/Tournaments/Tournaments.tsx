import { fetchTournamentEvents } from '../../api'
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
      <li className={styles.trn} onClick={handleTournamentClick}>
        {tournament.N}
      </li>
    </>
  )
}
