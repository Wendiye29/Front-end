"use client";
import { useEffect } from "react";
import { Button, Card, Typography } from "antd";
import { useRouter } from "next/navigation";

const { Title } = Typography;

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    // Simulating session clear (e.g., remove token)
    localStorage.removeItem("userToken");
    setTimeout(() => router.push("/login"), 2000);
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <Card style={{ textAlign: "center", padding: "30px" }}>
        <Title level={2}>Logging out...</Title>
        <p>You will be redirected to the login page shortly.</p>
        <Button type="primary" onClick={() => router.push("/login")}>
          Go to Login Now
        </Button>
      </Card>
    </div>
  );
}
