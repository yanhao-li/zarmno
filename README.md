Menu Plus is an online menu.

## Demo
The running example is deployed on AWS: [Menu Plus](http://menuplus.yanhaoli.com)


## Usage
```
npm install
npm start
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
