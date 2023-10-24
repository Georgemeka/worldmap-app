import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import Homepage from "./pages/Homepage";
import NotFound from "./pages/NotFound";
import AppLayout from "./pages/AppLayout";
import CityList from "./components/CityList";

import CountryList from "./components/CountryList";
import City from "./components/City";
import { CitiesProvider } from "./contexts/CitiesContext";
import Form from "./components/Form";
import { AuthProvider } from "./contexts/FakeAuthContext";
import Login from "./pages/Login";
import ProtectedRoute from "./pages/ProtectedRoute";

export default function App() {
  return (
    <div>
      <AuthProvider>
        <CitiesProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="login" element={<Login />} />
              <Route path="product" element={<Product />} />
              <Route
                path="app"
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate replace to="cities" />} />
                <Route path="cities" element={<CityList />} />
                <Route path="cities/:id" element={<City />} />
                <Route path="countries" element={<CountryList />} />
                <Route path="form" element={<Form />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </CitiesProvider>
      </AuthProvider>
    </div>
  );
}
