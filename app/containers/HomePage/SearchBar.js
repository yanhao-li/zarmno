import React from 'react';
import Autosuggest from 'react-autosuggest';

const restaurants = [
        {
            name: 'A1',
            year: 1972
        },
        {
            name: "A2",
            year: 1983
        },
        {
            name: "B1",
            year: 1965
        },
        {
            name: "B2",
            year: 1933
        },
        {
            name: "C1",
            year: 1922
        },
        {
            name: "C2",
            year: 1999
        }
];

const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : restaurants.filter(restaurant =>
    restaurant.name.toLowerCase().slice(0, inputLength) === inputValue
  );
};

const getSuggestionValue = suggestion => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div>
    {suggestion.name}
  </div>
);


export default class SearchBar extends React.Component {
    constructor() {
        super();

        // Autosuggest is a controlled component.
        // This means that you need to provide an input value
        // and an onChange handler that updates this value (see below).
        // Suggestions also need to be provided to the Autosuggest,
        // and they are initially empty because the Autosuggest is closed.
        this.state = {
          value: '',
          suggestions: []
        };
      }

      onChange = (event, { newValue }) => {
        this.setState({
          value: newValue
        });
      };

      // Autosuggest will call this function every time you need to update suggestions.
      // You already implemented this logic above, so just use it.
      onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
          suggestions: getSuggestions(value)
        });
      };

      // Autosuggest will call this function every time you need to clear suggestions.
      onSuggestionsClearRequested = () => {
        this.setState({
          suggestions: []
        });
      };


    render(){
        const { value, suggestions } = this.state;

       // Autosuggest will pass through all these props to the input element.
       const inputProps = {
         placeholder: 'Restaurants name',
         value,
         onChange: this.onChange
       };
        return(
            <form className="form-inline">
                <Autosuggest
                    suggestions={suggestions}
                    onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                    onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                    getSuggestionValue={getSuggestionValue}
                    renderSuggestion={renderSuggestion}
                    inputProps={inputProps}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}
