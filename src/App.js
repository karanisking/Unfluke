import './App.css';
import Header from './Header/header';
import Leaderboard from './Leaderboard/Leaderboard';
import Main from './Main/main'

function App() {
  return (
    <div className="container">
       <Header />
       <Leaderboard />
       <Main />
    </div>
  );
}

export default App;
