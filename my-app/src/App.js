
import './App.css';

function App() {
  return (
    <div className="app">
      <form>
        <input type="search" placeholder="Enter City" className="search"/>
        <input type="submit" value="Search" className="button" />
      </form>
      <p className="details">
        Thursday 12:42, few clouds
        <div>Humidity:84%</div>
        <div>Wind:5.14km/h</div>
      </p>
      <div className="container">
      <div className="emoji">⛅</div>
      <div>68°c</div>
      </div>
    </div>
  );
}

export default App;
