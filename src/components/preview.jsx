import React, { Component } from 'react'
//import Card from './card'

import {makeStyles} from '@material-ui/core/styles'
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography
} from '@material-ui/core'

const useStyle = makeStyles({
    root:{
        maxWidth:345
    },
    media:{
        height:140
    }
})

class Preview extends Component{
    render(){
        const classes= useStyle
        let data={};
        //console.log(this.props,"??");
        if(this.props.datos){
           data =  this.props.datos
        } else {
            data = this.props;
        };

        return(
            
            <div>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia 
                            component="img"
                            className={classes.media}
                            image={data.image_url}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {data.title}
                            </Typography>
                            {/* <Typography variant="body2" color="textSecondary" component="p">
                                {data.synopsis}
                            </Typography> */}
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        )
    }
}

export default Preview