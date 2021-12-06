import React, {useState} from 'react';
import Button from './Button'
import Panel from './Panel'

type Props = {
  value: number
  userId: number
}

const Body = (props: Props) => {

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const {value} = props

  const showPanel = () => {
    setIsOpen(true)
  }
  
  const hidePanel = () => {
    setIsOpen(false)
  }

  return (
      <main className="app-body">
        {isOpen && <Panel userId={value}/>}
        <div className="buttons">
          <Button className="btn" onClick={showPanel}
            text="show panel"
          />
          <Button className="btn" onClick={hidePanel}
            text="hide panel"
          />
        </div>
      </main>
  )
}

export default Body 
