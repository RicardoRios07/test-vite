import React from 'react';
import CharacterList from './assets/utils/CharacterList';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

const App = () => {
  return (
    <div className='card-grid'>
      <CharacterList />
    </div>
  );
};

export default App;
