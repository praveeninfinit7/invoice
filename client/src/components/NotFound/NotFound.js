import React from 'react';

class NotFound extends React.Component{
    render(){
        return(
           
            <div style={{alignItems:'center'}}><h2 ><strong >NotFound!111!</strong></h2>
            
            <img style={{width:1850, height:"880px"}} src={require('../image/404.gif')} />
            </div>
        );
    }
}

export default NotFound;