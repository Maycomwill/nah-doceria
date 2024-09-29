export interface Address {
  id: string;
  address: string;
  city: string;
  complement: string;
  neighborhood: string;
  zipCode: string;
  // isDefault: boolean;
  buyer: string;
}
export interface AddressWithoutId {
  address: string;
  city: string;
  complement: string;
  neighborhood: string;
  zipCode: string;
  // isDefault: boolean;
  buyer: string;
}
