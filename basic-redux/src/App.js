import Counter from './components/Counter';
import Header from "./components/Header";
import Auth from "./components/Auth";
import {useSelector} from "react-redux";
import UserProfile from "./components/UserProfile";


function App() {
    const auth = useSelector(state => state.auth.isAuthenticated)

    return (
        <>
            <Header/>
            {!auth && <Auth/>}
            {auth && <UserProfile/>}
            {auth && <Counter/>}
        </>

    );
}

export default App;
