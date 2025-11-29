import './index.css';
import { useState } from 'react';
import { search } from './api'
import SearchBar from './components/SearchBar'
import ArticleList from './components/ArticleList'
import logo from '/Wikipedia-logo-v2.svg'

function WikiApp(){
    const [articles, setArticles] = useState([])
    const [isLoading, setIsloading] = useState(false)
    const [error, setError] = useState(null)

    const handleSearch = async (searchTerm) => {
        setIsloading(true)

        try{
            const results = await search(searchTerm);
            setArticles(results)
        }catch(err){
            setError("Something went wrong please try again!", err)
        }finally{
            setIsloading(false)
        }
    }

    return (
        <>
            <header>
                <img src={logo} alt="wikipedia" />
                <h1>Wikipedia Search</h1>
                <SearchBar onSearch={handleSearch}/>
                <main id="searchResults">
                    {isLoading && (
                        <div className='flex flex-col justify-center itms-center p-8'>
                            <div className="animate-spin size-10 border-4 border-blue-500 border-t-transparent rounded-full" aria-label='Loading...' ></div>
                            <p className='text-lg text-gray-600'>Searching...</p>
                        </div>
                    )}

                    {error && <p className="error">{error}</p>}

                    {!isLoading && <ArticleList articles={articles}/>}
                </main>
            </header>
        </>
    )
}

export default WikiApp;