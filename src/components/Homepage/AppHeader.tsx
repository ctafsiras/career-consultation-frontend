import React from "react";
import { Carousel } from "antd";
import Image from "next/image";
import header_1 from "@/assets/header_1.jpg";
import header_2 from "@/assets/header_2.jpg";
import header_3 from "@/assets/header_3.jpg";
import header_4 from "@/assets/header_4.jpg";

const images = [header_1, header_2, header_3, header_4];

const AppHeader: React.FC = () => (
  <Carousel autoplay>
   {images.map((image, index) =>(
     <div key={index}>
     <Image
       src={image}
       alt="Header Image"
       width={1400}
       height={550}
       layout="responsive"
     />
   </div>
   ))}
  </Carousel>
);

export default AppHeader;