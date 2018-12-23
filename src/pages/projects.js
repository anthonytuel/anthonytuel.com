import React, { Component } from 'react';

import Layout from '../components/layout'


const projects = [
    {
        title: 'anthonytuel.com',
        text: 'Created a portfolio website using static-website generator Gatsbyjs and hosted the website using Amazon Web Services.',
        link: 'https://github.com/anthonytuel/anthonytuel.com',
    },
    {
      title: 'Personal Computer',
      text: 'Built a personal, budget desktop computer with the parts above.',
      link: 'https://pcpartpicker.com/list/TRQbr6'
    }
    
    
]

export default class Projects extends Component {
    render() {
        return (
        <Layout>
        <div className="main">
            <h2>Projects</h2>
                {projects.map((p, index) => (
                <div key={index}>
                { p.link 
                    ?
                    <a href={p.link} target="_blank" rel="noopener noreferrer">
                        <h4>{p.title}</h4> 
                    </a>
                    :
                    <h4>{p.title}</h4>
                }
                    <p>{p.text}</p>
                </div>
                ))}
        </div>
        </Layout>
        );
    }
}