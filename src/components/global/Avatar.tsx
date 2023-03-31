import Image, { StaticImageData } from 'next/image';

type AvatarProps = {
  src: StaticImageData;
  height: number;
};

const Avatar = ({ src, height }: AvatarProps) => {
  return (
    <Image
      src={src}
      alt="avatar"
      height={height}
      style={{
        aspectRatio: 1,
        borderRadius: '50%'
      }}
    />
  );
};

export default Avatar;
