import { useState, type FC, useEffect } from "react";

import r2wc from "@r2wc/react-to-web-component";

import Services from "./Services";
import { OfferedServices, getServices } from "../../services/offered-services";

type ServiceFetchStates =
  | {
      isLoading: true;
      error?: undefined;
      services?: undefined;
    }
  | { isLoading: false; error: Error; services?: undefined }
  | { isLoading: false; error?: undefined; services: OfferedServices[] };

const useServices = (): ServiceFetchStates => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error>();
  const [services, setServices] = useState<OfferedServices[]>();

  useEffect(() => {
    getServices()
      .then(setServices)
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, []);

  return {
    services,
    isLoading,
    error,
  } as ServiceFetchStates;
};

const ServicesWebComponentWrapper: FC = () => {
  const { services, isLoading, error } = useServices();

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>Error Loading Services</div>;
  }

  return <Services services={services} />;
};

customElements.define("bitovi-services", r2wc(ServicesWebComponentWrapper));
