import {All, Controller, Logger, Req} from '@nestjs/common'


@Controller('test')
export class TestController {

    @All()
    async test(@Req() req) {
        const {i18nLang} = req

        const data = {
            i18nLang
        }

        console.log('req', req)
        console.log('req.i18nLang', req.i18nLang)

        return data

    }
}
