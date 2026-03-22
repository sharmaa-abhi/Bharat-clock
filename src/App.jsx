import ClockHeading from './components/ClockHeading'
import ClockMotive from './components/ClockMotive'
import CurrentTime from './components/CurrrentTime'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'

function App() {
  return (
    <div id="main-div">
      <center>
        <ClockHeading></ClockHeading>
        <ClockMotive></ClockMotive>
        <CurrentTime></CurrentTime>
      </center>
    </div>
  )
}

export default App
