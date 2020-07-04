import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TestModule } from './test/test.module'
import { I18nModule, QueryResolver, I18nJsonParser } from 'nestjs-i18n'
import * as path from 'path'


@Module({
    imports: [
        I18nModule.forRoot({
            fallbackLanguage: 'de',
            parser: I18nJsonParser,
            resolvers: [
                new QueryResolver(['lang', 'locale', 'l'])
            ],
            parserOptions: {
                path: path.join(__dirname, '/../i18n/'),
            }
        }),
        TestModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
