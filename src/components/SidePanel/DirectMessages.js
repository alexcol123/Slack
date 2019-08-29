import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';

class DirectMessages extends Component {
  state = {
    users: []
  };

  render() {
    const users = this.state;
    return (
      <Menu.Menu className="menu">
        <Menu.Item>
          <span>
            <Icon name="mail"></Icon> DIRECT MESSAGES
          </span>{' '}
          ({users.length})
        </Menu.Item>
        {/* Users to sen Direct Messages */}
      </Menu.Menu>
    );
  }
}

export default DirectMessages;
