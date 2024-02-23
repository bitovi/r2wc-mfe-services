import { services } from "../../fixtures/offered-services";

export interface OfferedServices {
  title: string;
  src: string;
  href: string;
}

export const getServices = async (): Promise<OfferedServices[]> => {
  return services;
};
