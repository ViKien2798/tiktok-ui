import config from '~/config';

//Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Live from '~/pages/Live';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import Upload from '~/pages/Upload';
import Coin from '~/pages/Coin';
import Setting from '~/pages/Setting';
import Feedback from '~/pages/Feedback';

//Layouts
import { HeaderOnly } from '~/layouts';
import { StretchLayout } from '~/layouts';

//public Routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.live, component: Live },
    { path: config.routes.profile, component: Profile, layout: StretchLayout },
    { path: config.routes.search, component: Search, layout: null },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.coin, component: Coin, layout: HeaderOnly },
    { path: config.routes.setting, component: Setting },
    { path: config.routes.feedback, component: Feedback, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
