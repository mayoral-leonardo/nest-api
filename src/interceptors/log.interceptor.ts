import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export class LogInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const dt = Date.now();

    return next.handle().pipe(
      tap(() => {
        const { method, url } = context.switchToHttp().getRequest();

        console.log(`Method: ${method}`);
        console.log(`URL: ${url}`);
        console.log(`Execution duration: ${Date.now() - dt} milliseconds `);
      }),
    );
  }
}
