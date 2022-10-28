import { User, UserName } from "../../domain/model/user";
import { AuthenticationService } from "../../domain/services/AuthenticationService";
import { fakeApi } from "../rest/api";

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
