import { useState, useEffect } from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { XLg } from 'react-bootstrap-icons';

const CitySearch = ({ allLocations, setCurrentCity, setInfoAlert }) => {
   const [showSuggestions, setShowSuggestions] = useState(false);
   const [query, setQuery] = useState("");
   const [suggestions, setSuggestions] = useState([]);

   const handleInputChanged = (event) => {
      const value = event.target.value;
      const filteredLocations = allLocations ? allLocations.filter((location) => {
         return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
      }) : [];

      setQuery(value);
      setSuggestions(filteredLocations);

      // Alert
      let infoText;
      if (filteredLocations.length === 0) {
         infoText = "We can not find the city you are looking for. Please try another city."
      } else {
         infoText = ""
      }
      setInfoAlert(infoText);
   };

   useEffect(() => {
      setSuggestions(allLocations);
   }, [`${allLocations}`]);

   // A suggestion is clicked
   const handleItemClicked = (event) => {
      const value = event.target.textContent;
      setQuery(value);
      setShowSuggestions(false);
      setCurrentCity(value);
      setInfoAlert("");
   };

   // CitySearch Input is reset through x-button
   const resetCitySearch = () => {
      setQuery('');
      setShowSuggestions(false);
      setSuggestions(allLocations);
      setCurrentCity('See all cities');
      setInfoAlert('');
   }

   return (
      <div id='city-search' className="position-relative">
         <InputGroup className=" px-0 mb-3">
            <Form.Control
               className="border-primary city"
               placeholder="Search for a city"
               value={query}
               onFocus={() => setShowSuggestions(true)}
               onChange={handleInputChanged}
               role='textbox'
            />
            <Button
               variant="outline-primary"
               onClick={resetCitySearch}
               disabled={query === ''}
            >
               <XLg />
            </Button>
         </InputGroup>

         {showSuggestions &&
            <ListGroup className="suggestions" role='list'>
               {suggestions.map((suggestion) => {
                  return (
                     <ListGroup.Item
                        className=" px-0"
                        action
                        onClick={handleItemClicked}
                        key={suggestion}
                        role='listitem'
                     >
                        {suggestion}
                     </ListGroup.Item>
                  );
               })}
               <ListGroup.Item
                  className=" px-0"
                  action
                  key='See all cities'
                  onClick={handleItemClicked}
                  role='listitem'
               >
                  <b>See all cities</b>
               </ListGroup.Item>
            </ListGroup>
         }
      </div>
   )
}

export default CitySearch;