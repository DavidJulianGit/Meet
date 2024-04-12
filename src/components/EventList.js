import Event from "./Event";
import { ListGroup, Row, Col } from 'react-bootstrap';

const EventList = ({ events }) => {
   return (
      <ListGroup role='list' id="event-list ">
         {events ?
            events.map(event => <Event key={event.id} event={event} />) :
            null}
      </ListGroup>
   );
}

export default EventList;