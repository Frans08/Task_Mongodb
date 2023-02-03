import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Navigation } from './components/navigation/Navigation';
import { Detail } from './pages/Detail/Detail';
import { Edit } from './pages/Edit/Edit';
import { Home } from './pages/Home/Home';
import { CreateData } from './pages/Tambah/CreateData';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navigation />}>
          <Route path='/' element={<Home/>}/>
          <Route path='/detail/:id' element ={<Detail/>}/>
          <Route path='/edit/:id' element ={<Edit/>}/>
          <Route path='/tambah' element ={<CreateData/>}/>

        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
