import React, {Component} from 'react';
import Header from './Header'
import Body from './Body'


type State = {
  value: number
}

class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props)
    this.state = {
        value: 1
      }
    this.updateMessage = this.updateMessage.bind(this)
  }
  
  updateMessage = (userId: number) => {
    this.setState(() => ({
        value: userId
    }))
  }

  render(): JSX.Element {
    const {value} = this.state

    return (
      <div id="body">
        <Header value={value} />
        <Body updateMessage={this.updateMessage} value={value}/>
      </div>
    )
  }
}

export default App;
