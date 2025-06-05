'use client';
//import SidebarLayout from '../layout';
import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Card, Typography } from 'antd';


const { Title } = Typography;

const LoginPage = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    console.log('Login details:', values);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    
      <Card style={{ maxWidth: 400, margin: 'left'}}>
        <Title level={2}>Login</Title>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Enter email!' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Enter password!' }]}>
            <Input.Password />
          </Form.Item>
          <Form.Item name="remember" valuePropName="checked"><Checkbox>Remember Me</Checkbox></Form.Item>
          <Form.Item><Button type="primary" htmlType="submit" loading={loading} block>Login</Button></Form.Item>
        </Form>
        <Button type="link" href="/register">New here? Register</Button>
      </Card>
    
  );
};

export default LoginPage;
