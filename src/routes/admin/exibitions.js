import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Exibitions = lazy(() => import('../../container/exibitions/Exibitions'));
const AddExibition = lazy(() => import('../../container/exibitions/AddExibitions'));
const NotFound = lazy(() => import('../../container/pages/404'));

function PagesRoute() {
  return (
    <Routes>
      <Route path="/*" element={<Exibitions />} />
      <Route path="add-exibition/*" element={<AddExibition />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default PagesRoute;
