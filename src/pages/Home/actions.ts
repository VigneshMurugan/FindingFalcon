import { 
    GET_PLANET,
    GET_VEHICLES,
    PLANET_RECEIVED,
    VECHILES_RECEIVED,
    FIND_FALCON,
    FETCH_TOKEN,
    TOKEN_RECEIVED,
    FIND_COMPLETE,
    TIME_TAKEN,
} from './actionTypes'

export const fetchToken = () => ({
    type: FETCH_TOKEN 
})

export const receivedToken = (payload: any) => ({
    type: TOKEN_RECEIVED,
    payload
})

export const getPlanet = () => ({
    type: GET_PLANET 
})

export const receivedPlanet = (payload: any) => ({
    type: PLANET_RECEIVED,
    payload
})

export const getVehicles = () => ({
    type: GET_VEHICLES 
})

export const receivedVehicles = (payload: any) => ({
    type: VECHILES_RECEIVED,
    payload
})

export const findFalconOutput = (payload: any) => ({
    type: FIND_FALCON,
    payload
})

export const findComplete = (payload: any) => ({
    type: FIND_COMPLETE,
    payload
})

export const computedTimeTaken = (payload: any) => ({
    type: TIME_TAKEN,
    payload
})