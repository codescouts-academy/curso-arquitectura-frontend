import { NotificationService } from "../../domain/services/NotificationService";

export const useNotifier = (): NotificationService => {
  return {
    notify: (message: string) => window.alert(message),
  };
};
