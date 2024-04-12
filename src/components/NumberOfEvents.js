import { useState } from "react";
import { Form, Button, InputGroup, Row, Col } from 'react-bootstrap';
import { XLg } from 'react-bootstrap-icons';


const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
   const defaultNOE = '32';
   const [numberOfEvents, setNumberOfEvents] = useState(defaultNOE);

   const handleInputChange = (event) => {
      const value = event.target.value;

      setNumberOfEvents(value);

      // ErrorAlert
      let infoText;
      if (isNaN(value) || value <= 0) {
         infoText = "Only positive numbers are allowed."
      }
      else {
         infoText = "";
         setCurrentNOE(value);
      }
      setErrorAlert(infoText);
   }
   const resetNOE = () => {
      setNumberOfEvents(defaultNOE);
      setCurrentNOE(defaultNOE);
      setErrorAlert('');
   }
   return (
      <Row id="number-of-events">
         <Col className="d-flex flex-column align-items-center">
            <Form.Group >
               <Form.Label htmlFor="number-of-events-input" className="fw-medium mb-1">Number of Events</Form.Label>
               <InputGroup className="px-0 mb-4">
                  <Form.Control
                     type="text"
                     className="number-of-events-input"
                     value={numberOfEvents}
                     onChange={handleInputChange}
                  />
                  <Button
                     variant="outline-primary"
                     onClick={resetNOE}
                     disabled={numberOfEvents === defaultNOE}
                  >
                     <XLg />
                  </Button>
               </InputGroup>
            </Form.Group>
         </Col>
      </Row>
   );
}

export default NumberOfEvents;