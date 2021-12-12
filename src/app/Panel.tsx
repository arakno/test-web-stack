import React from 'react';

type Props = {
    title: string
    url: string
}

const Panel = ({...props}: Props) => (
    <div {...props} id="panel" className="users-panel">
      <ul>
        <li className="frame">
            <img src={props.url} alt="User avatar" className="avatar"/>
            <p className="title">{props.title}</p>
        </li>
      </ul>
    </div>
  )

  export default Panel