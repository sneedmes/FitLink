import './App.css';
import Registration from "./components/Registration/Registration";
import Coach from "./components/CoachInterface/Coach";

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
