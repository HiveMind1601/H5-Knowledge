import React, { Component } from 'react';
export default class Subscribe extends Component {
  render() {
    return (
        <div className="subscribe">
            <div className="container">
                <h3>Newsletter</h3>
                <form>
                    <input type="text" className="text" defaultValue="Email"/>
                    <input type="submit" defaultValue="Subscribe"/>
                </form>
            </div>
        </div>
    );
  }
}
