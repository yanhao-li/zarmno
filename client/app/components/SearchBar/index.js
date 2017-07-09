import React from 'react';
import Autosuggest from 'react-autosuggest';
import LinearProgress from 'material-ui/LinearProgress';
import {searchByNameOrId} from 'actions/searchActions';
import SpinKit from 'components/SpinKit';
import styles from './index.css';
import {browserHistory} from 'react-router';

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
    if(inputValue.length > 0){
      searchByNameOrId(inputValue).then(
        restaurants => {
          if(restaurants.length > 0){
            this.setState({
              suggestions: restaurants,
              isLoading: false
            })
          } else {
            this.setState({
              suggestions: [],
              isLoading: false
            })
          }
        }
      )
    }
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

  onSuggestionHighlighted = (suggetion) => {
    id = suggestion.id;

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
      <div className={styles.indicator}>
        {!this.state.isLoading && this.state.value.length > 0 && this.state.suggestions.length == 0 && (<div className={styles['no-result']}>No result</div>)}
      </div>
    </div>
  )

  onSuggestionSelected = (event, { suggestion }) => {
    browserHistory.push('/restaurant/' + suggestion.id);
  }

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
        {this.state.isLoading && <LinearProgress mode="indeterminate" />}
        <Autosuggest
          theme={styles}
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={this.getSuggestionValue}
          renderSuggestion={this.renderSuggestion}
          inputProps={inputProps}
          renderInputComponent = {this.renderInputComponent}
          onSuggestionSelected = {this.onSuggestionSelected}
        />
      </div>
    );
  }
}
