import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{useRouteError().message}</i>
        
      </p>
      
    </div>
  );
}

export default Error;
