import { Injectable, Provider } from "@nestjs/common";


@Injectable()
export class TestService {
    private chc: string[] = ["New TestService"]

    callMethod(str: string){
        this.chc.push(str);
        console.log('UsersService: ' + this.chc.join(','));
    }
}