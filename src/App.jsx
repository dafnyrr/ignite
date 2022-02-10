import './styles/global.scss'
import {RepositoryList} from "./components/RepositoryList";
import {Counter} from "./components/Counter";

export const App = () => {
    return (
        <>
            <RepositoryList/>
            <Counter/>
        </>
    )
}