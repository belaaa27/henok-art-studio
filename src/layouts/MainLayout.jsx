import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-studio-charcoal text-gallery-ivory selection:bg-burnt-orange selection:text-gallery-ivory">
      {/* Reusable Header Navigation */}
      <Navbar />

      {/* Dynamic Route Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Reusable Dark Footer */}
      <Footer />
    </div>
  );
}
