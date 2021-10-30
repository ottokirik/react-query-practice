import { Switch, Route } from 'react-router-dom';
import { NavBar } from './components';

import { BooksList, CreateBook, UpdateBook } from './page';

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <BooksList />
        </Route>
        <Route path="/create-book">
          <CreateBook />
        </Route>
        <Route path="/update-book/:id">
          <UpdateBook />
        </Route>
      </Switch>
    </>
  );
}

export default App;
