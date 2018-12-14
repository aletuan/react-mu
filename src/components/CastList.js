import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import * as contentful from 'contentful'
import Cast from '../components/Cast'

const SPACE_ID = '75jxqzxwp6zt'
const ACCESS_TOKEN = 'ed7cb5b3721134084938bc90c32592ce627682b4748e348d254c98fbc97f3bc9'

const client = contentful.createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN
})

class CastList extends Component {
    state = {
        courses: [],
        searchString: ''
    }

    constructor() {
        super();
        this.getCasts();
    }

    getCasts = () => {
        client.getEntries({
            content_type: 'cast',
            query: this.state.searchString
        })
        .then((response) => {
            this.setState({casts: response.items})
            console.log(this.state.casts)
        })
        .catch((error) => {
          console.log("Error occurred while fetching Casts")
          console.error(error)
        })
    }

    onSearchInputChange = (event) => {
        console.log("Search changed ..." + event.target.value)
        if (event.target.value) {
            this.setState({searchString: event.target.value})
        } else {
            this.setState({searchString: ''})
        }
        this.getCasts()
    }

    render() {
        return (
            <div>
                { this.state.casts ? (
                    <div>
                        {/* <TextField style={{padding: 24}}
                            id="searchInput"
                            placeholder="Search for Casts"   
                            margin="normal"
                            onChange={this.onSearchInputChange}
                            /> */}
                        <Grid container spacing={24} style={{padding: 24}}>
                            { this.state.casts.map(currentCast => (
                                <Grid item xs={12} sm={6} lg={4} xl={3}>
                                    <Cast cast={currentCast} />
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                ) : "No cast found" }
            </div>
        )
    }
}
export default CastList;