import React, { Component } from 'react'

class RequestAPI extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount() {

        fetch('/filtered_out_sentimental_search/Trump')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json
                })
            })
    }

    render() {
        return (
            <div className="app">

            </div>
        );
    }


export default RequestAPI;