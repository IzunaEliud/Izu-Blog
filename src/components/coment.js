import React from 'react'
import { TextField,Button,makeStyles } from '@material-ui/core'

const useStyle=makeStyles((theme)=>({
    coment:{
        borderTop: "1px solid black",
        borderBottom: "1px solid black",
        margin:"20px 0 ",
        padding:"20px"
    },
    barre:{
        color:"black"
    }

}))

export default function Coment() {
    const classes=useStyle()
    return (
        <div>
            <form>
               <TextField id="outlined-basic" label="email" variant="outlined" fullWidth/>
               <br/>
               <br/>
               <br/>

               <TextField multiline label="entrez votre commentaire" variant="outlined" fullWidth/>
               <br/>
               <br/>
               <br/>
               <Button variant="outlined" color="primary">Soumettre</Button>
            </form>

            <div className={classes.coment}>

                <p><b>eliud@gmail.com</b></p>
                <p>eIrure proident qui deserunt magna tempor mollit exercitation dolor dolore sunt.</p>

            </div>
            <div className={classes.coment}>

                <p><b>eliud@gmail.com</b></p>
                <p>eIrure proident qui deserunt magna tempor mollit exercitation dolor dolore sunt.</p>

            </div>

        </div>
    )
}
