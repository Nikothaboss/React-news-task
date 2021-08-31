import { wrapper } from "./article.module.scss"
const Article = ({ titletext, bodytext, authortext }) => {
    return (
        <article className={wrapper}>
            <h2>{titletext}</h2>
            <p>{bodytext}</p>
            <span>Author: {authortext}</span>
        </article>
    )
}

export default Article
