import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import { Grid, Typography } from '@mui/material';
import theme from '../Theme';
import { alpha } from '@mui/material';

export default function BlockImageAndText(props) {
    return (<>
        <Grid item xs={4} sx={{maxWidth: "300px"}} >
            <Paper variant="outlined" sx={{
                background: alpha(theme.palette.primary.main, 0.03),
                border: `1px solid ${alpha(theme.palette.primary.main, 0.25)}`,
                padding: "30px",
                borderRadius: "20px",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" 
        }}
            elevation={6} >
            <props.icon /> 
            <Typography sx={{margin:2}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu ex, accumsan non enim porttitor, mattis faucibus arcu. Curabitur lobortis vehicula fermentum. </Typography>
        </Paper>
    </Grid>
    </>);
}