import { Address } from "@/interfaces/address";
import { createContext, useEffect, useState } from "react";
import { toast } from "sonner";

export interface AddressContextProps {
  isLoading: boolean;
  addresses: Address[];
  addAddress: (address: Address) => void;
}

export const AddressContext = createContext<AddressContextProps>(
  {} as AddressContextProps,
);

export function AddressContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    verifyExistenceOfAddresses();
  }, []);

  function verifyExistenceOfAddresses() {
    setIsLoading(true);
    const local_addresses = localStorage.getItem("nd_addresses");

    if (!local_addresses || local_addresses === null) {
      localStorage.removeItem("nd_addresses");
      setAddresses([]);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      return;
    }

    setAddresses(JSON.parse(local_addresses));
    // console.log("address context: ", JSON.parse(local_addresses));
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return;
  }

  function addAddress(address: Address) {
    setIsLoading(true);

    // console.log("address context: ", address);

    // Verify if address already exists
    if (
      addresses.some(
        (a) =>
          a.address === address.address &&
          a.buyer === address.buyer &&
          a.zipCode === address.zipCode &&
          a.city === address.city &&
          a.neighborhood === address.neighborhood &&
          a.complement === address.complement,
      )
    ) {
      const defaultAddress = addresses.filter(
        (a) =>
          a.address === address.address &&
          a.buyer === address.buyer &&
          a.zipCode === address.zipCode &&
          a.city === address.city &&
          a.neighborhood === address.neighborhood &&
          a.complement === address.complement,
      )[0];
      console.log("default address: ", defaultAddress);
      if (address.isDefault !== defaultAddress.isDefault) {
        const new_address = {
          ...defaultAddress,
          id: defaultAddress.id,
          isDefault: address.isDefault,
        };
        if (addresses.some((a) => a.id === new_address.id)) {
          const clear_list: Address[] = addresses.filter(
            (a) => a.id !== new_address.id,
          );

          console.log("lista sem o endereço atual", clear_list);
          setAddresses([...clear_list, new_address]);
          localStorage.setItem(
            "nd_addresses",
            JSON.stringify([...clear_list, new_address]),
          );
          toast.success("Endereço padrão atualizado");
        }
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
        return;
      }
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
      return;
    }

    // Check if an address is already default option
    if (address.isDefault && addresses.some((a) => a.isDefault)) {
      const defaultAddress = addresses.filter((a) => a.isDefault === true)[0];
      defaultAddress.isDefault = false;
      setAddresses([
        ...addresses.filter((a) => a.id !== defaultAddress.id),
        defaultAddress,
      ]);
      const newAddress = { ...address };
      setAddresses([...addresses, newAddress]);
      localStorage.setItem(
        "nd_addresses",
        JSON.stringify([...addresses, newAddress]),
      );
      // toast.success("Endereço adicionado");
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
      return;
    }
    const newAddress = { ...address };
    setAddresses([...addresses, newAddress]);
    localStorage.setItem(
      "nd_addresses",
      JSON.stringify([...addresses, newAddress]),
    );
    toast.success("Endereço adicionado");
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return;
  }

  return (
    <AddressContext.Provider value={{ isLoading, addAddress, addresses }}>
      {children}
    </AddressContext.Provider>
  );
}
