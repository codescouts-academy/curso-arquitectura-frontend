import { useEventDispatcher } from "@codescouts/ui";
import { register } from "ts-injecty";

import { AddToCartUseCase } from "./application/add-to-cart";
import { AuthenticateUseCase } from "./application/authenticate";
import { LogoutUseCase } from "./application/logout";
import { OrderProductsUserCase } from "./application/order-products";
import { useAuth } from "./infrastructure/services/AuthenticationService";
import { useCartStorage } from "./infrastructure/services/CartStorageService";
import { useOrdersStorage } from "./infrastructure/services/OrdersStorageService";
import { useUserStorage } from "./infrastructure/services/UserStorageService";

export const buildDependencies = (builder: typeof register) => {
  return [
    builder("useEventDispatcher")
      .withDynamic(() => useEventDispatcher())
      .build(),

    builder("useUserStorage")
      .withDynamic(() => useUserStorage())
      .build(),

    builder("useCartStorage")
      .withDynamic(() => useCartStorage())
      .build(),

    builder("useAuth")
      .withDynamic(() => useAuth())
      .build(),

    builder("useOrdersStorage")
      .withDynamic(() => useOrdersStorage())
      .build(),

    builder(LogoutUseCase)
      .withDependency("useUserStorage")
      .and("useCartStorage")
      .build(),

    builder(AuthenticateUseCase)
      .withDependency("useAuth")
      .and("useUserStorage")
      .build(),

    builder(AddToCartUseCase).build(),

    builder(OrderProductsUserCase).build(),
  ];
};
