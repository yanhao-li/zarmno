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

function requireAuth (nextState, replace, callback) {
  const token = localStorage.getItem('jwtToken');
  if (!token) replace('/login');
  return callback()
}

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
      path: 'login',
      name: 'authentication',
      getComponent(nextState, cb) {
        import('containers/Authentication/LoginForm')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
    {
      path: 'signup',
      name: 'authentication',
      getComponent(nextState, cb) {
        import('containers/Authentication/SignUpForm')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
    {
      path: 'restaurant',
      name: 'restaurantList',
      onEnter: requireAuth,
      getComponent(nextState, cb) {
        import('containers/Restaurant/RestaurantList')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
    // {
    //   path: '/menu(/:id)',
    //   name: 'menu',
    //   getComponent(nextState, cb) {
    //     import('containers/MenuPage')
    //       .then(loadModule(cb))
    //       .catch(errorLoading);
    //   },
    // },
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
