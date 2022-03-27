import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";

export default function AdminGuard({ children }) {
  const context = useAppContext();
  const account = context.walletAddress;
  const navigate = useNavigate();
  const isAdmin = (account === process.env.REACT_APP_DAVIDE_WALLET);
  if (!isAdmin) {
    navigate("/");
  }
  return <>{children}</>;
}
