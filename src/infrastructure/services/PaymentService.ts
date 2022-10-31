import { fakeApi } from "../rest/api";
import { PaymentService } from "../../domain/services/PaymentService";

export const usePayment = (): PaymentService => {
  return {
    tryPay(amount: PriceCents) {
      return fakeApi(true);
    },
  };
};
