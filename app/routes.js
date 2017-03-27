// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
    // call back signature: cb(err, component)
  cb(null, componentModule.default);
};
/* loadModule = function(cb){
    return function(componentModule){
        return cb(null, componentModule.default)
    }
}
*/

export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars

  return [
    {
      path: '/',
      name: 'home',
      // getComponent is asynchronous and only called when needed.
      getComponent(nextState, cb) {
          // importModules is a array of Promise objects, in this case, the parameters of resolve function of Promise is components imported.
          // thus the array of components will be the parameters of then() function.
        const importModules = Promise.all([
          import('containers/HomePage'),
        ]);

        /* renderRoute = function(componentModule){
            return cb(null, componentModule.default)
        }
        */
        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
            // renderRoute(component) = cb(null, componentModule.default)
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },
    {
      path: '/auth',
      name: 'authentication',
      getComponent(nextState, cb) {
        import('containers/Authentication')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
    {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
