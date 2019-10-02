import React, { Component } from 'react';
import axios from 'axios'

class JokeList extends Component {

    // defaultProps with the number of jokes we will fetch each time
    static defaultProps = {
        numJokesToGet: 10
    }


    async componentDidMount() {
        let res = await axios.get('https://icanhazdadjoke.com/', {
            headers: { Accept: 'application/json' }
        })
        
        console.log(res)
    }
    render() {
        return (
            <div>
                <h1>Jokes App</h1>
            </div>
        );
    }
}

export default JokeList;