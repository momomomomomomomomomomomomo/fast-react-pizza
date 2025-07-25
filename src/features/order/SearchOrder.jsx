import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="foucus:ring-yellow-500 focus:ring-opacity-50 w-28 rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 sm:w-64 sm:focus:w-72"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="Search order #"
      />
    </form>
  );
}

export default SearchOrder;
