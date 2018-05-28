import React, { Component } from 'react';
import { Tabs, Tab } from 'react-mdl';
// import React, { Component } from 'react';

class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }
    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (<div><h1>This is React</h1></div>)
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
                <section className="projects-grid">
                    {this.toggleCategories()}
                </section>
            </div>
        );
    }
}

export default Projects;