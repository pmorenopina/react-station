import base from 'base/';
import envConf from './enviroment';

const httpServer = app => {
  let port = envConf.port || process.env.PORT || 80;
  app.listen(envConf.port, (err) => {
    if (err) return base.console.error(`${err}`);
    base.console.success(`HTTP Server up on http://localhost:${port}`);
  });
};

export default httpServer; 