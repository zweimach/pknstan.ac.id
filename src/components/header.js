import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "pkn-stan-title.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 751) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <header className="flex-none bg-primus-blue text-white">
      <div className="custom-max-width md:mx-auto md:py-5 md:pl-4 md:pr-8">
        <Link to="/" className="block">
          <Img
            fluid={data.placeholderImage.childImageSharp.fluid}
            alt="PKN STAN logo"
            style={{ maxWidth: "751px" }}
          />
        </Link>
      </div>
      <div className="md:border-t md:border-blue-700">
        <div className="custom-max-width md:mx-auto md:pl-2">
          <ul className="flex text-xs font-serif font-semibold uppercase">
            <li className="md:py-3 md:px-5 md:border-r md:border-blue-700">
              Beranda
            </li>
            <li className="md:py-3 md:px-5 md:border-r md:border-blue-700">
              Tentang PKN
            </li>
            <li className="md:py-3 md:px-5 md:border-r md:border-blue-700">
              Jurusan
            </li>
            <li className="md:py-3 md:px-5 md:border-r md:border-blue-700">
              Mahasiswa
            </li>
            <li className="md:py-3 md:px-5 md:border-r md:border-blue-700">
              PPPM
            </li>
            <li className="md:py-3 md:px-5 md:border-r md:border-blue-700">
              Satuan
            </li>
            <li className="md:py-3 md:px-5 md:border-r md:border-blue-700">
              Unit
            </li>
            <li className="md:py-3 md:px-5 md:border-r md:border-blue-700">
              Kontak Kami
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
