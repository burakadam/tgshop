import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Breadcrumbs from "./components/breadcrumbs";
import CardList from "./components/cardList/CardList";
import Container from "./components/container";
import Filter from "./components/filter";
import Footer from "./components/footer";
import Header from "./components/header";
import Safe from "./components/safe";
import Text from "./components/text";

import { setProductList } from "./features/productSlice";

import { getAllProducts } from "./helpers/CardHelper";

function App() {
  const products = useSelector((state) => state.product.productList);
  const [isLoading, setLoading] = useState(true);
  const dispatch = useDispatch();

  async function _getCards() {
    const result = await getAllProducts();
    if (!result.isError) {
      dispatch(setProductList({ list: result.data.products }));
    } else {
      alert(result.errorMessage);
    }
    setLoading(false);
  }

  useEffect(() => {
    _getCards();
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <Safe>
          <Breadcrumbs />
          {isLoading ? (
            <Text>...loading</Text>
          ) : (
            <>
              {products.length > 0 ? (
                <Container>
                  <Filter />
                  <section>
                    <CardList />
                  </section>
                </Container>
              ) : (
                <Text>There is no product</Text>
              )}
            </>
          )}
        </Safe>
      </main>
      <Footer />
    </div>
  );
}

export default App;
