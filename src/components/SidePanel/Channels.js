import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';

export class Channels extends Component {
  state = {
    channels: []
  };

  render() {
    const { channels } = this.state;

    return (
      <div>
        <Menu.Menu style={{ paddingBottom: '2em' }}>
          <Menu.Item>
            <span>
              <Icon name="exchange" /> CHANNELS
            </span>{' '}
            ({channels.length}) <Icon name="add" />
          </Menu.Item>
          {/* channels */}
        </Menu.Menu>
      </div>
    );
  }
}

export default Channels;
