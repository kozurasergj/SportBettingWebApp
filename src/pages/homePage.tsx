import { AllSports } from '../components/AllSports/AllSports'
import { Countries } from '../components/Countries/Countries'
import { Matches } from '../components/Matches/Matches'
import { Betslips } from '../components/Betslips/Betslips'

const HomePage = () => {
  return (
    <>
      <Countries />
      <Matches />
      <Betslips />
      <AllSports />
    </>
  )
}

export default HomePage
