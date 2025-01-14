import React from 'react';

type Props = {
    title: string
    url: string
}

const Panel = ({...props}: Props) => (
    <div {...props} id="panel" className="users-panel">
      <ul>
        <li className="frame">
          <span className="avatar">
            <img src={props.url} alt="User avatar" />
            <p className="title">Jessica{props.title}</p>
          </span>
        </li>
        <li className="frame">
          <span className="avatar">
            <img src={props.url} alt="User avatar" />
            <p className="title">{props.title}</p>
          </span>
        </li>
        <li className="frame">
          <span className="avatar">
            <img src={props.url} alt="User avatar" />
            <p className="title">{props.title}</p>
          </span>
        </li>
        <li className="frame">
          <span className="avatar">
            <img src={props.url} alt="User avatar" />
            <p className="title">{props.title}</p>
          </span>
        </li>
        <li className="frame">
          <span className="avatar">
            <img src={props.url} alt="User avatar" />
            <p className="title">{props.title}</p>
          </span>
        </li>
        <li className="frame">
          <span className="avatar">
            <img src={props.url} alt="User avatar" />
            <p className="title">{props.title}</p>
          </span>
        </li>                        
      </ul>
    </div>
  )

  export default Panel