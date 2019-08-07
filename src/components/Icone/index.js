import React, { Component } from 'react'

import { Container, Text } from './styles';

export default class Icone extends Component {
    render() {
        return (
            <Container >
                <a href="">
                    <img src={this.props.Icon}/>
                    <Text> {this.props.Text} </Text>
                </a>
            </Container>
        )
    }
}
