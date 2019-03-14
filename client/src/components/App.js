import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Dashbord from './Dashboard';
import SurvevyNew from './surveys/SurveyNew';

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }
    render(){
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Header />
                        <div className="container">
                            <Route exact path="/" component={Landing} />
                            <Route exact path="/surveys" component={Dashbord} />
                            <Route path="/surveys/new" component={SurvevyNew} />
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default connect(null, actions)(App);