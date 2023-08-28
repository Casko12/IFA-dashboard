import React, { useState } from 'react';
import { Row, Col, Form, Input, Upload, Select, DatePicker } from 'antd';
import { Link } from 'react-router-dom';
import UilCamera from '@iconscout/react-unicons/icons/uil-camera';
import { BasicFormWrapper } from '../../styled';
import { Button } from '../../../components/buttons/buttons';
import Heading from '../../../components/heading/heading';

const dateFormat = 'DD/MM/YYYY';

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

              <Form.Item
                label="Email Address"
                name="Email"
                rules={[{ message: 'Please input your email!', type: 'email' }]}
              >
                <Input placeholder="name@example.com" />
              </Form.Item>

              <Form.Item label="Name" name="Name">
                <Input placeholder="Input Name" />
              </Form.Item>

              <Form.Item name="Birthday" rules={[{ type: 'object', whitespace: true }]} label="Birthday">
                <DatePicker format={dateFormat} style={{ width: '100%' }} />
              </Form.Item>

              <Form.Item label="Address" name="Address">
                <Input placeholder="Input Address" />
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

              <Form.Item name="JoinDate" rules={[{ type: 'object', whitespace: true }]} label="Join date">
                <DatePicker format={dateFormat} style={{ width: '100%' }} />
              </Form.Item>

              <Form.Item name="Telephone" label="Phone Number">
                <Input placeholder="+84 9011 23444" />
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
