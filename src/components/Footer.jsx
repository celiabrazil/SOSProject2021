import React from "react";


var phantom = {
  display: 'relative',
  padding: '20px',
  height: '60px',
  width: '100%',
  bottom: 0,
}


function Footer() {
  return (
    <div className="footer" >
      <footer className="py-5 bg-dark " style={phantom}>
        <div className="container">
          <p className="m-0 text-center text-white">
            Copyright &copy; Your Website 2020
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
