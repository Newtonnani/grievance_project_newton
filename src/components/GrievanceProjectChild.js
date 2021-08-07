import React, { Component } from 'react'
import GrievanceProject from './GrievanceProject';
import './GrievanceProject.css'

export default class GrievanceProjectChild extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
        this.state = { Email: this.props.Email, Title: this.props.Title, Description: this.props.Desc, grievanceStatus: null };
    }

    resolved = (evt) => {
        this.setState({
            grievanceStatus: 'resolved'
        })
        evt.preventdefault()
    }
    rejected = () => {
        this.setState({
            grievanceStatus: 'rejected'
        })
    }

    render() {
        const { Email, Title, Description } = this.state;
        if (Email) {
            if (this.state.grievanceStatus === 'resolved') {
                return (
                    <div>
                        <GrievanceProject />
                        <div className='outer'>
                            <div id="container">
                                <p>RESOLVED</p>
                            </div>
                        </div>
                    </div>

                )
            }
            else if (this.state.grievanceStatus === 'rejected') {
                return (
                    <div>
                        <GrievanceProject />
                        <div className='outer'>
                            <div id="container">
                                <p>REJECTED</p>
                            </div>
                        </div>
                    </div>

                )
            }
            else {
                return (
                    <div>
                        <GrievanceProject />
                        <p>Email : {Email}</p><br /><br />
                        <p>Title : {Title}</p><br /><br />
                        <p>Description: {Description}</p><br /><br />
                        <button className='button resolve' onClick={this.resolved}>Resolved</button>
                        <button className='button reject' onClick={this.rejected}>Rejected</button>
                    </div>
                )
            }
        }
        else {
            return (
                <div>
                    <GrievanceProject />
                    <button className='button resolve' onClick={this.resolved}>Resolved</button>
                    <button className='button reject' onClick={this.rejected}>Rejected</button>
                </div>
            )
        }
    }
}
    //     else {
    //         return (
    //             <div>
    //                 <GrievanceProject />
    //                 <button className='button resolve' onClick={this.resolved}>Resolved</button>
    //                 <button className='button reject' onClick={this.rejected}>Rejected</button>
    //             </div>
    //         )
    //     }
    // }
// }
