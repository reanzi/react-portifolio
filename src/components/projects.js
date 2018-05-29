import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardText, CardTitle, CardActions, CardMenu, IconButton, Button } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }
    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                    {/* 1st Project */}
                    <Card shadow={5} style={{ width: '450px', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover' }}>1st Project</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                    </CardText>
                        <CardActions border>
                            <Button colored>gitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* 2nd Project */}
                    <Card shadow={5} style={{ width: '450px', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover' }}>2nd Project</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                    </CardText>
                        <CardActions border>
                            <Button colored>gitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    {/* 3rd Project */}
                    <Card shadow={5} style={{ width: '450px', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover' }}>3rd Project</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                    </CardText>
                        <CardActions border>
                            <Button colored>gitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div><h1>This is Django</h1></div>
            )
        } else if (this.state.activeTab === 2) {
            return (<div><h1>This is Laravel</h1></div>)
        } else if (this.state.activeTab === 3) {
            return (<div><h1>This is VueJS</h1></div>)
        }
    }



    render() {
        return (
            <div className="demo-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>Django</Tab>
                    <Tab>Laravel</Tab>
                    <Tab>VueJS</Tab>
                </Tabs>
                {/* <section className="projects-grid"> */}
                <Grid>
                    <Cell col={12}>
                        <div className="content">
                            {this.toggleCategories()}
                        </div>
                    </Cell>
                </Grid>
                {/* </section> */}
            </div>
        );
    }
}

export default Projects;