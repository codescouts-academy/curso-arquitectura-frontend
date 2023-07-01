export type ProductTitle = string;
export class Product {
  constructor(
    public id: UniqueId,
    public title: ProductTitle,
    public price: PriceCents,
    public toppings: Ingredient[]
  ) {}
}

export const ingredients: Record<Ingredient, string> = {
  chocolate: "Chocolate",
  cacao: "Cacao Power",
  cereza: "Cereza",
  malvavisco: "Malvavisco",
  cacahuete: "Cachauate",
};
