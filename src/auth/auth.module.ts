import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: `7En9dcNs]6sSw&u£6JkZ![5W9UO/[gD4`,
    }),
  ],
})
export class AuthModule {}
