import React from 'react';
import { render } from 'react-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      searchValue: 'Keyword',
      tagValue: 'Tags',
      difficultyValue: 'Difficulty'
    };

  }

  render() {

    return (
      <div className = 'search-container'>
        <div className = 'search-form'>
          <h3 className= "search-text">Search </h3>
          <FormGroup className="mb-4">
            <Label for="searchNotes" className="note-font-1"></Label>
            <Input type="text" name="searchNotes" className="search-input"id="searchNotes" value={this.state.searchValue} />
          </FormGroup>
          <FormGroup className="mb-4">
            <Label for="searchTags" className="note-font-1"></Label>
            <Input type="text" name="searchTags" className="search-input" id="searchTags" value={this.state.tagValue} />
          </FormGroup>
          <FormGroup className="mb-4">
            <Label for="searchTags" className="note-font-1"></Label>
            <Input type="text" name="searchTags" className="search-input" id="searchTags" value={this.state.difficultyValue} />
          </FormGroup>
        </div>
        <i className="fas fa-times fa-2x"></i>
      </div>
    );

  }
}
