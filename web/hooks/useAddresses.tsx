import { AddressContextProps, AddressContext } from "@/context/address-context";
import React from "react";

export default function useAddresses(): AddressContextProps {
  const context = React.useContext(AddressContext);
  return context;
}
