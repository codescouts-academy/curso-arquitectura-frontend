import { fakeApi } from "@infrastructure/rest/api";

import { User, UserName } from "@domain/model/user";

import { AuthenticationService } from "@domain/services/AuthenticationService";

export const useAuth = (): AuthenticationService => {
  return {
    auth(name: UserName, email: Email) {
      return fakeApi(
        new User(
          "sample-user-id",
          name,
          email,
          ["malvavisco", "cacahuete"],
          ["cacao", "cereza"],
          name === "admin" ? ["admin"] : ["normal"]
        )
      );
    },
  };
};
