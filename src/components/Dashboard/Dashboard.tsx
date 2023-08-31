import { AllSports } from '../AllSports/AllSports'
import { Betslips } from '../Betslips/Betslips'
import { Countries } from '../Countries/Countries'
import { Matches } from '../Matches/Matches'
import { WeekDays } from '../WeekDays/WeekDays'
import styles from './Dashboard.module.scss'

export const Dashboard = () => {
  return (
    <section className={styles.dashboard}>
      <div className={styles.dashboard__block}>
        <Countries />
        <Matches />
        <WeekDays />
        <AllSports />
      </div>
      <div className={styles.dashboard__betslips}>
        <Betslips />
      </div>
    </section>
  )
}
