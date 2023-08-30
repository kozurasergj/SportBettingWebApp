import { Dispatch } from 'redux'
import { IfetchHeaders } from '../interfaces'

import { addToBetslip } from '../store/slices/betslipsSlice'
import { setSports, setTournamentEvents } from '../store/slices/sportsSlice'

const API_URL = 'https://sportsbook-api.lasworks.com/api'

const fetchHeaders: IfetchHeaders = {
  SiteId: 1,
  Lang: 'en',
  Accept: '*/*',
  'Content-Type': 'application/json',
}

export const fetchSports = () => async (dispatch: Dispatch) => {
  const requestData = {
    Interval: 5,
  }

  const response = await fetch(`${API_URL}/prematch/menu`, {
    method: 'POST',
    headers: fetchHeaders,
    body: JSON.stringify(requestData),
  })

  const { S } = await response.json()
  dispatch(setSports(S))
}

export const fetchTournamentEvents =
  (tournamentId: number) => async (dispatch: Dispatch) => {
    const requestData = {
      Interval: 5,
      MarketId: null,
      Mobile: true,
      TournamentId: tournamentId,
    }

    const response = await fetch(`${API_URL}/prematch/tournament`, {
      method: 'POST',
      headers: fetchHeaders,
      body: JSON.stringify(requestData),
    })

    const data = await response.json()
    dispatch(setTournamentEvents(data))
  }

export const addToBetslipAsync =
  (outcomeId: number, ticket) => async (dispatch: Dispatch) => {
    const requestData = {
      Id: outcomeId,
      Ticket: ticket,
      Type: 'O',
    }

    const response = await fetch(`${API_URL}/betslip`, {
      method: 'POST',
      headers: fetchHeaders,
      body: JSON.stringify(requestData),
    })

    const data = await response.json()
    dispatch(addToBetslip(data))
  }
