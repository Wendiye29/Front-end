'use client';
//import SidebarLayout from '../layout';
import React, { useState } from 'react';
import { Form, Input, Button, List, Card } from 'antd';

const CommentsPage = () => {
  const [comments, setComments] = useState([]);

  return (
    
      <Card style={{ maxWidth: 400, margin: 'auto' }}>
        <Form layout="vertical" onFinish={(values) => setComments([...comments, values.comment])}>
          <Form.Item label="Comment" name="comment"><Input.TextArea rows={4} /></Form.Item>
          <Form.Item><Button type="primary" htmlType="submit" block>Send Comment</Button></Form.Item>
        </Form>
        <List dataSource={comments} renderItem={item => <List.Item>{item}</List.Item>} />
      </Card>
    
  );
};

export default CommentsPage;
