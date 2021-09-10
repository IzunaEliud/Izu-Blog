import Article from "../components/article"
import NavBar from "../components/navBar"
import nba from "../article/article"
import ArticleAll from "../components/articleAll"
import Footer from "../components/footer"
import Pagination from '@material-ui/lab/Pagination'
import NewArticle from "../components/newArticle"
import { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { BrowserRouter as Router,Route } from 'react-router-dom'
const useStyle=makeStyles((theme)=>({
    root:{
        margin: "50px 25% 0 25%",
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
        <Router>
            <NavBar/>
            <Route exact path="/">
                <div className={classes.root}>
                    {curentPost.map((e)=>{
                        return(<Article number={e}/>)
                    })} 
                    <p>Page {page}</p>

                    <Pagination count={nbPage} color="primary" page={page} onChange={changePage}/>
                </div>
            </Route>
            {nba.map((e,v)=>{
                return(
                    <Route exact path={`/article/${v}`}>
                        <ArticleAll nb={v}/>
                    </Route>
                )
            })}
            <Route>
                <div>
                    <Route exact path={`/newarticle`}>
                        <NewArticle/>
                    </Route>
                </div>
            </Route>
            <Footer/>    
        </Router>
    )
}