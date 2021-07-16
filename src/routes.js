import { Route, Switch } from 'react-router-dom';

import Registration from './views/Registration';
import ConfirmEmail from './views/ConfirmEmail';
import NotFound from './views/404';

const Routes = (props) => {
    return (
        <div className="site-layout-content">
            <Switch>
                <Route exact path="/" component={Registration} />
                <Route exact path="/confirm-email" component={ConfirmEmail} />
                <Route path="*" component={NotFound} />
            </Switch>
        </div>
    );
};

export default Routes;