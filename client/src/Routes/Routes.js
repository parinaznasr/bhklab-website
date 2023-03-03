import React, {useContext} from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthContext } from '../hooks/Contexts';

import {
    Home,
    Dataset,
    Presentation,
    Research,
    IndivResearch,
    Papers,
    Equipments,
    Software,
    Contact,
    People,
    Member,
    Collaboration,
    JoinUs,
    Social,
    Admin
} from '../Components/index';


const PublicRoutes = () => {
    // const { user, loading } = useContext(AuthContext);
  return(
    <Router>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path='/datasets' element={<Dataset/>}/>
            <Route path='/presentations' element={<Presentation/>}/>
            <Route path='/research' element={<Research/>}/>
            <Route path='/research/:token' element={<IndivResearch/>}/>
            <Route path='/publications' element={<Papers/>}/>
            <Route path='/equipments' element={<Equipments/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/people' element={<People/>}/>
            <Route path='/people/:token' element={<Member/>}/>
            <Route path='/collaboration' element={<Collaboration/>}/>
            <Route path='/positions' element={<JoinUs/>}/>
            <Route path='/social' element={<Social/>}/>
            <Route path='/software' element={<Software/>}/>
            <Route path='/admin' element={<Admin/>}/>
            <React.Fragment>
                {
                    true &&
                    <Route path = '/administration' element = {<Admin/>}/>
                }
            </React.Fragment>
            <Route path='/administration' element={<Admin/>} />
            {/* <UserRoute path='/edit/:type/:id' component={EditMain} /> */}
        </Routes>
    </Router>
  );
}

export default PublicRoutes;
