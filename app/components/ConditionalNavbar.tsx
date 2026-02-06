"use client";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

export default function ConditionalNavbar() {
  const pathname = usePathname();
  
  // Ocultar navbar cuando la ruta sea /barranqui-ia/2026
  if (pathname === "/barranqui-ia/2026") {
    return null;
  }
  
  return <Navbar />;
}
