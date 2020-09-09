import React from 'react';

const Article = props => {
    return (
        <article>
            <h3>{props.title}</h3>
            <span>{props.author}</span>
            <p>{props.text}</p>
        </article>
    );
}
  
export default Article;