type Props = {
    value: number
    title: string
    url: string
}

const Panel = ({value, ...props}: Props) => (
    <div {...props} id="panel" className="users-panel">
      <table>
          <tbody>
            <tr>
                <td>   
                    <img src={props.url} alt="user-avatar" />
                    <p>{props.title}</p>
                </td>
            </tr>
        </tbody>
      </table>
    </div>
  )

  export default Panel