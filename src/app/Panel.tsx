import React from 'react';

type Props = {
    title: string
    url: string
}

const Panel = ({...props}: Props) => (
    <div {...props} id="panel" className="users-panel">
      <table>
          <tbody>
            <tr>
                <td>   
                    <img src={props.url} alt="User avatar" />
                    <p>{props.title}</p>
                </td>
            </tr>
        </tbody>
      </table>
    </div>
  )

  export default Panel