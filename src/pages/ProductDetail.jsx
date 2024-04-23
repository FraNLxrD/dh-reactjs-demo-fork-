import { useLoaderData } from "react-router-dom";
import { SearchInput } from "../components/search-input";
import { ProductLayout } from "../layouts/product-layout";
import { formatCurrency, replaceImgUrl } from "../utils/utils";

export default function ProductDetail() {
  const { description, images, price, rating, title, stock, brand } =
    useLoaderData();

  console.log();
  return (
    <ProductLayout>
      <SearchInput />

      <div>
        <h1>
          <span>{title}</span> - <span>{brand}</span>
        </h1>

        <figure>
          <img
            className="main-image"
            src={replaceImgUrl(images[0])}
            alt={title}
            title={title}
          />
          <ul>
            {images.map((image) => (
              <li key={image}>
                <img
                  src={replaceImgUrl(image)}
                  alt={title}
                  title={title}
                  loading="lazy"
                />
              </li>
            ))}
          </ul>
        </figure>

        <p>{formatCurrency(price)}</p>
        <p>Disponibles: {stock}</p>
        <p>{description}</p>

        <button>Comprar</button>
      </div>
    </ProductLayout>
  );
}
