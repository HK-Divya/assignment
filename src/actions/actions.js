export const addSymbol = (row, position, symbol) => ({
    type: 'ADD_SYMBOL',
    symbol,
    row,
    position
  });
  
  export const startAgain = () => ({
    type: 'START_AGAIN'
  });
  export const setPlayer = (player) => ({
    type: 'SET_PLAYER',
    player,
  });
  export const saveHistory=(gamestatus)=>({
    type:'SAVE_HISTORY',
    gamestatus
  })