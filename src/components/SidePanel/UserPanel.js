import React, { Component } from 'react';
import { Grid, GridRow, Header, Icon, Dropdown } from 'semantic-ui-react';
import { userInfo } from 'os';

export class UserPanel extends Component {
  dropdownOptions = () => [
    {
      key: 'user',
      text: (
        <span>
          Signed in as <strong>User</strong>
        </span>
      ),

      disabled: true
    },

    { key: 'avatar', text: <span>Change Avatar</span> },
    { key: 'signout', text: <span>Signed Out</span> }
  ];

  render() {
    return (
      <Grid style={{ background: '#4c3c4c' }}>
        <Grid.Column>
          <GridRow style={{ padding: '1.2em', margin: 0 }}>
            {/* App Header */}
            <Header inverted floated="left" as="h2">
              <Icon name="code" />
              <Header.Content>DevChat</Header.Content>
            </Header>
          </GridRow>
        </Grid.Column>
        {/* User DropDown */}
        <header style={{ padding: '0.25' }} as="h4" inverted>
          <Dropdown
            trigger={<span>User</span>}
            options={this.dropdownOptions()}
          />
        </header>
      </Grid>
    );
  }
}

export default UserPanel;
