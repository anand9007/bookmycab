import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set role once logged in',() => {
        service.login('ADMIN');
        expect(service.role).toBe('ADMIN');
        expect(service.isUserLoggedIn()).toBeTruthy();
  })

  it('should clear role on logout', () => {
    service.login('PASSENGER');
    service.logout();
    expect(service.role).toBeNull();
    expect(service.isUserLoggedIn()).toBeFalsy();
  })
});