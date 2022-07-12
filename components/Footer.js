import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsFacebook } from "react-icons/bs";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { AiFillYoutube, AiOutlinePhone } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
// import Logo from "./logo2.png`";
const Footer = () => {
  return (
    <footer className='position-relative'>
      <div className='bg-dark'>
        <div className='container d-flex align-center justify-content-center pt-5 pb-5'>
          <Image
            className='img-fluid'
            src='/logo2.png'
            width={250}
            height={100}
            alt='logo'
          />
        </div>
        <div className='container me-auto ms-auto text-white-50 text-center d-flex justify-content-between pb-5'>
          <div className='text-start flex-fill'>
            <h2 className='text-capitalize text-warning text-decoration-underline'>
              bussiness time
            </h2>
            <p>Monday - Friday: 08.00am to 05.00pm</p>
            <p>Saturday: 10.00am to 08.00pm</p>
            <p>Sunday: Closed</p>
          </div>
          <div className='flex-fill'>
            <h2 className='text-capitalize text-warning'>about us</h2>
            <p>
              Aenean commodo ligula eget dolor aenean massa. Cum sociis nat
              penatibu set magnis dis parturient montes.
            </p>
            <ul className='d-flex list-unstyled justify-content-center'>
              <li className='me-3'>
                <a>
                  <BsFacebook />
                </a>
              </li>
              <li className='me-3'>
                <a>
                  <FaInstagram />
                </a>
              </li>
              <li className='me-3'>
                <a>
                  <AiFillYoutube />
                </a>
              </li>
              <li className='me-3'>
                <a>
                  <FaTiktok />
                </a>
              </li>
            </ul>
          </div>
          <div className='text-start flex-fill'>
            <h2 className='text-capitalize text-warning text-decoration-underline'>
              contact us
            </h2>
            <p>
              <HiOutlineLocationMarker className='me-2' />
              975 Nguyễn Kiệm Phường 3 quận Gò Vấp TPHCM
            </p>
            <p>
              <AiOutlinePhone className='me-2' /> +84 393267994
            </p>
          </div>
        </div>
        <div></div>
      </div>
      <div className='bg-warning text-center text-white '>
        <p>
          Copyright © 2022 All Rights Reserved | Design By:
          <Link href='/'>
            <a className='text-decoration-none'>Tastee</a>
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
