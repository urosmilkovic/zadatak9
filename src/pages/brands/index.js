import React from "react";
import { Image } from "../../components/ui";
import { Content } from "../../layouts";
import "./style.scss";

const brands = [
  "http://www.mmksoccer.com/wp-content/uploads/2015/12/nike-logo-png-download-nike-logo-png-images-transparent-gallery-advertisement-1024.png",
  "https://www.freepnglogos.com/uploads/supreme-logo-png/supreme-logo-interesting-art--3.png",
  "https://logos-download.com/wp-content/uploads/2016/02/Reebok_Logo_2019.png",
  "https://cdn.freelogovectors.net/wp-content/uploads/2018/07/superdry-logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/2560px-Adidas_Logo.svg.png",
  "https://1000logos.net/wp-content/uploads/2017/05/Color-oNorth-Face.jpg",
  "https://avatars.mds.yandex.net/get-zen_doc/1101166/pub_5d1c531f540eaf00ad1546d3_5d1c590410155d00ac3ee00c/scale_1200",
  "https://i.pinimg.com/originals/32/fd/8e/32fd8ec0255ff485570ebaca6b2f1c04.png",
  "https://www.icon-icon.com/wp-content/uploads/2020/01/symbole-versace_1-1600x1200.jpg",
  "https://pngimg.com/uploads/gucci/gucci_PNG17.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Louis_Vuitton_logo_and_wordmark.svg/1679px-Louis_Vuitton_logo_and_wordmark.svg.png",
  "https://logos-download.com/wp-content/uploads/2016/02/Guess_white_logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/CK_Calvin_Klein_logo.svg/1200px-CK_Calvin_Klein_logo.svg.png",
  "https://logos-world.net/wp-content/uploads/2020/04/Levis-Logo.png",
  "https://i.pinimg.com/originals/de/24/28/de2428c0e4d944ee577963a633fdcc5f.png",
];

const Brands = () => {
  return (
    <Content>
      <h1>Brands we work with</h1>
      <div className="ec-brands-main">
        {brands.map((x, y) => (
          <div className="ec-brands-brand" key={y}>
            <div className="ec-brands-brand-inner">
              <Image src={x} alt="Brand" />
            </div>
          </div>
        ))}
      </div>
    </Content>
  );
};

export default Brands;
