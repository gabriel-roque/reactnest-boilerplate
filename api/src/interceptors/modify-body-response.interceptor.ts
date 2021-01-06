import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { application } from 'config/application';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ModifyBodyResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => ({
        origin: application.origin,
        version: application.uriPrefix,
        data,
      })),
    );
  }
}
