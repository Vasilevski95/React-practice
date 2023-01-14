import React, {useState, useEffect} from 'react';
import './App.css';
import Tours from './komponente/Tours.jsx'
import Loading from './komponente/Loading'

function App() {

  const url = 'https://course-api.com/react-tours-project'

  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  const removeItem = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)

    //newTours is equal to tours and then filter method where we say
    //If the tour.id does match, its gonna be placed in the new tours array
    //If the id mathes whatever I am passing in, that means that that is the tour that i want to remove
    //If tour.id does not match the id than i want to return to the newTours 
  } 

  const fetchData = async () => {
    try {
        const response = await fetch(url);
        const tours = await response.json();
        setLoading(false)
        setTours(tours)
        console.log(tours);
		} catch (error) {
        setLoading(false)
        console.log("error", error);
		}
};

useEffect(() => {
  fetchData()

}, [])


  if(loading) {
    return (
      <Loading />
    )
  }
  //If loading is true then we are loading

  return (

    <main className='App'><Tours tours={tours} removeItem={removeItem} /></main>
    //Tours prop is equal to my tours state value 

  )
}

export default App;


//Zadatak mi je da prvo napravim loading, pa onda fetch da izadju tours. (Znaci useState za loading, fetch data kao funkcija i useEffect da se renreruje na pocetku)
//Drugi zadatak da napravim logiku za read more i show less (useState, ternary i button)
//Treci zadatak je da napravim not interested da skidam jedan po jedan clan niza
