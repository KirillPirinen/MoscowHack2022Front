import React from 'react'
import { Route, Routes } from "react-router-dom";
import { RequireAuth } from "./components/RequireAuth/RequireAuth";
import { Wrapper } from "../src/components/Wrapper/Wrapper";
import { Main } from './pages/Main/Main';
import { Category } from './pages/Category/Category';
import { TaskDetail } from './pages/TaskDetail';
import { Profile } from './pages/Profile';
import { OrganiztionDetail } from './pages/OrganizationDetail';
import { About } from './pages/About';
import { SearchPage } from './pages/Search';

const Router = () => {
  return (
      <Routes>
        <Route path="/" element={<Wrapper />}>

          <Route index element={<Main />} />

          <Route path="category/:id" element={<Category />} />

          <Route path="task/:id" element={<TaskDetail />} />

          <Route path="organization/:id" element={<OrganiztionDetail />} />
          
          <Route path="search" element={<SearchPage />}/>

          <Route path="about" element={<About/>}/>
          
          <Route element={<RequireAuth />}>
            <Route path="profile" element={<Profile />} />
          </Route>

          <Route path="*" element={
              <div style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </div>
            }
          />
        
      </Route>
    </Routes>
  )
}

export default Router;
