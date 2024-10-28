import Player from './components/Player.jsx';
import TimerChallnge from './components/TimerChallenge.jsx';
function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallnge title="Easy" targetTime={1}/>
        <TimerChallnge title="Not easy" targetTime={5}/>
        <TimerChallnge title="Getting tough" targetTime={10}/>
        <TimerChallnge title="Hard" targetTime={15}/>
      </div>
    </>
  );
}

export default App;
