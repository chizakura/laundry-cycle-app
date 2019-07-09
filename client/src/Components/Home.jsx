import React, {Component} from 'react';
import Figure from 'react-bootstrap/Figure';

class Home extends Component {
    render() {
        return (
            <div>
                <Figure>
                    <Figure.Caption className="caption-color">
                        We can only transform our lives if we sincerely want to.  Small changes transform our lives. --Marie Kondo
                    </Figure.Caption>
                    <Figure.Image
                        alt="laundry-logo"
                        src="https://campuslodgegainesville.com/wp-content/uploads/sites/68/2018/02/washer-dryer-in-every-unit.gif"
                    />
                </Figure>
            </div>
        )
    }
}

export default Home;