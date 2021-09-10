import React from 'react'
import {FormControl, MenuItem, InputLabel} from "@material-ui/core"
import Select from "@material-ui/core/Select"
import { makeStyles } from "@material-ui/core"
import { TextField,Button,Grid,TextareaAutosize } from '@material-ui/core'
const useStyle=makeStyles((theme)=>({
    root1:{
        
    },
    textArea:{
        margin:"20px 0",
        width:"100%"
    },
    formControl: {
        width:"100%",
    },
    select:{
        marginTop:"10px"
    },
    contenu:{
        width:"100%"
    }
}))
export default function NewArticle() {
    const classes=useStyle()
    return (
        <div>
        <Grid container direction="row" justifyContent="center" alignItems="center" className={classes.root1}>
            <Grid item xs={10} >
                <TextareaAutosize className={classes.textArea} aria-label="minimum height" minRows={30}/>
            </Grid>    
        </Grid>
        <Grid container direction="row" alignItems="flex-start" justifyContent="center" className={classes.root}>
            <Grid item xs={1}></Grid>
            <Grid item xs={1}>
                <FormControl className={classes.formControl}>
                    <InputLabel id="article">
                        Article
                    </InputLabel>
                    <Select labelId="article" id="type_article" >
                        <MenuItem value={2}>
                            titre
                        </MenuItem>
                        <MenuItem value={2}>
                            sous-titre
                        </MenuItem>
                        <MenuItem value={3}>
                            sous-sous-titre
                        </MenuItem>
                        <MenuItem value={4}>
                            paragraphe
                        </MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={9}>
                <TextField label="contenue" multiline className={classes.contenu}/>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={7} />
            <Grid item xs={2}>
                <TextField type="file" className={classes.select}/>
            </Grid>
            <Grid item xs={1} className={classes.select}>
                <Button color="primary" >
                    Ajouter
                </Button>
            </Grid>
            <Grid item xs={1} className={classes.select}>
                <Button color="primary" >
                    aperçu
                </Button>
            </Grid>
        </Grid>

        
        </div>
    )
}
