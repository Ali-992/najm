import Image from 'next/image';
import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="footer bg-base-200 p-10 text-base-content">
        <div>
          <Image src="/images/logo.png" width={160} height={80}></Image>
          <p className="mt-2 capitalize">
            <strong className="text-heading">Najm Al Mashriq</strong>{' '}
            Contracting Company.
          </p>
          <p className="capitalize"> Rental Of light and heavy equipment</p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
        </div>
      </div>
      <div className="bg-base-200 text-center md:py-4">
        <p className="text-sm">
          © {new Date().getFullYear()}{' '}
          <strong className="text-heading">Najm Al Mashriq</strong>. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
