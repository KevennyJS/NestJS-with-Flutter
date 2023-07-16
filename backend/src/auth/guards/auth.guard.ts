import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import {UnauthorizedException} from '@nestjs/common';
import { Request } from 'express';
import { FirebaseService } from '../firebase/firebase.service';

// Criar uma conta do firebase
// Instalar o Firebase Admin
// Implementar check

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private readonly firebase: FirebaseService){}

  canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    const [prefix, token] = request.headers.authorization?.split(' ');

    if(!token) throw new UnauthorizedException();

    return this.firebase.verifyToken(token);
  }
}
