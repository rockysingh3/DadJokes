import React, { Component } from 'react';
import axios from 'axios'

class JokeList extends Component {

    // defaultProps with the number of jokes we will fetch each time
    static defaultProps = {
        numJokesToGet: 10
    }

    constructor(props) {
        super(props)
        this.state = { jokes: [] }
    }


    async componentDidMount() {
        // this array will store all the jokes
        let jokes = []

        // Calling the api numJokesToGet times 
        while(jokes.length < this.props.numJokesToGet) {
            let res = await axios.get('https://icanhazdadjoke.com/', {
                headers: { Accept: 'application/json' }
            })
            jokes.push(res.data.joke)
        }
        
        this.setState({ jokes: jokes })
    }
    render() {
        return (
            <div className="JokeList">
                <h1>Jokes App</h1>
                <div className="JokeList-jokes">
                    {this.state.jokes.map(j => (
                        <div>{j}</div>
                    ))}
                </div>
            </div>
        );
    }
}

export default JokeList;