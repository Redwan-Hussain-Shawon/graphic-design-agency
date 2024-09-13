import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { AwardIcon } from "lucide-react";
import ProductList from "../_components/ProductList";

const fetchProducts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "products"));
    const productsArray = [];
    querySnapshot.forEach((doc) => {
      productsArray.push({ id: doc.id, ...doc.data() });
    });
    return productsArray;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

const filterData = async (searchValue, product) => {
  const filtered = product.filter((itme) => {
    return itme.title.toLowerCase().includes(searchValue.toLowerCase());
  });
  return filtered;
};

async function CategorySearhc({ params }) {
  const allProduct = await fetchProducts();
  const mainProduct = await filterData(params.slug, allProduct);
  return (
    <div className="py-12 px-4">
      <div className="container">
        {mainProduct.length > 0 ? 
          <>
            <h2 className="text-4xl mb-8 font-bold text-center">Top Trending Design</h2>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {mainProduct.map((item) => (
                <ProductList key={item.id} product={item} />
              ))}
            </div>
          </>
         : 
          <div>
            <h3 className="text-center p-5 text-red-600 text-3xl font-semibold">Product not available! </h3>
          </div>
        }
      </div>
    </div>
  );
  
}

export default CategorySearhc;
