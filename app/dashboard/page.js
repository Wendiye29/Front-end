"use client";
import React, { useState } from "react";
import { Card, Typography, Switch, Row, Col } from "antd";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const { Title } = Typography;

export default function DashboardPage() {
  const [darkMode, setDarkMode] = useState(false);

  const userStats = [
    { name: "Users", count: 100 },
    { name: "Comments", count: 200 },
    { name: "Active Users", count: 75 },
  ];

  return (
    <div style={{ padding: "20px", background: darkMode ? "#121212" : "#f2f2f2" }}>
      <Card style={{ background: darkMode ? "#1f1f1f" : "#fff", marginBottom: "20px" }}>
        <Title level={2}>Dashboard</Title>
        <Switch checked={darkMode} onChange={setDarkMode} /> Dark Mode
      </Card>

      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Card title="User Statistics" style={{ background: darkMode ? "#1f1f1f" : "#fff" }}>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={userStats}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#1890ff" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </Col>

        <Col span={12}>
          <Card title="Recent Comments" style={{ background: darkMode ? "#1f1f1f" : "#fff" }}>
            <p>✅ "Nice dashboard!" - Mohammed</p>
            <p>✅ "Great UI!" - Amanuel</p>
            <p>✅ "Amazing features!" - Habtamu</p>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
