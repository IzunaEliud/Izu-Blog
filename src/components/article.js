import "../style/article.css"


export default function Article(props){
    
    return(
        <div className="rootArticle">
            <div className="image"></div>
            <h2 className="titleArt">{props.number}. Titre</h2>
            <h4 className="firstLineArt">premiere Dolore veniam voluptate duis labore consectetur tempor mollit esse enim eu ad dolore duis.Reprehenderit cillum velit pariatur nisi proident.</h4>
            <p className="suiteArt">Lire la suite</p>
        </div>
    )
}
