import './App.css';
import Registration from "./Registration/Registration";
import Coach from "./CoachInterface/Coach";
import Player from "./PlayerInterface/Player";

function App() {
  document.title="FitLink"
  return (
      <section className='app'>
          {/*<Registration/>*/}
          {/*<Coach/>*/}
          <Player/>
      </section>
  );
}

export default App;
