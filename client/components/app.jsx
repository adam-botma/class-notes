import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from './main-page';
import Notebook from './notebook';
import Note from './note';
import Flashcards from './flashcards';
import FlashcardsReview from './flashcards-review';
import NotebooksList from './notebook-list';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      isLoading: true
    };
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={MainPage}/>
          <Route path="/notebooks-list" exact component={NotebooksList} />
          <Route path="/notebook/:notebookId" exact component={Notebook}/>
          <Route path="/flashcards" exact component={Flashcards}/>
          <Route path="/flashcards/create" exact component={Flashcards}/>
          <Route path="/notes/create" component={Note}/>
          <Route path="/notes/:noteId" component={Note} />
          <Route path="/flashcards-review/:fcDeckId" exact component={FlashcardsReview}/>
        </Switch>
      </Router>
    );
  }
}
