import style from "@/Styles/modules/share.module.css"; // or wherever you want the styles

import { FaTwitter, FaWhatsapp, FaFacebookF } from "react-icons/fa";
export default function ShareButtons({ title, slug }) {
  const url = `https://pilatesmais.com/blog/${slug}`;
  const text = `Check out this article: ${title}`;

  const encodedText = encodeURIComponent(text);
  const encodedUrl = encodeURIComponent(url);

  return (
    <div className={style.shareContainer}>
      <p>Compartilhe:</p>
      <div className={style.buttonRow}>
        <a
          href={`https://wa.me/?text=${encodedText}%20${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className={style.whatsapp}
        >
          <FaWhatsapp className={style.whatsapp1} />
        </a>
        <a
          href={`https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className={style.twitter}
        >
          <FaTwitter className={style.twitter1} />
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className={style.twitter}
        >
          <FaFacebookF className={style.facebook1} />
        </a>
      </div>
    </div>
  );
}
