import base from 'base/';
import envConf from './enviroment';

const httpServer = app => {
  let port = process.env.PORT || 80;
  app.listen(envConf.port, process.env.host, (err) => {
    if (err) return base.console.error(`${err}`);
    base.console.success(`HTTP Server up on http://localhost:${port}`);
  });
};

export default httpServer; 