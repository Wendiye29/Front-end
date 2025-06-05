'use client';
//import SidebarLayout from '../layout';
import React, { useState } from 'react';
import { Input, Button, List, Card } from 'antd';

const UsersPage = () => {
  const [search, setSearch] = useState('');
  const users = ['Alice', 'Bob', 'Charlie', 'David'];

  return (
    
      <Card style={{ maxWidth: 400, margin: 'auto' }}>
        <Input placeholder="Search users..." onChange={e => setSearch(e.target.value)} />
        <Button type="primary" block>Search</Button>
        <List dataSource={users.filter(user => user.includes(search))} renderItem={item => <List.Item>{item}</List.Item>} />
      </Card>
    
  );
};

export default UsersPage;
