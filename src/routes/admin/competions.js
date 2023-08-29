import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Users = lazy(() => import('../../container/users/Users'));
const AddCompetition = lazy(() => import('../../container/users/AddUsers'));
const DataTable = lazy(() => import('../../container/users/UserListDataTable'));
const Team = lazy(() => import('../../container/users/Team'));
const NotFound = lazy(() => import('../../container/pages/404'));

function PagesRoute() {
  return (
    <Routes>
      <Route path="/*" element={<Users />} />
      <Route path="add-competition/*" element={<AddCompetition />} />
      <Route path="dataTable" element={<DataTable />} />
      <Route path="team" element={<Team />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default PagesRoute;
