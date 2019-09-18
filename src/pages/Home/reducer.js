import { 
   GET_PLANET,
   GET_VEHICLES,
   PLANET_RECEIVED,
   VECHILES_RECEIVED,
   TOKEN_RECEIVED,
   FIND_COMPLETE,
   TIME_TAKEN
} from './actionTypes'

const reducer = (state = {}, action) => {
    switch (action.type) {
       case GET_PLANET:
      case GET_VEHICLES:
          return { ...state };
       case PLANET_RECEIVED:
          return { ...state, planets: action.payload  };
       case VECHILES_RECEIVED:
          return { ...state, vehicles: action.payload  };
       case TOKEN_RECEIVED:
            return { ...state, ...action.payload, isAuthorized: true  };
       case FIND_COMPLETE:
               return { ...state, ...action.payload  };
       case TIME_TAKEN:
         return { ...state, timeTaken: action.payload };
       default:
          return state;
     }
  };

export default reducer;