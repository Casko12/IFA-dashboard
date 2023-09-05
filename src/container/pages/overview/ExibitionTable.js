import React from 'react';
import { useSelector } from 'react-redux';
import { Table } from 'antd';
import UilEye from '@iconscout/react-unicons/icons/uil-eye';
import UilEdit from '@iconscout/react-unicons/icons/uil-edit';
import UilTrashAlt from '@iconscout/react-unicons/icons/uil-trash-alt';
import { UserTableStyleWrapper } from '../style';
import { TableWrapper } from '../../styled';
import Heading from '../../../components/heading/heading';
import { Button } from '../../../components/buttons/buttons';
import { Cards } from '../../../components/cards/frame/cards-frame';

function ExibitionListTable() {
  const { exibitions } = useSelector((state) => {
    return {
      exibitions: state.exibitions,
    };
  });

  const exibitionsTableData = [];

  exibitions?.map((exibition) => {
    const { Id, Name, StartDate, EndDate, Theme, Description, Status } = exibition;

    return exibitionsTableData.push({
      key: Id,
      exibition: (
        <div className="user-info">
          <figure>
            <img style={{ width: '40px' }} src={require(`../../../${Theme}`)} alt="" />
          </figure>
          <figcaption>
            <Heading className="user-name" as="h6">
              {Name}
            </Heading>
            <span className="user-designation">San Francisco, CA</span>
          </figcaption>
        </div>
      ),
      Name: 'exibition 1',
      StartDate: { StartDate },
      EndDate: { EndDate },
      Description: { Description },
      Status: <span className={`status-text ${Status}`}>{Status}</span>,
      action: (
        <div className="table-actions">
          <Button className="btn-icon" type="primary" to="#" shape="circle">
            <UilEye />
          </Button>
          <Button className="btn-icon" type="info" to="#" shape="circle">
            <UilEdit />
          </Button>
          <Button className="btn-icon" type="danger" to="#" shape="circle">
            <UilTrashAlt />
          </Button>
        </div>
      ),
    });
  });

  const exibitionsTableColumns = [
    {
      title: 'Name',
      dataIndex: 'Name',
      key: 'Name',
    },
    {
      title: 'Start Date',
      dataIndex: 'StartDate',
      key: 'StartDate',
    },
    {
      title: 'End Date',
      dataIndex: 'EndDate',
      key: 'EndDate',
    },
    {
      title: 'Description',
      dataIndex: 'Description',
      key: 'Description',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Actions',
      dataIndex: 'action',
      key: 'action',
      width: '90px',
    },
  ];

  const rowSelection = {
    getCheckboxProps: (record) => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  };

  return (
    <Cards headless>
      <UserTableStyleWrapper>
        <TableWrapper className="table-responsive">
          <Table
            rowSelection={rowSelection}
            dataSource={exibitionsTableData}
            columns={exibitionsTableColumns}
            pagination={{
              defaultPageSize: 5,
              total: exibitionsTableData.length,
              showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
            }}
          />
        </TableWrapper>
      </UserTableStyleWrapper>
    </Cards>
  );
}

export default ExibitionListTable;
