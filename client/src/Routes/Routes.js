import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import PrivateRoute from './PrivateRoute';

import {
    Home,
    News,
    Dataset,
    Presentation,
    Research,
    Publications,
    Equipments,
    Software,
    Contact,
    People,
    Member,
    Position,
    Social,
} from '../Components/index';

const PublicRoutes = () => {
  return(
    <Router>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path='/news' element={<News/>} />
            <Route path='/datasets' element={<Dataset/>}/>
            <Route path='/presentations' element={<Presentation/>}/>
            <Route path='/research' element={<Research/>}/>
            <Route path='/publications' element={<Publications/>}/>
            <Route path='/equipments' element={<Equipments/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/people' element={<People/>}/>
            <Route path='/people/:token' element={<Member/>}/>
            <Route path='/positions' element={<Position/>}/>
            <Route path='/social' element={<Social/>}/>
            <Route path='/software' element={<Software/>}/>
            {/* <Route path='/contact' exact component={Contact} /> */}
            {/* <UserRoute path='/pipeline-builder' exact component={BuildPipeline} /> */}
            {/* <UserRoute path='/user/profile' exact component={Profile} /> */}
            {/* <UserRoute path='/edit/:type/:id' component={EditMain} /> */}
        </Routes>
    </Router>
  );
}

export default PublicRoutes;
