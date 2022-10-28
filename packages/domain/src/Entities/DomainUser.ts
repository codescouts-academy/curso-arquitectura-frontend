export interface DomainUser {
  hasPermission(permissions: string[]): boolean;
}
