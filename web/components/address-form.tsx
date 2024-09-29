import React, { FormEvent, useEffect, useState } from "react";
import { Button } from "./ui/button";
import useAddresses from "@/hooks/useAddresses";
import { Checkbox } from "./ui/checkbox";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectItem,
  SelectValue,
} from "./ui/select";
import { nanoid } from "nanoid";
import useCart from "@/hooks/useCart";

function AddressForm({
  setStep,
}: {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}) {
  const { addAddress, addresses } = useAddresses();
  const [defaultAddress, setDefaultAddress] = useState(
    addresses.length !== 0 ? addresses[0] : undefined,
  );
  const [address, setAddress] = useState(
    defaultAddress !== undefined ? defaultAddress.address : "",
  );
  const [neighborhood, setNeighborhood] = useState(
    defaultAddress !== undefined ? defaultAddress.neighborhood : "",
  );
  const [city, setCity] = useState(
    defaultAddress !== undefined ? defaultAddress.city : "",
  );
  const [zipCode, setZipcode] = useState(
    defaultAddress !== undefined ? defaultAddress.zipCode : "",
  );
  const [complement, setComplement] = useState(
    defaultAddress?.complement || "",
  );
  const [buyer, setBuyer] = useState(
    defaultAddress !== undefined ? defaultAddress.buyer : "",
  );
  // const [isDefault, setIsDefault] = useState(
  //   defaultAddress?.isDefault || false,
  // );
  const [delivery, setDelivery] = useState(true);
  const { handleDeliveryOption, handleSelectAddress } = useCart();

  function handleAddressSelect(value: string) {
    // console.log(value);
    setDefaultAddress(addresses.filter((a) => a.id === value)[0]);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const newId = nanoid();
    handleDeliveryOption(delivery);
    {
      delivery &&
        (addAddress({
          id: newId,
          address,
          neighborhood,
          city,
          zipCode,
          complement,
          buyer,
          // isDefault,
        }),
        handleSelectAddress({
          id: newId,
          address,
          neighborhood,
          city,
          zipCode,
          complement,
          buyer,
          // isDefault,
        }));
    }
    setStep(2);
  }

  // function handleCheckedChange() {
  //   setIsDefault(!isDefault);
  //   return;
  // }

  function handleDelivery() {
    setDelivery(!delivery);
    return;
  }

  // Atualiza os campos de input quando o endereço selecionado mudar
  useEffect(() => {
    if (defaultAddress) {
      setAddress(defaultAddress.address);
      setNeighborhood(defaultAddress.neighborhood);
      setCity(defaultAddress.city);
      setZipcode(defaultAddress.zipCode);
      setComplement(defaultAddress.complement || "");
      setBuyer(defaultAddress.buyer);
      // setIsDefault(defaultAddress.isDefault);
    }
  }, [defaultAddress]);

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-2 pb-4 pt-2">
      {delivery && (
        <>
          <div className="flex flex-col space-y-2">
            <label htmlFor="buyer">Seu nome:</label>
            <input
              required
              className="rounded-md border-none bg-transparent p-2 outline-none ring-1 ring-primary-400 focus-visible:ring-primary-500"
              type="text"
              id="street"
              value={buyer}
              onChange={(e) => setBuyer(e.target.value)}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="street">Endereço:</label>
            <input
              required
              className="rounded-md border-none bg-transparent p-2 outline-none ring-1 ring-primary-400 focus-visible:ring-primary-500"
              type="text"
              id="street"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="neighborhood">Bairro:</label>
            <input
              required
              className="rounded-md border-none bg-transparent p-2 outline-none ring-1 ring-primary-400 focus-visible:ring-primary-500"
              type="text"
              id="neighborhood"
              value={neighborhood}
              onChange={(e) => setNeighborhood(e.target.value)}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="city">Cidade:</label>
            <input
              required
              className="rounded-md border-none bg-transparent p-2 outline-none ring-1 ring-primary-400 focus-visible:ring-primary-500"
              type="text"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="complement">Complemento:</label>
            <input
              className="rounded-md border-none bg-transparent p-2 outline-none ring-1 ring-primary-400 focus-visible:ring-primary-500"
              type="text"
              id="complement"
              value={complement}
              onChange={(e) => setComplement(e.target.value)}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="zipcode">Cep:</label>
            <input
              required
              className="rounded-md border-none bg-transparent p-2 outline-none ring-1 ring-primary-400 focus-visible:ring-primary-500"
              type="text"
              id="zipcode"
              value={zipCode}
              onChange={(e) => setZipcode(e.target.value)}
            />
          </div>

          {/* Checkbox para definir o endereço como padrão
           <div className="flex items-center space-x-2">
            <Checkbox
              checked={isDefault}
              onCheckedChange={handleCheckedChange}
              id="isDefault"
            />
            <label htmlFor="isDefault">Endereço padrão</label>
          </div> */}
          <div className="pt-2">
            <Select onValueChange={(value) => handleAddressSelect(value)}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione um endereço cadastrado" />
              </SelectTrigger>
              <SelectContent>
                {addresses.map((address) => (
                  <SelectItem key={address.id} value={address.id}>
                    {address.buyer} |{" "}
                    {address.address.slice(0, 30).concat("...")}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </>
      )}
      <div className="flex items-center space-x-2">
        <Checkbox
          id="delivery"
          checked={delivery}
          onCheckedChange={handleDelivery}
        />
        <label htmlFor="delivery">Delivery</label>
      </div>
      {!delivery ? (
        <div className="flex flex-col">
          <span className="text-xs">
            Você irá fazer a retirada dos produtos!
          </span>
          <span className="text-xs">
            O endereço será fornecido no final da compra.
          </span>
        </div>
      ) : (
        <div>
          <span className="text-[0.6rem]">
            O valor do frete pode variar de acordo com o endereço de entrega
          </span>
        </div>
      )}
      <div className="flex w-full flex-row space-x-4 pt-4">
        <Button disabled variant={"secondary"}>
          Voltar
        </Button>
        <Button type="submit">Avançar</Button>
      </div>
    </form>
  );
}

export default AddressForm;
