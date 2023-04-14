import React from "react";
import { Outlet } from "react-router-dom";
import AppNavBar from "../components/AppNavBar";

export default function AppLayout() {
  return (
    <div>
      <AppNavBar />
      <Outlet />
    </div>
  );
}
