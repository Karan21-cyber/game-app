"use client"
import React,{useState} from 'react'
import Navbar from '../navbar/nav-bar';
import PaymentCards from '../footer/payment-cards';
import Footer from '../footer/footer';

function Provider({children}:{children : React.ReactNode}) {
      const [open, setOpen] = useState(false);

  return (
    <div>
      <Navbar open={open} setOpen={setOpen} />
      {open ? "" : children}
      <PaymentCards />
      <Footer />
    </div>
  );
}

export default Provider