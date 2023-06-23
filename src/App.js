import { Suspense, lazy } from "react";
import ScrollToTop from "./helpers/scroll-top";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// home pages
const HomeAutoParts = lazy(() => import("./pages/home/HomeAutoParts"));

// shop pages
const ShopGridNoSidebar = lazy(() => import("./pages/shop/ShopGridNoSidebar"));

// product pages
const Product = lazy(() => import("./pages/shop-product/Product"));


// other pages
const Contact = lazy(() => import("./pages/other/Contact"));
const MyAccount = lazy(() => import("./pages/other/MyAccount"));
const LoginRegister = lazy(() => import("./pages/other/LoginRegister"));
const Cart = lazy(() => import("./pages/other/Cart"));
const Wishlist = lazy(() => import("./pages/other/Wishlist"));
const Checkout = lazy(() => import("./pages/other/Checkout"));
const NotFound = lazy(() => import("./pages/other/NotFound"));

const App = () => {
  return (
      <Router>
        <ScrollToTop>
          <Suspense
            fallback={
              <div className="MindX Motor-preloader-wrapper">
                <div className="MindX Motor-preloader">
                  <span></span>
                  <span></span>
                </div>
              </div>
            }
          >
            <Routes>
              <Route
                path={process.env.PUBLIC_URL + "/"}
                element={<HomeAutoParts/>}
              />

              {/* Homepages */}
              <Route
                path={process.env.PUBLIC_URL + "/home-auto-parts"}
                element={<HomeAutoParts/>}
              />
     
              {/* Shop pages */}
              <Route
                path={process.env.PUBLIC_URL + "/shop-grid"}
                element={<ShopGridNoSidebar/>}
              />
             

              Shop product pages
              <Route
                path={process.env.PUBLIC_URL + "/product/:id"}
                element={<Product />}
              />
                          

              {/* Other pages */}
              <Route
                path={process.env.PUBLIC_URL + "/contact"}
                element={<Contact/>}
              />
              <Route
                path={process.env.PUBLIC_URL + "/my-account"}
                element={<MyAccount/>}
              />
              <Route
                path={process.env.PUBLIC_URL + "/login-register"}
                element={<LoginRegister/>}
              />

              <Route
                path={process.env.PUBLIC_URL + "/cart"}
                element={<Cart/>}
              />
              <Route
                path={process.env.PUBLIC_URL + "/wishlist"}
                element={<Wishlist/>}
              />

              <Route
                path={process.env.PUBLIC_URL + "/checkout"}
                element={<Checkout/>}
              /> 

              <Route path="*" element={<NotFound/>} />
            </Routes>
          </Suspense>
        </ScrollToTop>
      </Router>
  );
};

export default App;