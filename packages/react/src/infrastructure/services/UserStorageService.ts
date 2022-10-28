import { create } from "@codescouts/store";
import { User } from "../../domain/model/user";
import { UserStorageService } from "../../domain/services/UserStorageService";

export const useUserStorage = create<UserStorageService>((set) => ({
  updateUser: (user: User) => set({ user }),
  logout: () => set({ user: undefined })
}))
  .withPersist(User)
  .build();
