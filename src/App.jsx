import Header from './components/Header'
import Entry from './components/Entry'
import './App.css'
import { destinations } from './components/Destinations'

function App() {
  const entryEl = destinations.map((des) => {
    return <Entry
      img={[{
        src: des.img[0].src,
        alt: des.img[0].alt
      }]}
      country={des.country}
      mapUrl={des.mapUrl}
      title={des.title}
      date={des.date}
      desc={des.desc}

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
