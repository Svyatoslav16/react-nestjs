import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {
        // this.appService = appService;
    }

    @Get()
    getHello(): string {
        console.log('this: ', this);
        return this.appService.getHello();
    }
}
