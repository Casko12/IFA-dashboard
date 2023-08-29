import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Competitions = lazy(() => import('../../container/competitions/Competitions'));
const AddCompetition = lazy(() => import('../../container/competitions/AddCompetitions'));
const NotFound = lazy(() => import('../../container/pages/404'));

function PagesRoute() {
  return (
    <Routes>
      <Route path="/*" element={<Competitions />} />
      <Route path="add-competition/*" element={<AddCompetition />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default PagesRoute;
