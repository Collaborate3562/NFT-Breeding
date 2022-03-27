import React, { useContext } from "react";
import { useWeb3React } from "@web3-react/core";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";

export default function AdminGuard({ children }) {
  // const context = useAppContext();
  // const account = context.walletAddress;
  // const navigate = useNavigate();
  // const isAdmin = (account === process.env.REACT_APP_ADMIN_WALLET || account === process.env.REACT_APP_ADMINWALLET);
  // if (!isAdmin) {
  //   navigate("/");
  // }
  return <>{children}</>;
}