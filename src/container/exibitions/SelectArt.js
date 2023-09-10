import React, { useState, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Spin, Skeleton } from 'antd';
import { Link } from 'react-router-dom';
import { GalleryNav } from '../pages/style';
import { Main } from '../styled';
import { PageHeader } from '../../components/page-headers/page-headers';
import { galleryFilter } from '../../redux/gallary/actionCreator';
import { Cards } from '../../components/cards/frame/cards-frame';

const GalleryCards = lazy(() => import('../pages/overview/GalleryCard'));

function SelectArt() {
  const PageRoutes = [
    {
      path: 'index',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Select Art',
    },
  ];

  const dispatch = useDispatch();
  const { gallery, isLoading } = useSelector((state) => {
    return {
      gallery: state.gallery.data,
      isLoading: state.gallery.loading,
    };
  });

  const [state, setState] = useState({
    activeClass: '',
  });

  const handleChange = (value) => {
    dispatch(galleryFilter('category', value));
    setState({
      ...state,
      activeClass: value,
    });
  };

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Select Arts to enter exhibition" routes={PageRoutes} />
      <Main>
        <Row gutter={25}>
          <Col xs={24}>
            <GalleryNav>
              <ul>
                <li>
                  <Link
                    className={state.activeClass === '' ? 'active' : 'deactivate'}
                    onClick={() => handleChange('')}
                    to="#"
                  >
                    All
                  </Link>
                </li>
              </ul>
            </GalleryNav>
          </Col>
          {isLoading ? (
            <Col xs={24}>
              <div className="spin">
                <Spin />
              </div>
            </Col>
          ) : (
            gallery.map((item) => {
              const { id } = item;
              return (
                <Col key={id} xxl={6} lg={8} sm={12} xs={24}>
                  <Suspense
                    fallback={
                      <Cards headless>
                        <Skeleton active />
                      </Cards>
                    }
                  >
                    <GalleryCards item={item} />
                  </Suspense>
                </Col>
              );
            })
          )}
        </Row>
      </Main>
    </>
  );
}

export default SelectArt;
