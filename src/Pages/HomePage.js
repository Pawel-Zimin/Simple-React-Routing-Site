import React from 'react';
import '../styles/HomePage.css';
import Article from '../components/Article';

const articles = [
    {
        id: 1,
        title: 'Czym jest teoria strun?',
        author: 'Jan Nowak',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum nulla accusantium, quis quaerat quisquam fugiat distinctio id quidem eos vero, quibusdam perspiciatis, beatae ipsam nesciunt itaque dolor officia iusto similique?',
    },
    {
        id: 2,
        title: 'Czym jest paradoks Fermiego?',
        author: 'Anna Kwiatkowska',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum nulla accusantium, quis quaerat quisquam fugiat distinctio id quidem eos vero, quibusdam perspiciatis, beatae ipsam nesciunt itaque dolor officia iusto similique?',
    },
    {
        id: 3,
        title: 'Ciemna materia, a ciemna energia',
        author: 'Jan Kowalski',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum nulla accusantium, quis quaerat quisquam fugiat distinctio id quidem eos vero, quibusdam perspiciatis, beatae ipsam nesciunt itaque dolor officia iusto similique?',
    },
]

const HomePage = () => {

    const artList = articles.map(article => (
        <Article key={article.id} {...article}/>
    ))

    return (
        <div className="home">
            {artList}
        </div>
    );
}
export default HomePage;