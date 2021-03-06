import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const Cast = (props) => {
    console.log(props)
    return(
        <div>
            { props.cast ? (
                <Card >
                    <CardMedia style={{height: 0, paddingTop: '56.25%'}}
                    image={props.cast.fields.castImage.fields.file.url}
                    title={props.cast.fields.title}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        {props.cast.fields.title}
                    </Typography>
                    <Typography component="p">
                        {props.cast.fields.description}
                    </Typography>
                    </CardContent>
                    <CardActions>
                    <Button size="small" color="primary" href={props.cast.fields.url} target="_blank">
                        Play Cast
                    </Button>
                    </CardActions>
                </Card>
            ) : null}
        </div>
    )
}

export default Cast;