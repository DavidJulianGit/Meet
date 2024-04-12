import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import { useEffect, useState } from 'react';
import { extractLocations, getEvents } from './api';
import { InfoAlert, ErrorAlert } from './components/Alert';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Image from 'react-bootstrap/Image';

//Bootstrap
import './bootstrap.min.css'
import './App.css';

const App = () => {
   const [allLocations, setAllLocations] = useState([]);
   const [currentNOE, setCurrentNOE] = useState(32);
   const [events, setEvents] = useState([]);
   const [currentCity, setCurrentCity] = useState("See all cities");
   const [infoAlert, setInfoAlert] = useState("");
   const [errorAlert, setErrorAlert] = useState("");

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
      fetchData();
   }, [currentCity, currentNOE]);

   return (
      <Container className="App">
         <Row>
            <Col>
               {/*
               <div className="alerts-container">
                  {infoAlert.length ? <InfoAlert text={infoAlert} /> : null}
                  {errorAlert.length ? <ErrorAlert text={errorAlert} /> : null}
               </div>
               */}
               {infoAlert.length ? <Alert variant='primary' className='alert'>   {infoAlert}  </Alert> : null}
               {errorAlert.length ? <Alert variant='danger' className='alert'> {errorAlert} </Alert> : null}
               <Image
                  src='./meet/img/meet_logo.png'
                  alt='meet logo'
                  className='my-5' />
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
         <Row>
            <Col>
               <EventList events={events} />
            </Col>
         </Row>
      </Container>
   );
}

export default App;