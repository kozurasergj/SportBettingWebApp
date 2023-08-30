import { useAppDispatch, useAppSelector } from '../../hooks/useRedux'
import { removeFromBetslip } from '../../store/slices/betslipsSlice'
import { Betslip } from '../Betslip/Betslip'
import styles from './Betslips.module.scss'

export const Betslips = () => {
  const betslips = useAppSelector((state) => state.betslips)

  const dispatch = useAppDispatch()

  const handleRemoveFromBetslip = (indexBetslip: number) => {
    dispatch(removeFromBetslip(indexBetslip))
  }
  
  return (
    <>
      <div className={styles.betslips}>
        {betslips &&
          betslips.map((betslip, indexBetslip: number) => (
            <div key={indexBetslip}>
              <button onClick={() => handleRemoveFromBetslip(indexBetslip)}>
                delete
              </button>
              <Betslip betslip={betslip} />
            </div>
          ))}
      </div>
    </>
  )
}
