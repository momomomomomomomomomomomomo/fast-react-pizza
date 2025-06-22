import SearchOrder from "@/features/order/SearchOrder";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/">Fast React Pizza Co.</Link>
      <SearchOrder />
      <p>Mo</p>
    </header>
  );
}

export default Header;
