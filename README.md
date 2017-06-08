Menu Plus is an online menu.

## Demo
The running example is deployed on AWS: [Menu Plus](http://menuplus.yanhaoli.com)


## Usage
```
npm install
npm start
```

## Tech Stack
React
React Router
Redux
ImmutableJS
Styled-Component

### Unit Testing
Jest
Enzyme

### Linting
ESLint

## Project Structure
```
menu-plus/
  app/
    components/
      App/
      Auth/
      Button/
      Card/
      DishPage/
      FavoritePage/
      HomePage/
      List/
      NavBar/
      NotFoundPage/
      ProfilePage/
      RestaurantPage/
    containers/
      App/
      Auth/
      DishPage/
      FavoritePage/
      HomePage/
      NotFoundPage/
      ProfilePage/
      RestaurantPage/
      RestaurantsList/
  server/
    api/
    config/
    middlewares/
    migrations/
    models/
    shared/
    utils/
  README.md
```

## Redux Store Structure
```javascript
{
  auth:{
    isFetching: Boolean,
    isAuthenticated: Boolean,
    user: {
      avatar:
      id:
      email:
      role:
    },
  },

  //current viewing restaurant
  restaurant:{
    isFetching: Boolean,
    info: {
      id:
      name:
      location:
    },
    menu: [], //all dish objects belongs to this restaurant
    comments: []
  },

  favorites: {
    isFetching: Boolean,
    restaurants: [] //all favorite restaurants id
  },

}
```



## Reference
Client: React, Redux
sound-redux, Todo

Server: Express
Ghost

CSS: Styled-Component
