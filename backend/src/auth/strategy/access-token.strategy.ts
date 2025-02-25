import { ApiConfig } from '@common/config/api-config';
import { TokenPayload } from '@common/jwt/types/auth-token';
import { DataValidation } from '@common/utils/data.helper';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtAccessTokenStrategy extends PassportStrategy(Strategy, 'access_token') {
  constructor(
    private readonly authService,
    private readonly jwtService: JwtService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: ApiConfig.JWT_ACCESS_SECRET,
      // validate 함수에 첫번째 인자에 request를 넘겨줌
      passReqToCallback: true,
    });
  }

  async validate(req: Request, payload: TokenPayload) {
    // request에 저장을 해놔야 Guard후에 controller 메서드에서 사용 가능

    const user = await this.authService.findByUserById(payload.sub);

    if (DataValidation.isEmpty(user)) {
      throw new Error('todo auth error ');
    }
    req.user = payload;
    return user;
  }
}
