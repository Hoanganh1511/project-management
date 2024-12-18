"use client";
import StoreProvider, { useAppSelector } from "@/app/redux";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React, { useEffect } from "react";
import AuthProvider from "./AuthProvider";
import { Authenticator } from "@aws-amplify/ui-react";
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed,
  );
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);
  return (
    <div className="flex min-h-screen w-full bg-gray-50 text-gray-900">
      <Sidebar />
      <main
        className={`flex w-full flex-col bg-gray-50 dark:bg-dark-bg ${isSidebarCollapsed ? "" : "md:pl-64"} `}
      >
        {/* navbar */}

        <Navbar />
        {children}
      </main>
    </div>
  );
};
const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <Authenticator.Provider>
        <AuthProvider>
          <DashboardLayout>{children}</DashboardLayout>
        </AuthProvider>
      </Authenticator.Provider>
    </StoreProvider>
  );
};

export default DashboardWrapper;
