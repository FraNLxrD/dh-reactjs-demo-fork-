import { createBrowserRouter } from "react-router-dom";
import { Home, List, ProductDetail } from "../pages";
import { fetchProductById, fetchProducts } from "../services/fetch-products";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/items",
    element: <List />,
    loader: async ({ request }) => {
      const url = new URL(request.url);
      const searchTerm = url.searchParams.get("search");

      const products = await fetchProducts(searchTerm);

      
      return products;
    },
  },
  {
    path: "/items/:id",
    element: <ProductDetail />,
    loader: async ({ params }) => {
      const { id } = params;
      const product = await fetchProductById(id);

      return product;
    },
    errorElement: <h1>Ocurrió un error al buscar el producto</h1>,
    // ErrorBoundary: () => {
    //   const params = window.location.pathname.split("/");

    //   return (
    //     <h1>Ocurrió un error al buscar el producto con ID: {params[2]}</h1>
    //   );
    // },
  },
]);
