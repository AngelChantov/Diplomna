import {JwtModule} from "@nestjs/jwt";
import {jwtConstants} from "../constants";

JwtModule.registerAsync({
    useFactory: () => ({
        secret: jwtConstants.secret
    })
});