import Article from "../components/article"
import NavBar from "../components/navBar"
import nba from "../article/article"
import Footer from "../components/footer"
import Pagination from '@material-ui/lab/Pagination'
import { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
const useStyle=makeStyles((theme)=>({
    root:{
        margin: "50px 15% 0 15%",
        display: "grid",
        gridTemplateColumns: "1fr",
        gridColumnGap: "20px",
        gridRowGap: "20px",
    }
}))
export default function Home(){
    const [page, setpage] = useState(1)
    const postPerPage= 5;
    const nbPage=Math.ceil((nba.length)/postPerPage)
    const indexOfLastPage=postPerPage*page
    const indexOfFirstPage=indexOfLastPage-postPerPage
    const curentPost=nba.slice(indexOfFirstPage,indexOfLastPage)
    const changePage=(e,v)=>{
        setpage(v)
    }
    const classes=useStyle()
    return(
        <div>
            <NavBar/>
            <div className={classes.root}>
                {curentPost.map((e)=>{
                    return(<Article number={e}/>)
                })} 
                <p>Page {page}</p>

                <Pagination count={nbPage} color="primary" page={page} onChange={changePage}/>
            </div>
            <Footer/>    
        </div>
    )
}