import './App.css';
import Header from './Components/Header'
import Cards from './Components/Cards'
import Data from './Data'

const ofcard = Data.map(item => {
  return (
    <Cards 
      key={item.id}
      image={item.image}
      country={item.country}
      location={item.location}
      date={item.date}
      description={item.description}
    />
  )
})

function App() {
  return (
    <div className="App">
      <Header />
      {ofcard}
    </div>
  );
}

export default App;
