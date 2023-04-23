import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import BackButton from "../components/BackButton";
const contact = () => {
  return (
    <div>
      <Header />
      <BackButton/>
     <h1 className="font-bold text-2xl text-center">We are here to help you</h1>
      <div className="grid grid-cols-4 mb-[5rem]">
        <div className="text-center m-10 h-min rounded-3xl border-gray-400 border-2 outline outline-gray-400">
          <p className="text-center p-2 m-3 text-xl font-bold">Returns</p>
          <p>Hassle-free returns and exchanges. We understand that sometimes products just don't work out.</p>
          <p className="font-bold m-3">123 345 793</p>
        </div>
        <div className="text-center m-10 h-min rounded-3xl border-gray-400 border-2 outline outline-gray-400">
          <p className="text-center p-2 m-3 text-xl font-bold">Complaints</p>
          <p>We take customer satisfaction seriously and strive to address any complaints in a timely and efficient manner</p>
          <p className="font-bold m-3">833 839 747</p>
        </div>
        <div className="text-center m-10 h-min rounded-3xl border-gray-400 border-2 outline outline-gray-400">
          <p className="text-center p-2 m-3 text-xl font-bold">Marketing</p>
          <p>Our marketing team works collaboratively with businesses to help them grow and and and succeed</p>
          <p className="font-bold m-3">123 345 793</p>
        </div>
        <div className="text-center m-10 h-min rounded-3xl border-gray-400 border-2 outline outline-gray-400">
          <p className="text-center p-2 m-3 text-xl font-bold">Sales</p>
          <p>Expert sales assistance for all customers. Our sales team is dedicated to providing expert guidance to customers</p>
          <p className="font-bold m-3">876 345 793</p>
        </div>
   
      </div>
      <Footer/>
    </div>
  );
};

export default contact;
