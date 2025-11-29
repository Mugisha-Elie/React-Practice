import { stripHTML } from "../util";

const Article = ({article}) => {
    const url = `https://en.wikipedia.org/?curid=${article.pageid}`;
    const title = stripHTML(article.title);
    const snippet = stripHTML(article.snippet);
    
    return (
        <article>
            <a href={url} title={title}>
                <h2>{title}</h2>
            </a>
            <div>{snippet}...</div>
        </article>
    )

};

export default Article;