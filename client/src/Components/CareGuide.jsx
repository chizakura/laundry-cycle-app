import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import GuideSection from './GuideSection';

class CareGuide extends Component {
    componentDidMount() {
        this.props.getOptions();
    }

    render() {
        const {washOptions, dryOptions} = this.props;
        return (
            <div className="guide">
                <Card>
                    <Card.Header className="profile-text">Care Guide</Card.Header>
                    <Card.Body>
                        <GuideSection
                            heading={'Wash Laundry Symbols'}
                            optionsList={washOptions}
                        />
                        <br></br>
                        <GuideSection
                            heading={'Dry Laundry Symbols'}
                            optionsList={dryOptions}
                        />
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default CareGuide;