import { Grid,makeStyles,Typography } from "@material-ui/core"
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles=makeStyles((theme)=>({
    root:{
        flexGrow:1,
        color:"white",
        backgroundColor:"black",
        marginTop:"30px",
        width:"100%",
        alignItems:"center"
    },
    grid:{
        width:"300px",
        textAlign:"left",

 
    },
    
}))
export default function Footer(){
    const classes=useStyles()
    return(
        <div className={classes.root}>
            <Grid 
                container
                alignItems="flex-start"
                justifyContent="center"
                className={classes.root}
                spacing={10}
                xs={12}
            >
                
                <Grid item className={classes.grid}>
                    <Typography variant="h6">
                        <b>CONTACTEZ-NOUS</b>
                    </Typography>
                    <p>05 54 60 89 32 (appel et whatsapp) </p>
                </Grid>
                <Grid item className={classes.grid}>
                    <Typography variant="h6">
                        <b>SUIVEZ-NOUS</b>
                    </Typography>
                    <WhatsAppIcon/>
                    <TwitterIcon/>
                    <LinkedInIcon/>
                </Grid>
            </Grid>
        </div>
    )
}