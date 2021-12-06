import React, {Component} from 'react';
import Header from './Header'
import Body from './Body'

type State = {
  userId: number
}

class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props)
    this.state = {
        userId: 1
      }
    this.filterUser = this.filterUser.bind(this)
  }
  
  filterUser = (userId: number) => {
    this.setState(() => ({
        userId: userId
    }))
  }

  render(): JSX.Element {
    const {userId} = this.state

    return (
      <div id="body">
        <Header filterUser={this.filterUser} />
        <Body value={userId} />
      </div>
    )
  }
}

export default App;
