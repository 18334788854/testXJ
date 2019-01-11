const colors = require("colors");
const logger={
info(msg){
console.log(`${new Date()}-[INFO]:${colors.green(msg)}`);
},
warn(msg){
console.log(`${new Date()}-[WARN]:${colors.yellow(msg)}`);
},
error(msg){
console.log(`${new Date()}-[ERROR]:${colors.red(msg)}`);
}
};

logger.info('info message');
logger.warn('warn message');
logger.error('error message');
