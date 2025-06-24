import './App.css';
import Registration from "./Registration/Registration";
import Coach from "./CoachInterface/Coach";

function App() {
  document.title="FitLink"
  return (
      <section className='app'>
          {/*<Registration/>*/}
          <Coach/>
      </section>
  );
}

export default App;
