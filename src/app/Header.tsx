import React from 'react';

const Header = (props: any) => {
    return (
      <div id="body">
        <form action="" className="input-search">
          <label htmlFor="search"><h2>Users List</h2></label>
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
  