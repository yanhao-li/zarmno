Menu Plus is an online menu service.

# Usage
------

npm install
npm start

# Redux Tree Design
------
```javascript
{
  auth:{
    isAuthencated: Boolean
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
    menu: []
  },

}
```


# Reference
------
Client: React, Redux
sound-redux

Server: Express
Ghost
