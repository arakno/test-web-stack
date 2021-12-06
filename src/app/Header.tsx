import React from 'react';

import './search.scss'

const Header = (props: any) => {
    return (
      <div id="body">
        <form action="" className="input-search">
          <label htmlFor="search">Users List</label>
          <input 
            id="search" 
            type="text" 
            className="searchbox"
            placeholder="Search..." 
            value={props.value}
            onChange={(event) => props.filterUser(event.target.value)}
          />
        </form>
      </div>
    );
  };
  
  export default Header;
  