import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header } from 'semantic-ui-react';
import { Menu } from 'semantic-ui-react';
import { Dropdown } from 'semantic-ui-react';
import { Icon } from 'semantic-ui-react';
import { Image, Grid, Divider, List, Input } from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Menu.Item fitted><Icon name="facebook f"/></Menu.Item>
            <Menu.Item fitted><Icon name="twitter"/></Menu.Item>
            <Menu.Item fitted><Icon name="pinterest"/></Menu.Item>
            <Menu.Item fitted><Icon name="instagram"/></Menu.Item>
            <Menu.Item fitted position="right"><Icon name="home"/></Menu.Item>
            <Menu.Item fitted><Icon name="search"/></Menu.Item>
            <Menu.Item fitted><Icon name="user"/></Menu.Item>
            <Dropdown item text="MY CART 0" icon="shop">
              <Dropdown.Menu>
                <Dropdown.Item>My cart is currently empty.</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Menu>
    );
  }
}

class IslandSnowLogo extends React.Component {
  render() {
    return (

        <Image src='https://cdn.shopify.com/s/files/1/1035/5187/t/5/assets/logo.png?18002885318982737731' centered/>

    );
  }
}

class MiddleMenu extends React.Component {
  render() {
    return (

        <Container className="centered grid">
          <Menu borderless compact>
            <Dropdown item text="Men" icon="dropdown">
              <Dropdown.Menu>
                <Dropdown.Item>Deez</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text="WOMEN" icon="dropdown">
              <Dropdown.Menu>
                <Dropdown.Item>Deez</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text="BRANDS" icon="dropdown">
              <Dropdown.Menu>
                <Dropdown.Item>Deez</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text="SEARCH">
              <Dropdown.Menu>
                <Dropdown.Item>Deez</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu>
        </Container>

    );
  }
}

class FullWidthImage extends React.Component {
  render() {
    return (
        <Container fluid>
          <Image fluid src='https://cdn.shopify.com/s/files/1/1035/5187/t/5/assets/slide1.jpg?18002885318982737731'/>
        </Container>
    )
  }
}

class FooterMenu extends React.Component {
  render() {
    return (
          <Grid className="footer" columns={3}>
            <Grid.Column>
              <List>
                <List.Item>NAVIGATION</List.Item>
                <hr/>
                <List.Item>About Us</List.Item>
                <List.Item>Videos</List.Item>
                <List.Item>Store Locations</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <List>
                <List.Item>MAIN MENU</List.Item>
                <hr/>
                <List.Item>Men</List.Item>
                <List.Item>Women</List.Item>
                <List.Item>Kids</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <List>
                <List.Item>CONNECT</List.Item>
                <hr/>
                <List.Item>Sign up for the latest updates</List.Item>
                <List.Item><Input placeholder="Enter email address" labelPosition="right"
                                  label={{ color: 'black', content: 'Join' }}/></List.Item>
              </List>
            </Grid.Column>
          </Grid>


    );
  }
}

class IslandSnow extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <IslandSnowLogo/>
          <MiddleMenu/>
          <FullWidthImage/>
          <FooterMenu/>
        </div>
    );
  }
}

ReactDOM.render(<IslandSnow/>, document.getElementById('root'));