import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <>
      <h1>
        Not Found
      </h1>
      <Link to="/">
        Home
      </Link>
    </>
  );
}

export default NotFound;
