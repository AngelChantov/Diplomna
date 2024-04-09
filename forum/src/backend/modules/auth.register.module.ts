import {JwtModule} from "@nestjs/jwt";
import {Module} from "@nestjs/common";

@Module({
    imports: [JwtModule.register({ secret: 'hard!to-guess_secret' })],
    providers: [],
})
export class AuthModule {}