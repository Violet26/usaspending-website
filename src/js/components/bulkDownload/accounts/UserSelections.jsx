/**
 * UserSelections.jsx
 * Created by Lizzie Salita 4/25/18
 */

import React from 'react';
import PropTypes from 'prop-types';

import { accountDownloadOptions } from 'dataMapping/bulkDownload/bulkDownloadOptions';

const propTypes = {
    accounts: PropTypes.object
};

export default class UserSelections extends React.Component {
    constructor(props) {
        super(props);

        this.generateAccountLevelString = this.generateAccountLevelString.bind(this);
        this.generateFederalAccountString = this.generateFederalAccountString.bind(this);
        this.generateSubmissionTypeString = this.generateSubmissionTypeString.bind(this);
        this.generateFyString = this.generateFyString.bind(this);
    }

    generateAccountLevelString() {
        if (this.props.accounts.accountLevel) {
            const options = accountDownloadOptions.accountLevels;
            const selectedOption = options.find((option) =>
                option.name === this.props.accounts.accountLevel
            );
            return (
                <div className="selection__content">{selectedOption.label}</div>
            );
        }
        return (
            <div className="selection__content selection__content-required">Account not selected</div>
        );
    }

    generateBudgetAndAgencyFunctionString() {
        if (this.props.accounts.budgetFunction.title !== 'Select a Budget Function' || this.props.accounts.agency.name !== 'Select an Agency') {
            return (
                <div className="selection__content">{this.props.accounts.budgetFunction.title} &amp; {this.props.accounts.agency.name}</div>
            );
        }

        return (
            <div className="selection__content selection__content-required">Budget function / Agency not selected</div>
        );
    }

    generateFederalAccountString() {
        if (this.props.accounts.federalAccount.name !== 'Select a Federal Account') {
            return (
                <div className="selection__content">{this.props.accounts.federalAccount.name}</div>
            );
        }

        return (
            <div className="selection__content">Federal account not selected</div>
        );
    }

    generateBudgetSubfunctionString() {
        if (this.props.accounts.budgetSubfunction.title !== 'Select a Budget Sub-Function') {
            return (
                <div className="selection__content">{this.props.accounts.budgetSubfunction.title}</div>
            );
        }

        return (
            <div className="selection__content">Budget sub-function not selected</div>
        );
    }

    generateSubmissionTypeString() {
        if (this.props.accounts.submissionType) {
            const options = accountDownloadOptions.submissionTypes;
            const selectedOption = options.find((option) =>
                option.name === this.props.accounts.submissionType
            );
            return (
                <div className="selection__content">{selectedOption.label}</div>
            );
        }
        return (
            <div className="selection__content selection__content-required">required</div>
        );
    }

    generateFyString() {
        if (this.props.accounts.fy && this.props.accounts.quarter) {
            return (
                <div className="selection__content">{this.props.accounts.fy} - Q{this.props.accounts.quarter}</div>
            );
        }

        return (
            <div className="selection__content selection__content-required">required</div>
        );
    }

    render() {
        return (
            <div className="download-user-selections">
                <h3 className="download-user-selections__title">Your selected options are...</h3>
                <div className="download-user-selections__left-col">
                    <div className="selection">
                        <div className="selection__heading">Account Level</div>
                        <div className="selection__content">
                            {this.generateAccountLevelString()}
                        </div>
                    </div>
                    <div className="selection">
                        <div className="selection__heading">Federal Account</div>
                        <div className="selection__content">
                            {this.generateFederalAccountString()}
                        </div>
                    </div>
                    <div className="selection">
                        <div className="selection__heading">Budget Function / Agency</div>
                        <div className="selection__content">
                            {this.generateBudgetAndAgencyFunctionString()}
                        </div>
                    </div>
                    <div className="selection">
                        <div className="selection__heading">Budget Sub-Function</div>
                        <div className="selection__content">
                            {this.generateBudgetSubfunctionString()}
                        </div>
                    </div>
                </div>
                <div className="download-user-selections__right-col">
                    <div className="selection">
                        <div className="selection__heading">File Type</div>
                        {this.generateSubmissionTypeString()}
                    </div>
                    <div className="selection">
                        <div className="selection__heading">Time Period</div>
                        {this.generateFyString()}
                    </div>
                    <div className="selection">
                        <div className="selection__heading">File Format</div>
                        <div className="selection__content">
                            CSV
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

UserSelections.propTypes = propTypes;
