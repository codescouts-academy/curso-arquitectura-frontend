import { mock } from "jest-mock-extended"

import { CartStorageService } from "../domain/services/CartStorageService"
import { NotificationService } from "../domain/services/NotificationService"

import { AddToCartUseCase } from "./add-to-cart"

import { User } from "../domain/model/user"
import { Product } from "../domain/model/product"
import { Cart } from "../domain/model/cart"

describe("AddToCart should", () => {
    const cartMock = mock<Cart>();
    const cartStorage = mock<CartStorageService>({
        cart: cartMock
    });
    const notifier = mock<NotificationService>();

    test("show message when user has allergies to any ingredient of a product", () => {
        const ingredientThatUserHasAllergy = "cacahuete";

        const user = new User("FAKE", "FAKE", "FAKE", [], [
            ingredientThatUserHasAllergy,
            "cacao"
        ], []);

        const productWithAllergies = new Product("FAKE", "FAKE", 0, [ingredientThatUserHasAllergy]);

        const addToProduct = new AddToCartUseCase(cartStorage, notifier);

        addToProduct.execute(user, productWithAllergies);

        expect(notifier.notify).toHaveBeenCalledWith("¡Esta cookie es peligrosa para su salud! 😱");
        expect(cartMock.addProduct).toBeCalledTimes(0);
    })

    test("add product to cart", () => {
        const user = new User("FAKE", "FAKE", "FAKE", [], [
            "cacahuete",
            "cacao"
        ], []);

        const productWithNoAllergies = new Product("FAKE", "FAKE", 0, ["malvavisco"]);

        const addToProduct = new AddToCartUseCase(cartStorage, notifier);

        addToProduct.execute(user, productWithNoAllergies);

        expect(notifier.notify).toBeCalledTimes(0);
        expect(cartMock.addProduct).toHaveBeenCalledWith(productWithNoAllergies)
        expect(cartStorage.updateCart).toHaveBeenCalledWith(cartMock);
    })
})