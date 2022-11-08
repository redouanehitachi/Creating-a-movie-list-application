import React, { Component } from 'react'
import Card from '../components/Card'
export default class List extends Component {
    constructor() {
        super()
        this, this.state = {
            data: [],
            loading: true
        }
    }
    async componentDidMount() {
        const movies = await fetch('http://localhost:3000/movies')
        const moviesJSON = await movies.json()
        if (moviesJSON) {
            this.setState({
                data: moviesJSON,
                loading: false
            })

        }
    }
    render() {
        const { data, loading } = this.state
        if (loading) {
            return <div>Loading...</div>

        }
        return (
            data.map(movie => <Card key={movie.id} movie={movie} />)

        )
    }
}
