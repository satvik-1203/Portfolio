import { useState } from "react";
import Image from "next/image";

interface ImageProps {
  src: string;
  alt: string;
  width: string;
  height: string;
  blurDataURL: string;
}

export default function NextImage({
  src,
  alt,
  width,
  height,
  blurDataURL,
}: ImageProps) {
  const [loaded, setLoaded] = useState<boolean>(false);
  const zoom = loaded ? "zoom" : "";
  console.log(width, height);
  return (
    <div className="container">
      <div className={zoom}>
        <Image
          onLoadingComplete={() => setLoaded(true)}
          src={src}
          alt={alt}
          width={1060}
          height={550}
          loading="lazy"
          placeholder={blurDataURL ? "blur" : undefined}
          blurDataURL={blurDataURL}
        />
      </div>

      <style jsx>
        {`
          .container {
            width: 100%;
            overflow: hidden;
          }
          .zoom {
            animation: zoom 0.3s linear;
          }
          @keyframes zoom {
            from {
              transform: scale(1.1);
            }
          }
        `}
      </style>
    </div>
  );
}
