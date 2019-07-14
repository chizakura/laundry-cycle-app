import React, {Component} from 'react';
import Figure from 'react-bootstrap/Figure';

class Home extends Component {
    render() {
        return (
            <div>
                <Figure>
                    <Figure.Caption className="caption-color">
                        <blockquote className="blockquote mb-0 profile-text">
                            <p>
                                {' '}
                                We can only transform our lives if we sincerely want to.  Small changes transform our lives.
                                {' '}
                            </p>
                            <footer className="blockquote-footer">
                                Marie Kondo
                            </footer>
                        </blockquote>
                    </Figure.Caption>
                    <Figure.Image
                        height="auto"
                        width="75%"
                        alt="laundry-logo"
                        src="https://campuslodgegainesville.com/wp-content/uploads/sites/68/2018/02/washer-dryer-in-every-unit.gif"
                    />
                </Figure>
            </div>
        )
    }
}

export default Home;