import { useBlogPost } from '@docusaurus/theme-common/internal';

export default function Preview() {
  const {metadata} = useBlogPost();
  const {frontMatter} = metadata;

  let image: string = frontMatter.image_url ? String(frontMatter.image_url) : '';
  if (!image) {
    const images = [
      'https://cdn.jsdelivr.net/gh/inventare/docusaurus-theme@master/images/abstract/image1.jpg',
      'https://cdn.jsdelivr.net/gh/inventare/docusaurus-theme@master/images/abstract/image2.jpg',
      'https://cdn.jsdelivr.net/gh/inventare/docusaurus-theme@master/images/abstract/image3.jpg',
      'https://cdn.jsdelivr.net/gh/inventare/docusaurus-theme@master/images/abstract/image4.jpg',
      'https://cdn.jsdelivr.net/gh/inventare/docusaurus-theme@master/images/abstract/image5.jpg',
    ];
    image = images[Math.floor(Math.random() * images.length)]
  }

  return (
    <>
      <img src={image} loading="lazy" />
    </>
  )
}
