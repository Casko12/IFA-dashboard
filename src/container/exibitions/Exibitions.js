import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Row, Col } from 'antd';
import UilEye from '@iconscout/react-unicons/icons/uil-eye';
import UilEdit from '@iconscout/react-unicons/icons/uil-edit';
import UilTrashAlt from '@iconscout/react-unicons/icons/uil-trash-alt';
import { Link } from 'react-router-dom';
import ExibitionListTable from '../pages/overview/ExibitionTable';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main, CardToolbox } from '../styled';
import Heading from '../../components/heading/heading';
import { AutoComplete } from '../../components/autoComplete/autoComplete';
import { Button } from '../../components/buttons/buttons';

function Exibitions() {
  const { searchData, exibitions } = useSelector((state) => {
    return {
      searchData: state.headerSearchData,
      exibitions: state.exibitions,
    };
  });

  const [state, setState] = useState({
    notData: searchData,
    selectedRowKeys: 0,
    selectedRows: 0,
  });

  const { notData } = state;

  const handleSearch = (searchText) => {
    const data = searchData.filter((item) => item.title.toUpperCase().startsWith(searchText.toUpperCase()));
    setState({
      ...state,
      notData: data,
    });
  };

  const exibitionsTableData = [];

  exibitions?.map((exibition) => {
    const { Id, Name, StartDate, EndDate, Theme, Description, Status } = exibition;

    return exibitionsTableData.push({
      key: Id,
      exibition: (
        <div className="user-info">
          <figure>
            <img style={{ width: '40px' }} src={require(`../../${Theme}`)} alt="" />
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
      status: <span className={`status-text ${Status}`}>{Status}</span>,
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

  return (
    <>
      <CardToolbox>
        <PageHeader
          className="ninjadash-page-header-main"
          ghost
          title="Exibitions List"
          subTitle={
            <>
              <span className="title-counter">5 Exibitions </span>
              <AutoComplete
                onSearch={handleSearch}
                dataSource={notData}
                placeholder="Search by Name"
                width="100%"
                patterns
              />
            </>
          }
          buttons={[
            <Button className="btn-add_new" size="default" type="primary" key="1">
              <Link to="/admin/exibitions/add-exibition/add">+ Add New Exibition</Link>
            </Button>,
          ]}
        />
      </CardToolbox>

      <Main>
        <Row gutter={15}>
          <Col md={24}>
            <ExibitionListTable />
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default Exibitions;
