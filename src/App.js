import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SelectionScreen from './components/SelectionScreen';
import Game from './components/Game';
import GameHistory from './components/GameHistory';
import {createStore} from 'redux';
import { gameReducer, initialState } from './reducers/gameReducer';
const store = createStore(gameReducer, initialState);

function App() {
  return (
   <div className='app'>
    <Provider store={store}>
    <Router>
      <Routes>
        <Route exact path="/" element={<SelectionScreen/>}/>
        <Route path="/game" element={<Game/>} />
        <Route path="/history" element={<GameHistory/>} />
      </Routes>
    </Router>
  </Provider>
    </div>
  );
}

export default App;
