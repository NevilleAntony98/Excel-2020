import { Component } from 'react';

import CompetitionsGrid from './competitions-grid';
import HeaderBar from '../../shared-components/header-bar'

export default class CompetitionsPage extends Component {
    render() {
        return (
            <div className="collections-page">
                <HeaderBar title="Excel 2020" subtitle="Competitions" />
                <CompetitionsGrid />
            </div>
        )
    }
}