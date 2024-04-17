import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import CityEventsChart from './components/CityEventsChart';
import EventGenresChart from './components/EventGenresChart';
import { useEffect, useState } from 'react';
import { extractLocations, getEvents } from './api';
// import { InfoAlert, ErrorAlert, WarningAlert } from './components/Alert';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Image from 'react-bootstrap/Image';
import './bootstrap.min.css'

// CSS
import './App.css';

const App = () => {
   const [allLocations, setAllLocations] = useState([]);
   const [currentNOE, setCurrentNOE] = useState(32);
   const [events, setEvents] = useState([]);
   const [currentCity, setCurrentCity] = useState("See all cities");
   const [infoAlert, setInfoAlert] = useState("");
   const [errorAlert, setErrorAlert] = useState("");
   const [warningAlert, setWarningAlert] = useState("");

   const fetchData = async () => {
      const allEvents = await getEvents();
      const filteredEvents =
         currentCity === "See all cities" ?
            allEvents :
            allEvents.filter(event => event.location === currentCity)
      setEvents(filteredEvents.slice(0, currentNOE));
      setAllLocations(extractLocations(allEvents));
   }

   useEffect(() => {
      if (navigator.onLine) {
         setWarningAlert('');
      }
      else {
         setWarningAlert('You are offline. Therefore the events you are seeing might not be up to date.')
      }
      fetchData();
   }, [currentCity, currentNOE]);

   return (
      <Container className="App">
         <Row>
            <Col>
               {/*   Alerts via OOP class syntax
               <div className="alerts-container">
                  {infoAlert.length ? <InfoAlert text={infoAlert} /> : null}
                  {errorAlert.length ? <ErrorAlert text={errorAlert} /> : null}
                  {warninglert.length ? <WarningAlert text={errorAlert} /> : null}
               </div>
               */}
               {infoAlert.length ? <Alert variant='primary' className='alert' dismissible>   {infoAlert}  </Alert> : null}
               {errorAlert.length ? <Alert variant='danger' className='alert'> {errorAlert} </Alert> : null}
               {warningAlert.length ? <Alert variant='warning' className='alert' dismissible> {warningAlert} </Alert> : null}

               <Image
                  src='meet_logo.png'
                  alt='meet logo'
                  className='my-5 logo'
               />

               <CitySearch
                  allLocations={allLocations}
                  setCurrentCity={setCurrentCity}
                  setInfoAlert={setInfoAlert}
                  setErrorAlert={setErrorAlert}
               />
            </Col>
         </Row>
         <Row>
            <Col>
               <NumberOfEvents
                  setCurrentNOE={setCurrentNOE}
                  setErrorAlert={setErrorAlert}
               />
            </Col>
         </Row>
         <Row className='mt-3'>
            <Col xs={12} md={6} className='charts-container'>
               <EventGenresChart events={events} />
            </Col>
            <Col xs={12} md={6} className='charts-container'>
               <CityEventsChart allLocations={allLocations} events={events} />
            </Col>
         </Row>
         <Row className='mt-5'>
            <Col>
               <EventList events={events} />
            </Col>
         </Row>
      </Container>
   );
}

export default App;