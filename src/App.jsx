import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsRefreshing } from "./redux/auth/selectors";
import { refreshUser } from "./redux/auth/operations";
import Layout from "./components/Layout/Layout";
import RoutesList from "./components/RoutesList/RoutesList";
import ScrollTopBtn from "./components/ScrollTopBtn/ScrollTopBtn";

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? null : (
    <>
      <Layout />
      <RoutesList />
      <ScrollTopBtn />
    </>
  );
}

export default App;
