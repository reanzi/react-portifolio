import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
class Landing extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src="https://avatars0.githubusercontent.com/u/20204343?s=400&u=e7f4762d5fc22a8b0fe41ec44554429e3f0a302c&v=4"
                            alt="avatar"
                            className="avatar-img" />
                        <div className="banner-text">
                            <h1>Full Stack Web Developer...</h1>
                            <hr />>

                            <p>
                                HTML/CSS | Python | React | React Native | NodeJS | Express | MongoDB
                            </p>
                            <div className="social-links">
                                {/* Github */}
                                <a href="https://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-github-square" aria-hidden="true"></i>
                                </a>
                                {/* YouTube */}
                                <a href="https://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-youtube-square" aria-hidden="true"></i>
                                </a>
                                {/* G+ */}
                                <a href="https://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-google-plus-square" aria-hidden="true"></i>
                                </a>
                                {/* Twitter */}
                                <a href="https://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-twitter-square" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;