import FlatButton from 'material-ui/FlatButton';
import React from 'react';

export default function(props){
  return <FlatButton {...props} labelStyle={{textTransform: "none", padding: 0, fontWeight: "normal"}} hoverColor="none"/>
}
