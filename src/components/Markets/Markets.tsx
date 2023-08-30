import { addToBetslipAsync } from '../../api'
import { useAppDispatch } from '../../hooks/useRedux'
import styles from './Markets.module.scss'

export const Markets = ({ markets, keyFirstMarket }) => {
  const dispatch = useAppDispatch()

  const handleStakeClick = (Id: number, OddsValue) => {
    dispatch(addToBetslipAsync(Id, OddsValue))
  }

  return (
    <>
      <div>
        {markets[keyFirstMarket] &&
          markets[keyFirstMarket].map((stake) => (
            <button
              className={styles.stake}
              key={stake.Id}
              onClick={() => handleStakeClick(stake.Id, stake.OddsValue)}
            >
              <p>{stake.Name}</p>
              {stake.OddsValue}
            </button>
          ))}
      </div>
    </>
  )
}
