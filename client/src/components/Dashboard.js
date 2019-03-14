import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList';

const Dashboard = () => {
    return (
        <div>
            <SurveyList />
            <div class="fixed-action-btn">
                <Link to="/surveys/new" className="btn-floating btn-large amber darken-4">
                    <i className="large material-icons">add</i>
                </Link>
            </div>
        </div>
    );
};

export default Dashboard;