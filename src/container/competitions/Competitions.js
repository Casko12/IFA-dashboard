import React, { useEffect, useState } from 'react';
import { Row, Col, Table, Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import UilPlus from '@iconscout/react-unicons/icons/uil-plus';
import UilSearch from '@iconscout/react-unicons/icons/uil-search';
import UilEdit from '@iconscout/react-unicons/icons/uil-edit';
import UilTrash from '@iconscout/react-unicons/icons/uil-trash';
import axios from 'axios';
import { RecordViewWrapper } from '../crud/axios/Style';
import { Main, TableWrapper } from '../styled';
import { Button } from '../../components/buttons/buttons';
import { Cards } from '../../components/cards/frame/cards-frame';
import { PageHeader } from '../../components/page-headers/page-headers';
import { axiosDataRead, axiosDataSearch, axiosDataDelete } from '../../redux/crud/axios/actionCreator';

function Competitions() {
  const dispatch = useDispatch();
  const { crud, isLoading } = useSelector((state) => {
    return {
      crud: state.AxiosCrud.data,
      isLoading: state.AxiosCrud.loading,
    };
  });
  console.log(crud);

  const [state, setState] = useState({
    selectedRowKeys: [],
  });
  const { selectedRowKeys } = state;

  const dataSource = [];
  const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://localhost:7064/api/competition');
        setData(response.data);
        // setLoading(false);
      } catch (error) {
        // setError(error.message);
        // setLoading(false);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    if (dispatch) {
      dispatch(axiosDataRead());
    }
  }, [dispatch]);
  console.log(data);
  const handleDelete = (id) => {
    const confirm = window.confirm('Are you sure delete this?');
    if (confirm) {
      dispatch(
        axiosDataDelete({
          id,
          getData: () => {
            dispatch(axiosDataRead());
          },
        }),
      );
    }
    return false;
  };

  const onHandleSearch = (e) => {
    dispatch(axiosDataSearch(e.target.value, crud));
  };

  if (crud.length)
    crud.map((competition, key) => {
      const { Id, Name, StartDate, EndDate, Theme, Description, status, image } = competition;

      return dataSource.push({
        key: key + 1,
        name: (
          <div className="record-img align-center-v">
            <img
              src={
                image
                  ? `${process.env.REACT_APP_API_ENDPOINT}/${image}`
                  : require('../../static/img/avatar/profileImage.png')
              }
              alt={Id}
            />
            <span>
              <span>{Name}</span>
            </span>
          </div>
        ),
        Theme,
        Description,
        StartDate,
        EndDate,
        status: <span className={`status ${status}`}>{status}</span>,
        action: (
          <div className="table-actions">
            <Link className="edit" to={`/admin/competitions/edit-competition/${Id}`}>
              <UilEdit />
            </Link>
            &nbsp;&nbsp;&nbsp;
            <Link className="delete" onClick={() => handleDelete(Id)} to="#">
              <UilTrash />
            </Link>
          </div>
        ),
      });
    });

  const columns = [
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
      title: 'Theme',
      dataIndex: 'Theme',
      key: 'Theme',
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
  const onSelectChange = (selectedRowKey) => {
    setState({ ...state, selectedRowKeys: selectedRowKey });
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <RecordViewWrapper>
      <PageHeader
        className="ninjadash-page-header-main"
        subTitle={
          <div>
            <Button className="btn-add_new" size="default" key="1" type="primary">
              <Link to="/admin/competitions/add-competition/add">
                <UilPlus /> <span>Add New Competition</span>
              </Link>
            </Button>
          </div>
        }
        buttons={[
          <div key={1} className="search-box">
            <span className="search-icon">
              <UilSearch />
            </span>
            <input onChange={onHandleSearch} type="text" name="recored-search" placeholder="Search Here" />
          </div>,
        ]}
        ghost
        title="Competitions List"
      />
      <Main>
        <Row gutter={15}>
          <Col className="w-100" md={24}>
            <Cards headless>
              {isLoading ? (
                <div className="spin">
                  <Spin />
                </div>
              ) : (
                <div>
                  <TableWrapper className="table-data-view table-responsive">
                    <Table
                      rowSelection={rowSelection}
                      pagination={{ pageSize: 10, showSizeChanger: true }}
                      dataSource={dataSource}
                      columns={columns}
                    />
                  </TableWrapper>
                </div>
              )}
            </Cards>
          </Col>
        </Row>
      </Main>
    </RecordViewWrapper>
  );
}
export default Competitions;
