import { react } from 'react';
import { API } from '../config';

import { VideoList, Footer } from '../components';

class Home extends Component {
    constructor (props) {
        super(props);

        this.state = {};
    }

    async componenDidMount () {

    }

    render () {
        return (
            <main id="container">
                <VideoList />
                <Footer />
            </main>
        );
        
    };
}

export default Home;
