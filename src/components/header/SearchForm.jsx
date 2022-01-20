const SearchForm = ({ isOpen }) => {
  return (
    <form
      style={{
        clipPath: isOpen && "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      }}
    >
      <input
        autoFocus={true}
        type="search"
        id="search-bar"
        placeholder="search here..."
      />
      <label htmlFor="search-bar" className="fas fa-search"></label>
    </form>
  );
};

export default SearchForm;
