import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { RequestsWIthUser } from '../../../auth/type/http-auth.type';
import { applyDecorators, UseGuards } from '@nestjs/common';
import { JwtAccessTokenGuard } from '../guard/access-token.guard';

export const HttpUser: () => any = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
  const request: RequestsWIthUser = ctx.switchToHttp().getRequest();
  return request.user;
});
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const HttpAuth = (): ((...args: any) => void) => {
  return applyDecorators(UseGuards(JwtAccessTokenGuard));
};
