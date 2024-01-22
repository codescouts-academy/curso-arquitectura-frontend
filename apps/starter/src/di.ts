import { useEventDispatcher } from "@codescouts/ui";
import { register } from "ts-injecty";

import { AddToCartUseCase } from "@/application/add-to-cart";
import { AuthenticateUseCase } from "@/application/authenticate";
import { LogoutUseCase } from "@/application/logout";
import { OrderProductsUserCase } from "@/application/order-products";
import { useAuth } from "@/infrastructure/services/AuthenticationService";
import { useCartStorage } from "@/infrastructure/services/CartStorageService";
import { useNotifier } from "@/infrastructure/services/NotificationService";
import { useOrdersStorage } from "@/infrastructure/services/OrdersStorageService";
import { usePayment } from "@/infrastructure/services/PaymentService";
import { useUserStorage } from "@/infrastructure/services/UserStorageService";

import { CookiesLoaderUseCase } from "./application/cookies-loader";
import { CookiesRepositoryImp } from "./infrastructure/services/CookiesRepositoryImp";

export const buildDependencies = (builder: typeof register) => {
  return [
    builder(LogoutUseCase)
      .withDependencies(useUserStorage, useCartStorage)
      .build(),

    builder(AuthenticateUseCase)
      .withDependencies(useAuth, useUserStorage)
      .build(),

    builder(AddToCartUseCase)
      .withDependencies(useCartStorage, useNotifier)
      .build(),

    builder(OrderProductsUserCase)
      .withDependencies(
        useOrdersStorage,
        useCartStorage,
        usePayment,
        useNotifier,
        useEventDispatcher
      )
      .build(),

    builder(CookiesLoaderUseCase).withDependency(CookiesRepositoryImp).build(),
  ];
};
