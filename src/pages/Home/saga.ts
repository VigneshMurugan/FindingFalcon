import { put, takeLatest, all } from 'redux-saga/effects';
import config from 'config/url_config';
import { GET_PLANET, GET_VEHICLES, FIND_FALCON, FETCH_TOKEN } from './actionTypes'
import { receivedPlanet, receivedVehicles, findFalconOutput, receivedToken, findComplete } from './actions';

function* fetchPlanets() {
    const planets = yield fetch(config.PLANET_URL).then(response => response.json());
    yield put(receivedPlanet(planets));
  }


function* getPlanet() {
    yield takeLatest(GET_PLANET, fetchPlanets)
}

function* fetchVehicles() {
  const vehicles = yield fetch(config.VEHICLE_URL).then(response => response.json());
  yield put(receivedVehicles(vehicles));
}


function* getVehicles() {
  yield takeLatest(GET_VEHICLES, fetchVehicles)
}

function* findFalcon(action: any) {
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  } 
  const result = yield fetch(config.FIND_URL,{
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(action.payload),
    headers
  }).then(response => response.json());

  yield put(findComplete(result));
}

function* getFindResult() {
  yield takeLatest(FIND_FALCON, findFalcon)
}

function* getToken() {
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

  const result = yield fetch(config.TOKEN_URL, { method:'POST', headers, body:JSON.stringify({}) })
                  .then((response) => response.json());

  yield put(receivedToken(result))
}

function* fetchToken() {
  yield takeLatest(FETCH_TOKEN, getToken)
}


export default function* rootSaga() {
    yield all([
    getPlanet(),
    getVehicles(),
    getFindResult(),
    fetchToken()
    ]);
 }