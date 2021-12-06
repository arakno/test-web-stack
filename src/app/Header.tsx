import React from 'react';

const Header = (props: any) => {
    return (
      <div id="body">
        <form action="" className="input-search">
          <label htmlFor="search">Users List</label>
          <input 
            id="search" 
            type="text" 
            placeholder="Search..." 
            value={props.value}
            onChange={(event) => props.updateMessage(event.target.value)}
          />
        </form>
      </div>
    );
  };
  
  export default Header;
  