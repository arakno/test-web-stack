import React, {useState} from 'react';
import Button from './Button'
import Panel from './Panel'

type Props = {
  userId: string
  title: string
  url: string
}

const Body = (props: Props) => {

  const [isOpen, setIsOpen] = useState<boolean>(true)
  const {userId} = props

  const showPanel = () => {
    setIsOpen(true)
  }
  
  const hidePanel = () => {
    setIsOpen(false)
  }

  return (
      <main className="app-body">
        {isOpen && <Panel {...props} />}
        {/* if more avatars */}
        <div className="buttons">
          <Button className="btn" onClick={showPanel}
            text="Load more"
          />
        </div>
      </main>
  )
}

export default Body 
