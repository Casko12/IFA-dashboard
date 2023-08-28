import React, { useState } from 'react';
import { Row, Col, Form, Input, Upload, Select } from 'antd';
import { Link } from 'react-router-dom';
import UilCamera from '@iconscout/react-unicons/icons/uil-camera';
import { BasicFormWrapper } from '../../styled';
import { Button } from '../../../components/buttons/buttons';
import Heading from '../../../components/heading/heading';

const { Option } = Select;
function Info() {
  const [state, setState] = useState({
    values: '',
  });
  const [form] = Form.useForm();
  const handleSubmit = (values) => {
    setState({ ...state, values });
  };

  return (
    <Row justify="center">
      <Col xxl={10} xl={14} md={16} xs={24}>
        <div className="user-info-form">
          <BasicFormWrapper>
            <Form style={{ width: '100%' }} form={form} name="info" onFinish={handleSubmit}>
              <Heading className="form-title" as="h4">
                Personal Information
              </Heading>

              <figure className="photo-upload align-center-v">
                <img src={require('../../../static/img/avatar/profileImage.png')} alt="" />
                <figcaption>
                  <Upload>
                    <Link className="btn-upload" to="#">
                      <UilCamera />
                    </Link>
                  </Upload>
                  <div className="info">
                    <Heading as="h4">Profile Photo</Heading>
                  </div>
                </figcaption>
              </figure>

              <Form.Item label="Name" name="name">
                <Input placeholder="Input Name" />
              </Form.Item>

              <Form.Item
                label="Email Address"
                name="email"
                rules={[{ message: 'Please input your email!', type: 'email' }]}
              >
                <Input placeholder="name@example.com" />
              </Form.Item>

              <Form.Item name="phone" label="Phone Number">
                <Input placeholder="+84 9011 23444" />
              </Form.Item>

              <Form.Item name="role" initialValue="" label="Role">
                <Select style={{ width: '100%' }}>
                  <Option value="">Please Select</Option>
                  <Option value="director">Director</Option>
                  <Option value="manager">Manager</Option>
                  <Option value="staff">Staff</Option>
                  <Option value="student">Student</Option>
                </Select>
              </Form.Item>

              <Form.Item>
                <div className="add-user-bottom text-right">
                  <Button
                    className="ant-btn ant-btn-light"
                    onClick={() => {
                      return form.resetFields();
                    }}
                  >
                    Reset
                  </Button>
                  <Button htmlType="submit" type="primary">
                    <Link to="/admin/users/add-user/work">Save & Next</Link>
                  </Button>
                </div>
              </Form.Item>
            </Form>
          </BasicFormWrapper>
        </div>
      </Col>
    </Row>
  );
}

export default Info;
