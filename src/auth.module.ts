import { Module } from '@nestjs/common';
import { AuthService } from './auth.services';

import { JwtStrategy } from './jwt.strategy';
import { UserModule } from './user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { User } from './user.schema';


@Module({
  imports: [
     UserModule,
    PassportModule,
    JwtModule.register({
      secret:"cncjmvhjnvgjgb",
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService, JwtStrategy,User],
  exports: [AuthService],
})
export class AuthModule {}