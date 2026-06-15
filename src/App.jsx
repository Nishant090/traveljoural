import Header from './components/Header'
import Entry from './components/Entry'
import './App.css'
import { destinations } from './components/Destinations'

function App() {
  const entryEl = destinations.map((des) => {
    return <Entry
      key={des.id}
      {...des}

    />
  })



  return (
    <>
      <Header />
      {entryEl}
    </>
  )
}

export default App
