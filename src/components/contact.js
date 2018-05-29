import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Raymond Michael</h2>
                        <img
                            src="https://cdn.pixabay.com/photo/2017/12/16/06/41/avatar-3022215__340.jpg"
                            alt="avatar"
                            style={{ height: '250px', borderRadius: '5%' }} />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
                            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknow
                            </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    {/* <ListItemContent icon="call" style={{ fontSize: '25px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-phone-square" aria-hidden="true" />
                                        (255) 758 466 620
                                </ListItemContent> */}
                                    <ListItemContent icon="call">
                                        (255) 758 466 620
                                    </ListItemContent>

                                </ListItem>
                                <ListItem>
                                    <ListItemContent icon="email">
                                        nziku@inc.com
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent icon="apps">
                                        Social Links
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent icon="add">
                                        Drop a line
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;