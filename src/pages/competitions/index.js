import { Component } from 'react';

import CompetitionsGrid from './competitions-grid';
import HeaderBar from '../../shared-components/header-bar';
import Background from '../../components/Background';

export default class CompetitionsPage extends Component {
    render() {
        return (
            <div className="collections-page">
                <HeaderBar title="Competitions" subtitle="Excel2020" />
                <CompetitionsGrid />
                <Background />
            </div>
        )
    }
}