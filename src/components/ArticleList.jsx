import Article from './Article';

function ArticleList({articles}){
    const renderedArticles = articles.map(article => {
        return <Article key={article.pageId} article={article} />
    })

    return <div>{renderedArticles}</div>
}

export default ArticleList;