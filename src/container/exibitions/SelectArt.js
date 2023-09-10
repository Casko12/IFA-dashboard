import React, { useState, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Spin, Skeleton, Select, Form } from 'antd';
import { Link } from 'react-router-dom';
import { GalleryNav } from '../pages/style';
import { Main, BasicFormWrapper } from '../styled';
import { Button } from '../../components/buttons/buttons';
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
  const [form] = Form.useForm();

  const { Option } = Select;
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
  const handleSubmit = (values) => {
    setState({ ...state, submitValues: values });
  };

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Select Arts to enter exhibition" routes={PageRoutes} />
      <Main>
        <Form style={{ width: '100%' }} form={form} name="SelectArts" onFinish={handleSubmit}>
          <BasicFormWrapper>
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

                    <li>
                      <Form.Item name="ExhibitionId" initialValue="" label="Exhibition">
                        <Select style={{ width: '100%' }}>
                          <Option value="">Please Select</Option>
                          <Option value="exhibition1">Exhibition 1</Option>
                          <Option value="exhibition2">Exhibition 2</Option>
                          <Option value="exhibition3">Exhibition 3</Option>
                        </Select>
                      </Form.Item>
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
              <Col xs={24}>
                <Form.Item>
                  <Button
                    className="btn-cancel"
                    size="large"
                    onClick={() => {
                      return form.resetFields();
                    }}
                  >
                    Cancel
                  </Button>
                  <Button size="large" htmlType="submit" type="primary" raised>
                    Save
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </BasicFormWrapper>
        </Form>
      </Main>
    </>
  );
}

export default SelectArt;
