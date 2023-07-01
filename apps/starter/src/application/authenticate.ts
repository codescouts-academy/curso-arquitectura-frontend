import { UserName } from "@/domain/model/user";
import { AuthenticationService } from "@/domain/services/AuthenticationService";
import { UserStorageService } from "@/domain/services/UserStorageService";

export class AuthenticateUseCase {
  constructor(
    private readonly authenticationService: AuthenticationService,
    private readonly userStorageService: UserStorageService
  ) {}

  public async execute(name: UserName, email: Email): Promise<void> {
    const user = await this.authenticationService.auth(name, email);

    this.userStorageService.updateUser(user);
  }
}
