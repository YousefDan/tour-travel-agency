const Icons = ({ setIsOpen, isOpen,setLoginForm }) => {
  return (
    <div className="icons">
      <i
        onClick={() => setIsOpen(!isOpen)}
        className={isOpen ? "fas fa-times" : "fas fa-search"}
      ></i>
      <i onClick={setLoginForm} className="fas fa-user"></i>
    </div>
  );
};

export default Icons;
