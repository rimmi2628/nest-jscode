import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

  constructor() {
    

    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey:"cncjmvhjnvgjgb"
    });

  }

  async validate(payload: any) {
    const bearerToken = ExtractJwt.fromAuthHeaderAsBearerToken()(null); // Access the bearer token
    console.log("Bearer Token:", bearerToken);
    return { _id: payload.sub, email: payload.email };
  }
}