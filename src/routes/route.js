
// Pages
import Home from '../pages/Home/Home';
import Following from '../pages/Following';
import Live from '../pages/Live';
import Profile from '../pages/Profile';
import Upload from '../pages/Upload';
import Search from '../pages/Search';

//routes
const routes = {
    home: '/',
    following: '/following',
    live: '/live',
    profile: '/@:nickname',
    upload: '/upload',
    search: '/search',
};


// Public routes
const publicRoutes = [
    { path: routes.home, component: Home },
    { path: routes.following, component: Following },
    { path: routes.live, component: Live },
    { path: routes.profile, component: Profile },
    { path: routes.upload, component: Upload, layout: null },
    { path: routes.search, component: Search, layout: null },
];

const privateRoutes = [];

export { routes, publicRoutes, privateRoutes };


