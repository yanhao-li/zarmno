Menu Plus is an online menu service.


## Usage
npm install
npm start

## Redux Store Structure
```javascript
{
  auth:{
    isAuthenticated: Boolean,
    user: {
      id:
      email:
      role:
    },
    isFetching: Boolean
  },

  restaurant:{
    info: {
      id:
      name:
      location:
    },
    isFetching: Boolean
    menu: []
  },

  favorites: {
    isFetching: Boolean,
    restaurants: []
  }



}
```



## Reference
Client: React, Redux
sound-redux

Server: Express
Ghost
