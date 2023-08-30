import styles from './Betslip.module.scss'

export const Betslip = ({ betslip }) => {
  return (
    <>
      {betslip.Matches &&
        betslip.Matches.map((match, indexMatch) => (
          <div key={indexMatch}>
            {match.Teams}
            {match.Odds &&
              match.Odds.map((odd, indexOdd) => (
                <div key={indexOdd}>
                  <p>событие {odd.Market} </p>
                  <p> коефициент {odd.Value}</p>
                </div>
              ))}
          </div>
        ))}
    </>
  )
}
