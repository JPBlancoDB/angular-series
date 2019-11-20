import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  constructor() {}

  login(email: string, password: string): Observable<string> {
    throw new Error('not implemented');
  }
}
