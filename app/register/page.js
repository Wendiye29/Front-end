'use client';
//import SidebarLayout from '../layout';
import React from 'react';
import { Form, Input, Button, Card, Typography, Checkbox } from 'antd';


const { Title } = Typography;

const RegisterPage = () => {
  const onFinish = (values) => console.log('Registered:', values);

  const checkBoxHandler = (e) => {
    alert('you accept the agreement:', e.target.checked);
    if (!e.target.checked) {
      alert('You must accept the agreement to register.');
    }
  }
  const clicked = (e) => {
    alert(e.target.value+ 'registered successfully'); 
  }
  return (
    
      <Card style={{ maxWidth: 400, margin: 'left' }}>
        <Title level={2}>Register</Title>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Enter name!' }]}><Input /></Form.Item>
          <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Enter email!' }]}><Input /></Form.Item>
          <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Enter password!' }]}><Input.Password /></Form.Item>
          <Form.Item><Button onClick={clicked} type="primary" htmlType="submit" block>Register</Button></Form.Item>
          <Form.Item name="remember" valuePropName="checked"><Checkbox onClick={checkBoxHandler}> Accept the Agreement</Checkbox></Form.Item>
        </Form>
        <Button type="link" href="/login">Already have an account? Login</Button>
      </Card>
   
  );
};

export default RegisterPage;
