import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Eduaction from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col="4">
                        <div style={{ textAlign: 'center' }}>
                            <img
                                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                                alt="avatar"
                                style={{ height: '200px' }} />
                        </div>
                        <h2 style={{ paddingTop: '2em' }}>Ray Mica</h2>
                        <h4 style={{ color: 'grey' }}>Designer</h4>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />

                        <p>
                            is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it
                        </p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <h5>Address</h5>
                        <p>Bagamoyo, 613202</p>
                        <h5>Phone</h5>
                        <p>+255 719 655 810</p>
                        <h5>Email</h5>
                        <p>raymica@inc.com</p>
                        <h5>Web</h5>
                        <p>inc.com</p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                    </Cell>
                    <Cell className="resume-right-col" col="8">

                        <h2>Education Details</h2>
                        <Eduaction
                            startYear={209}
                            endYear={2011}
                            schollName="MATI - U"
                            schollDescription="is a long established fact that a reader will be distracted by the readable content of a page when looking at its layoutng it"
                        />
                        <Eduaction
                            startYear={2012}
                            endYear={2014}
                            schollName="VETA"
                            schollDescription="is a long established fact that a reader will be distracted by the readable content of a page when looking at its layoutng it"
                        />
                        <Eduaction
                            startYear={2015}
                            endYear={2018}
                            schollName="Ghetto"
                            schollDescription="is a long established fact that a reader will be distracted by the readable content of a page when looking at its layoutng it"
                        />
                        <hr style={{ borderTop: '3px solid #e22947' }} />

                        <h2>Experience</h2>
                        <Experience
                            startYear={2014}
                            endYear="Currently"
                            jobName="WAEO"
                            jobDescription="Ward Agricultural Extension Officer; expert in agricultural activities & practices"
                        />
                        <Experience
                            startYear={2014}
                            endYear="Currently"
                            jobName="Second JOb"
                            jobDescription="Web designer by passion"
                        />
                        <hr style={{ borderTop: '3px solid #e22947' }} />

                        <h2>Skills</h2>

                        <Skills
                            skill="HTML/CSS"
                            progress={98}
                        />
                        <Skills
                            skill="JavaScript"
                            progress={76}
                        />
                        <Skills
                            skill="Django"
                            progress={46}
                        />
                        <Skills
                            skill="VueJS"
                            progress={88}
                        />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;