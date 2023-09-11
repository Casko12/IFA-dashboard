import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Competitions = lazy(() => import('../../container/competitions/Competitions'));
const AddCompetition = lazy(() => import('../../container/competitions/AddCompetitions'));
const EditCompetition = lazy(() => import('../../container/competitions/EditCompetitions'));
const SelectJudges = lazy(() => import('../../container/competitions/SelectJudges'));
const AddPrize = lazy(() => import('../../container/competitions/AddPrizes'));
const NotFound = lazy(() => import('../../container/pages/404'));

function PagesRoute() {
  return (
    <Routes>
      <Route path="/*" element={<Competitions />} />
      <Route path="add-competition/*" element={<AddCompetition />} />
      <Route path="edit-competition/*" element={<EditCompetition />} />
      <Route path="select-judges/*" element={<SelectJudges />} />
      <Route path="add-prize/*" element={<AddPrize />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default PagesRoute;
