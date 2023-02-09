import React from 'react';
import { toast } from 'react-hot-toast';

const Header = ({ selected, totalPrice }) => {

    return (
        <div>
            <div className="navbar bg-base-100 lg:px-24">
                <div className="flex-1">
                    <a href='/' className="btn btn-ghost normal-case text-xl text-pink-500">Top Product</a>
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item">{selected}</span>
                            </div>
                        </label>
                        <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div className="card-body">
                                <span className="font-bold text-lg text-info">{selected} Items</span>
                                <span className="text-info font-semibold text-xl">Subtotal: {totalPrice} Tk</span>
                                <div className="card-actions">
                                    <label htmlFor="my-modal-6" className="btn btn-secondary btn-sm">View cart</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* The button to open modal */}


                {/* Put this part before </body> tag */}
                <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-3xl text-info text-center mb-4">My Cart !!!</h3>
                        <h3 className="font-bold text-xl">You selected <span className='text-secondary'>{selected}</span> products</h3>
                        <h3 className="font-bold text-xl">Total payable amount = <span className='text-secondary'>{totalPrice}</span> products</h3>

                        <div className="modal-action">
                            <label onClick={() => toast.success('Your payment is successfully completed.Please wait for delivery.')} htmlFor="my-modal-6" className="btn btn-secondary">Pay Now</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;