import { CookiesRepository } from "@/domain/services/CookiesRepository";

export class CookiesLoaderUseCase {
  constructor(private readonly cookiesRepository: CookiesRepository) {}

  execute() {
    return this.cookiesRepository.getAll();
  }
}
