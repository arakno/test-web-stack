type Props = {
    value: number
}

const Panel = ({value, ...props}: Props) => (
    <div {...props} id="panel" className="users-panel">
      <table>
          <tbody>
            <tr>
                <td>   
                    
                </td>
            </tr>
        </tbody>
      </table>
    </div>
  )

  export default Panel