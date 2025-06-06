
import React from "react";
import { Outlet } from "react-router-dom";
import PublicHeader from "@/components/layout/PublicHeader";
import Footer from "@/components/layout/Footer";

const AuthLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <PublicHeader />
      <main className="flex-grow animate-fade-in">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AuthLayout;
