import { generateWeekDays } from '../../helpers'
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux'
import {
  deleteSelectedDayIndex,
  setSelectedDayIndex,
} from '../../store/slices/selectedDaysSlice'
import styles from './WeekDays.module.scss'

export const WeekDays = () => {
  const daysOfWeek = generateWeekDays()
  const dispatch = useAppDispatch()
  const selectedDaysIndexes = useAppSelector((state) => state.selectedDays)

  const handleButtonClick = (index: number) => {
    if (selectedDaysIndexes.includes(index)) {
      dispatch(deleteSelectedDayIndex(index))
    } else {
      dispatch(setSelectedDayIndex(index))
    }
  }

  return (
    <section className={styles.days}>
      {daysOfWeek.map((day, index) => (
        <button
          key={index}
          className={`${styles.days__button} ${
            selectedDaysIndexes.includes(index)
              ? styles['days__button-active']
              : ''
          }`}
          onClick={() => handleButtonClick(index)}
        >
          {day}
        </button>
      ))}
    </section>
  )
}
