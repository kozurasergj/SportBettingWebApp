import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { fetchSports } from './api'
import Page from './components/Page'
import { useAppDispatch } from './hooks/useRedux'
import Highlights from './pages/highlights'
import HomePage from './pages/homePage'
import LiveBets from './pages/liveBets'
import Sports from './pages/sports'
import TopMatches from './pages/topMatches'

const App = () => {
  const dispatch = useAppDispatch()
  // const preMatchSports = useAppSelector((state) => state.sports.preMatchSports)
  // const tournamentEvents = useAppSelector(
  //   (state) => state.sports.tournamentEvents
  // )

  useEffect(() => {
    dispatch(fetchSports())
  }, [dispatch])

  // const handleTournamentEvents = (tournamentId) => {
  //   dispatch(fetchTournamentEvents(tournamentId))
  // }

  // const handleAddToBetslip = (outcomeId, ticket) => {
  //   dispatch(addToBetslipAsync(outcomeId, ticket))
  // }

  return (
    <>
      <Page>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/livebets' element={<LiveBets />} />
          <Route path='/sports' element={<Sports />} />
          <Route path='/highlights' element={<Highlights />} />
          <Route path='/topmatches' element={<TopMatches />} />
        </Routes>
      </Page>
    </>
  )
}

export default App
