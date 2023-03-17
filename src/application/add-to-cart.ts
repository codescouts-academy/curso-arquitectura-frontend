import { User } from "@domain/model/user";
import { Product } from "@domain/model/product";

import { NotificationService } from "@domain/services/NotificationService";
import { CartStorageService } from "@domain/services/CartStorageService";

export class AddToCartUseCase {
  private warningMessage: string =
    "¡Esta cookie es peligrosa para su salud! 😱";

  constructor(
    private storage: CartStorageService,
    private notifier: NotificationService
  ) { }

  public execute(user: User, product: Product): void {
    if (user.hasAllergy(product.toppings)) {
      this.notifier.notify(this.warningMessage);

      return;
    }
    const cart = this.storage.cart;

    cart.addProduct(product);

    this.storage.updateCart(cart);
  }
}


