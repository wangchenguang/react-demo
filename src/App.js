import React, {PureComponent} from 'react';
import Hello from './Hello';
import ChatApp from './c01/ChatApp';
import 'antd/dist/antd.css';

const routeMap = {
    chat: ChatApp,
};

const styles = {
    fontFamily: "sans-serif",
    paddingLeft: "250px",
};

class App extends PureComponent {
    handlerLinkClick = key => {
        window.history.pushState(null, '', `/#/${key}`);
        this.forceUpdate();
    };

    render() {
        const currentPage = document.location.hash.replace(/#\/?/, "");
        let CurrentPage = routeMap[currentPage] || Hello;
        // if (currentPage.match(/\/user\/\w+|\/list-page/)) {
        //     CurrentPage = ListSample;
        // }
        // if (currentPage.match(/\/wizard\/step\/\w+/)) {
        //     CurrentPage = WizardSample;
        // }
        return (
            <div style={styles}>
                <ul className="menu-list">
                    {Object.keys(routeMap).map(key => (
                        <li key={key} className={key === currentPage ? 'is-active' : ''} style={{listStyle: "none"}}>
                            <span className="link" onClick={() => this.handlerLinkClick(key)}>
                                {key}
                            </span>
                        </li>
                    ))}
                </ul>
                <div style={{padding: "30px 0"}}>
                    <CurrentPage/>
                </div>
            </div>
        );
    }
}

export default App;
