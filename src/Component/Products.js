import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Pagination from './Pagination';
import('./products.css')
const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [productPerPage, setProductPerPage] = useState(7);

    // for navbar
    const [selected, setSelected] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
        setLoading(true)
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                setProducts(data?.products)
            })
    }, [])
    // get current post
    const indexOfLastProduct = currentPage * productPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productPerPage;
    const currentProducts = products?.slice(indexOfFirstProduct, indexOfLastProduct)

    const paginate = (number) => {
        setCurrentPage(number)
    }


    const handleAdCart = (selectedProduct) => {
        setSelected(selected + 1);
        setTotalPrice(totalPrice + parseInt(selectedProduct?.price));
    }
    return (
        <div>
            <Header selected={selected} totalPrice={totalPrice}></Header>
            {
                loading ? <div className='flex justify-center items-center h-full'>
                    <div className='w-8 h-8 border-4 border-dashed rounded-full animate-spin border-secondary'></div>
                </div> : <div>
                    <h3 className="text-3xl text-secondary text-center font-semibold">Some products</h3>
                    <div className='mt-5 grid lg:grid-cols-3 gap-6'>
                        {
                            currentProducts?.map(product =>

                                <div key={product?.id} className='mx-auto'>
                                    <div className="card w-96 bg-base-100 shadow-xl">
                                        <figure><img className='card-img' src={product?.thumbnail} alt="Shoes" /></figure>
                                        <div className="card-body">
                                            <h2 className="card-title">
                                                {product?.title.slice(0, 20)}
                                                <div className="badge badge-secondary">{product?.rating}</div>
                                            </h2>
                                            <p>{product?.description.slice(0, 65)} more ...</p>
                                            <p className="text-xl font-semibold">price: {product?.price}</p>
                                            <p onClick={() => handleAdCart(product)} className='py-0 btn btn-secondary'>Add to cart</p>
                                        </div>
                                    </div>
                                </div>

                            )
                        }
                    </div>
                    <Pagination productPerPage={productPerPage} totalProduct={products?.length} paginate={paginate}></Pagination>

                </div>
            }
        </div>
    );
};

export default Products;