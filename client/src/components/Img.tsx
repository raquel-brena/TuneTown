interface ImageProps {
  src: string;
  alt: string;
}

export const Img = ({ src, alt }: ImageProps) => {
  return (
      <img className="w-auto h-auto" src={src} alt={alt} />
  );
};
