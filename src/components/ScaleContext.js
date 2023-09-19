import React, { createContext, useReducer } from 'react';

// Initial state for the counter
const initialState = { unlikelyRate: '#FF0000', 
veryLikelyRate:'#00FF00', neutralRate:'#0000FF', showLabel:true
};

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_UNLIKELY_RATE':
      return {
        ...state,
        unlikelyRate: action.payload,
      };
    case 'SET_VERY_LIKELY_RATE':
      return {
        
          ...state,
          veryLikelyRate: action.payload
        
      };
      case 'SET_NEUTRAL_RATE':
      return {
        ...state,
      
          neutralRate: action.payload,
        
      };
   
    case 'SET_LABEL':
      return {
        ...state,
          showLabel: action.payload,
      };  
   
    default:
      return {
        ...state,
        ...action.payload};
  }
};

export default reducer;


// Create the context
const ScaleContext = createContext();

// Provider component
const ScaleProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ScaleContext.Provider value={{ state, dispatch }}>
      {children}
    </ScaleContext.Provider>
  );
};

export { ScaleContext, ScaleProvider };
