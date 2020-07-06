import React from "react";

const Footer = () => {
  return (
    <footer className="text-xs bg-primus-blue text-blue-500">
      <div className="border-t border-blue-700">
        <div className="custom-max-width md:mx-auto">
          <div className="px-2 py-2">
            <strong>You are here</strong>: Home
          </div>
        </div>
      </div>
      <div className="border-t border-blue-700">
        <div className="custom-max-width md:mx-auto">
          <div className="px-2 py-5">
            Copyright &copy; 2016 Seluruh Hak Cipta dimiliki oleh Politeknik
            Keuangan Negara STAN. Powered by UPT Sistem Informasi PKN STAN
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
