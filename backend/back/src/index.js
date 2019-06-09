import { createServer } from './app';
import logger from './util/logger';

import * as configs from '../configs/config.json'

const log = logger('[Start App]');

async function main() {
  try {
    const server = (await createServer()).listen(configs.serverSettings.port);
    log.info(`Server listening on ${server.address().port}`);
  } catch (e) {
    log.error(e.message);
    process.exit(1);
  }
}

if (!module.parent) {
  main();
}
