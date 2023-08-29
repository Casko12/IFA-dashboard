import React, { lazy, Suspense } from 'react';
import { Row, Col, Spin } from 'antd';
import { Routes, Route, NavLink } from 'react-router-dom';
import UilUser from '@iconscout/react-unicons/icons/uil-user';
import { AddUser } from '../pages/style';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Main } from '../styled';

const AddCompetition = lazy(() => import('../pages/overview/competition'));

function AddNewCompetition() {
  return (
    <>
      <PageHeader className="ninjadash-page-header-main" ghost title="Add Competition" />
      <Main>
        <Row gutter={15}>
          <Col xs={24}>
            <AddUser>
              <Cards
                title={
                  <div className="card-nav">
                    <ul>
                      <li>
                        <NavLink to="./add">
                          <UilUser />
                          Info
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                }
              >
                <Suspense
                  fallback={
                    <div className="spin">
                      <Spin />
                    </div>
                  }
                >
                  <Routes>
                    <Route path="add" element={<AddCompetition />} />
                  </Routes>
                </Suspense>
              </Cards>
            </AddUser>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default AddNewCompetition;
