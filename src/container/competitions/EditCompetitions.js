import React, { useState } from 'react';
import { Row, Col, Form, Input, message, DatePicker, Upload } from 'antd';
import UilExport from '@iconscout/react-unicons/icons/uil-export';
import UilTrashAlt from '@iconscout/react-unicons/icons/uil-trash-alt';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Main, BasicFormWrapper } from '../styled';
import { Button } from '../../components/buttons/buttons';
import { AddProductForm } from '../ecommerce/Style';
import Heading from '../../components/heading/heading';

function EditCompetition() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Edit Competition',
    },
  ];
  const [form] = Form.useForm();
  const [state, setState] = useState({
    file: null,
    list: null,
    submitValues: {},
  });
  const { Dragger } = Upload;
  const fileList = [
    {
      uid: '1',
      name: '1.png',
      status: 'done',
      url: require('../../static/img/products/1.png'),
      thumbUrl: require('../../static/img/products/1.png'),
    },
  ];
  const dateFormat = 'DD/MM/YYYY';
  const fileUploadProps = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        setState({ ...state, file: info.file, list: info.fileList });
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    listType: 'picture',
    defaultFileList: fileList,
    showUploadList: {
      showRemoveIcon: true,
      removeIcon: <UilTrashAlt />,
    },
  };

  const handleSubmit = (values) => {
    setState({ ...state, submitValues: values });
  };

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Edit Competition" routes={PageRoutes} />
      <Main>
        <Row gutter={15}>
          <Col xs={24}>
            <Cards headless>
              <Row gutter={25} justify="center">
                <Col xxl={12} md={18} xs={24}>
                  <AddProductForm>
                    <Form style={{ width: '100%' }} form={form} name="editCompetition" onFinish={handleSubmit}>
                      <BasicFormWrapper>
                        <div className="add-product-block">
                          <Row gutter={15}>
                            <Col xs={24}>
                              <div className="add-product-content">
                                <Cards title="Competition Info">
                                  <Form.Item name="Name" label="Name">
                                    <Input />
                                  </Form.Item>
                                  <Form.Item name="Theme" label="Theme">
                                    <Input />
                                  </Form.Item>
                                  <Form.Item
                                    name="StartDate"
                                    rules={[{ type: 'object', whitespace: true }]}
                                    label="Start Date"
                                  >
                                    <DatePicker format={dateFormat} style={{ width: '100%' }} />
                                  </Form.Item>
                                  <Form.Item
                                    name="EndDate"
                                    rules={[{ type: 'object', whitespace: true }]}
                                    label="End Date"
                                  >
                                    <DatePicker format={dateFormat} style={{ width: '100%' }} />
                                  </Form.Item>

                                  <Form.Item name="Description" label="Competition Description">
                                    <Input.TextArea rows={5} />
                                  </Form.Item>
                                </Cards>
                              </div>
                            </Col>
                          </Row>
                        </div>

                        <div className="add-product-block">
                          <Row gutter={15}>
                            <Col xs={24}>
                              <div className="add-product-content">
                                <Cards title="Competition banner">
                                  <Dragger {...fileUploadProps}>
                                    <p className="ant-upload-drag-icon">
                                      <UilExport />
                                    </p>
                                    <Heading as="h4" className="ant-upload-text">
                                      Drag and drop an image
                                    </Heading>
                                    <p className="ant-upload-hint">
                                      or <span>Browse</span> to choose a file
                                    </p>
                                  </Dragger>
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

export default EditCompetition;
