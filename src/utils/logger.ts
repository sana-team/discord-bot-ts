import { ILogObj, Logger } from 'tslog'

export const logger: Logger<ILogObj> = new Logger({
  hideLogPositionForProduction: true,
})
