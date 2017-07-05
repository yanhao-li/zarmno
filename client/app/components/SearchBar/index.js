import React from 'react';
import Autosuggest from 'react-autosuggest';
import { getRestaurantsList } from 'actions/RestaurantsListActions';
import FlatButton from 'material-ui/FlatButton';
import styles from './index.css';

let restaurants;
const getSuggestions = (value) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
  return inputLength === 0 ? [] : restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().slice(0, inputLength) === inputValue
  );
};

const getSuggestionValue = (suggestion) => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = (suggestion) => (
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
      suggestions: [],
    };
  }

  componentDidMount() {
    getRestaurantsList.then(
      (res) => {
        restaurants = res.data.restaurants;
      }
    );
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue,
    });
  };

      // Autosuggest will call this function every time you need to update suggestions.
      // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value),
    });
  };

      // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };


  render() {
    const { value, suggestions } = this.state;

       // Autosuggest will pass through all these props to the input element.
    const inputProps = {
      placeholder: 'Search',
      value,
      onChange: this.onChange,
    };

    return (
      <div className={styles.searchBar}>
        <Autosuggest
          theme={styles}
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
        />
        <FlatButton label="SEARCH" backgroundColor="#EC407A" hoverColor="#F06292" primary className={styles.searchBtn} />
      </div>
    );
  }
}
