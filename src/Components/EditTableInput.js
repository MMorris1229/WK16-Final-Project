//Was trying to add an edit button to the MusicList but couldnt figure it out

/*import React, { useState } from 'react';
import { Table } from 'antd';
import { Input } from 'antd';
import EditableInput from './EditableInput';

const MusicList = ({ data }) => {
  const [dataSource, setDataSource] = useState(data);

  const handleSave = (record, fieldName, value) => {
    const updatedData = [...dataSource];
    const index = updatedData.findIndex((item) => item.key === record.key);
    updatedData[index] = { ...updatedData[index], [fieldName]: value };
    setDataSource(updatedData);
  };

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      render: (text, record) => (
        <EditableInput value={text} onSave={(value) => handleSave(record, 'title', value)} />
      ),
    },
    {
      title: 'Artist',
      dataIndex: 'artist',
      key: 'artist',
      render: (text, record) => (
        <EditableInput value={text} onSave={(value) => handleSave(record, 'artist', value)} />
      ),
    },
    {
      title: 'genre',
      dataIndex: 'genre',
      key: 'genre',
      render: (text, record) => (
        <EditableInput value={text} onSave={(value) => handleSave(record, 'genre', value)} />
      ),
    },
  ];

  return <Table dataSource={dataSource} columns={columns} />;
};

export default EditableInput;*/
