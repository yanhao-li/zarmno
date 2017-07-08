import React from 'react';
import Autosuggest from 'react-autosuggest';
import FlatButton from 'material-ui/FlatButton';
import {searchByNameOrId} from 'actions/searchActions';
import SpinKit from 'components/SpinKit';
import styles from './index.css';

export default class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      suggestions: [],
      isLoading: false
    };
  }

  getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    this.setState({
        isLoading: true
    });
    searchByNameOrId(inputValue).then(
      restaurants => {
        this.setState({
          suggestions: restaurants,
          isLoading: false
        })
      }
    )
  };

  getSuggestionValue = (suggestion) => suggestion.name;

  // Use your imagination to render suggestions.
  renderSuggestion = (suggestion) => (
    <div className="suggestion-list">
      <p className={styles.suggestionName}>
        {suggestion.name}
      </p>
      <p className={styles.suggestionCode}>
        {suggestion.id}
      </p>
    </div>
  );

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue,
    });
  };

      // Autosuggest will call this function every time you need to update suggestions.
      // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.getSuggestions(value);
  };

      // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  renderInputComponent = (inputProps) => (
    <div>
      <input {...inputProps} />
      {this.state.isLoading && <SpinKit />}
    </div>
  )


  render() {
    const { value, suggestions } = this.state;

       // Autosuggest will pass through all these props to the input element.
    const inputProps = {
      placeholder: 'Search with restaurant name or 8 digits code ',
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
          getSuggestionValue={this.getSuggestionValue}
          renderSuggestion={this.renderSuggestion}
          inputProps={inputProps}
          renderInputComponent = {this.renderInputComponent}
        />
        <FlatButton label="SEARCH" backgroundColor="#EC407A" hoverColor="#F06292" primary className={styles.searchBtn} />
      </div>
    );
  }
}
