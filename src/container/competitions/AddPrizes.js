import React, { useState } from 'react';
import { Row, Col, Form, Input, Select, InputNumber } from 'antd';
import UilDollarAlt from '@iconscout/react-unicons/icons/uil-dollar-alt';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Main, BasicFormWrapper } from '../styled';
import { Button } from '../../components/buttons/buttons';
import { AddProductForm } from '../ecommerce/Style';

function AddPrize() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Add Prize',
    },
  ];
  const [form] = Form.useForm();
  const [state, setState] = useState({
    file: null,
    list: null,
    submitValues: {},
  });
  const { Option } = Select;

  const handleSubmit = (values) => {
    setState({ ...state, submitValues: values });
  };

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Add Prize" routes={PageRoutes} />
      <Main>
        <Row gutter={15}>
          <Col xs={24}>
            <Cards headless>
              <Row gutter={25} justify="center">
                <Col xxl={12} md={18} xs={24}>
                  <AddProductForm>
                    <Form style={{ width: '100%' }} form={form} name="addPrize" onFinish={handleSubmit}>
                      <BasicFormWrapper>
                        <div className="add-product-block">
                          <Row gutter={15}>
                            <Col xs={24}>
                              <div className="add-product-content">
                                <Cards title="Add Prize">
                                  <Form.Item name="Name" label="Name">
                                    <Input />
                                  </Form.Item>
                                  <Form.Item name="Quantity" label="Quantity">
                                    <InputNumber />
                                  </Form.Item>
                                  <Form.Item name="CompetitionId" initialValue="" label="Competition">
                                    <Select style={{ width: '100%' }}>
                                      <Option value="">Please Select</Option>
                                      <Option value="competition1">Competition 1</Option>
                                      <Option value="competition2">Competition 2</Option>
                                      <Option value="competition3">Competition 3</Option>
                                    </Select>
                                  </Form.Item>

                                  <Form.Item name="Price" label="Price">
                                    <div className="input-prepend-wrap">
                                      <span className="input-prepend">
                                        <UilDollarAlt />
                                      </span>
                                      <InputNumber style={{ width: '100%' }} />
                                    </div>
                                  </Form.Item>
                                </Cards>
                              </div>
                            </Col>
                          </Row>
                        </div>

                        <div className="add-form-action">
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
                        </div>
                      </BasicFormWrapper>
                    </Form>
                  </AddProductForm>
                </Col>
              </Row>
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default AddPrize;
