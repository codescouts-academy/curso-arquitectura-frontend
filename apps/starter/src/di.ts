import { register } from "ts-injecty";

import { AddToCartUseCase } from "./application/add-to-cart";
import { AuthenticateUseCase } from "./application/authenticate";
import { LogoutUseCase } from "./application/logout";
import { OrderProductsUserCase } from "./application/order-products";
import { useAuth } from "./infrastructure/services/AuthenticationService";
import { useCartStorage } from "./infrastructure/services/CartStorageService";
import { useUserStorage } from "./infrastructure/services/UserStorageService";

export const buildDependencies = (builder: typeof register) => {
  return [
    builder(LogoutUseCase)
      .withDependencies(useUserStorage, useCartStorage)
      .build(),

    builder(AuthenticateUseCase)
      .withDependencies(useAuth, useUserStorage)
      .build(),

    builder(AddToCartUseCase).build(),

    builder(OrderProductsUserCase).build(),
  ];
};
