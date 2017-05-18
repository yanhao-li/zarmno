Menu Plus is an online menu service.


## Usage
npm install
npm start

## Redux Store Structure
```javascript
{
  auth:{
    isAuthenticated: Boolean
    user: {
      id:
      email:
      role:
    }
    favorites: []
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



}
```



## Reference
Client: React, Redux
sound-redux

Server: Express
Ghost
