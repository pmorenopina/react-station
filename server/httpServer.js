import base from 'base/';
import envConf from './enviroment';

const httpServer = app => {
  let port = process.env.PORT || envConf.port;
  app.listen(port, (err) => {
    if (err) return base.console.error(`${err}`);
    base.console.success(`HTTP Server up on http://0.0.0.0:${port}`);
  });
};

export default httpServer; 