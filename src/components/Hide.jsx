import React from 'react'
import {withWidth,Hidden,Typography, Button} from '@material-ui/core'

const Hide = (props) => {
    return (
        <div>
            <Typography variant="h6" color="initial">
                Ancho:{props.width}
            </Typography>
            {/* la parte que se va a ocultar dependiendo lo que busquemos Down incluye la solicitada y las inferiores, y up lo inverso */}
            <Hidden xsDown>
                <Button variant="contained" color="primary">
                    Botton chico 
                </Button>
            </Hidden>

        </div>
    )
}

export default withWidth()(Hide)
