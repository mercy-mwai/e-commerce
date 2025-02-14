import React from 'react'
import { Link } from 'react-router-dom';

const Search = ({products , gridList}) => {
    const [searchTerm ,setSearchTerm]=(" ");
    const filteredProducts= products.filter((product) => product.name.toLowerCase().includes(searchTerm.
        toLowerCase()
    ));
  return (
    <div className='widget widget-search'>
    <form className='search-wrapper mb-3'>
        <input type='text' name='search' id='search' placeholder='Search...' defaultValue={searchTerm}
        onChange={(e)=> setSearchTerm(e.target.value)} />
        <button type='submit'>
            <i className='icofont-search-2'></i>
        </button>
    </form>
    {/* showing search results*/}
    <div>
        {
            searchTerm && filteredProducts.map((product)=>(
                <Link key={product.id} to={`/shop/${product.id}`}>
                    <div className='d-flex gap-3 p-2'>
                        
                    </div>
                </Link>
            ))
        }
    </div>
    </div>
  )
}

export default Search