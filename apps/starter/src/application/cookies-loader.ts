import { CookiesRepositoryFactory } from "@/domain/services/CookiesRepositoryFactory";
import { UserStorageService } from "@/domain/services/UserStorageService";

export class CookiesLoaderUseCase {
  constructor(
    private readonly cookiesRepositoryFactory: CookiesRepositoryFactory,
    private readonly userStorage: UserStorageService
  ) {}

  async execute() {
    const user = this.userStorage.user;

    return this.cookiesRepositoryFactory.create(user).getAll();
  }
}
