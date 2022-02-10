import {RepositoryItem} from "./RepositoryItem";

const respository = {
    name: 'unform',
    description: 'Forms in React',
    link: 'https://github.com/unform/unform'
}

export const RepositoryList = () => {
    return (
        <section>
            <h1 className="repository-list">Lista de Repositórios</h1>
            <ul>
                <RepositoryItem repository={respository}/>
                <RepositoryItem repository={respository}/>
                <RepositoryItem repository={respository}/>
                <RepositoryItem repository={respository}/>
            </ul>
        </section>
    )
}