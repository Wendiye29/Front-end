'use client';
import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined, LoginOutlined, FormOutlined, CommentOutlined, BarChartOutlined, LogoutOutlined } from '@ant-design/icons';
import { Avatar } from "antd";
import Link from 'next/link';
import { Button } from 'antd';
const { Header, Sider, Content } = Layout;
import { MessageOutlined } from "@ant-design/icons";
export default function RootLayout({ children }) {
 
  const [collapsed, setCollapsed] = useState(false);
  const [hover, setHover] = useState(false);  
  const menuItems = [
    { key: '1', icon: <LoginOutlined />, label: <a href="/login">Login</a> },
    { key: '2', icon: <UserOutlined />, label: <a href="/register">Register</a> },
    { key: '3', icon: <FormOutlined />, label: <a href="/users">Users</a> },
    { key: '4', icon: <CommentOutlined />, label: <a href="/comment">Comments</a> },
    { key: '5', icon: <BarChartOutlined />, label: <a href="/dashboard">Dashboard</a> },
    {key: '6', icon: <LogoutOutlined />, label: <a href="/logout">Logout</a> }  
  ];

  return (
    <html lang="en">
      <body>
        <Layout>
      <Header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 20px" }}>
        <div style={{ color: "white", fontSize: "20px", fontWeight: "bold" }}>
          Welcome to My Website
          <Avatar size={50} src="image/R.jpg" />
          <MessageOutlined style={{ color: "#1890ff", fontSize:"30px", cursor: "pointer", color: hover ? "yellow" : "blue", }} />
        </div>
        <div style={{ display:"flex", color: "white", fontSize: "16px", justifyContent:"flex-end", padding: "0 20px" }}>
       <Link href="https://www.girmasossina2@gmail.com" passHref>
        
      <p>Email Me</p>
      </Link>
        </div>
      </Header>
    </Layout>
        <div style={{ display: "flex", justifyContent: "flex-end", padding: "1px" }}>
      
      
    </div>
    
        <Layout style={{ minHeight: '100vh' }}>
          <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
            <Menu theme="dark" mode="inline" items={menuItems} />
          </Sider>
          <Layout>
            
            <Content style={{ margin: '20px', padding: '20px', background: '#fff' }}>
              {children}
            </Content>
          </Layout>
        </Layout>
      </body>
    </html>
  );
}
