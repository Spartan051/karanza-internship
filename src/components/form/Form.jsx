import "./Form.css";
import { useRef } from "react";
import { FaHandPointRight } from "react-icons/fa";
const Form = ({ handleSerch, handlePage, handleUser }) => {
  const name = useRef(null);
  const family = useRef(null);
  const age = useRef(null);
  const work = useRef(null);
  const icon = useRef(null);
  return (
    <>
      <button className="backward" ref={icon} onClick={handleIcon}>
        <FaHandPointRight style={{ fontSize: "40px" }} />
      </button>
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" className="name" placeholder="name" ref={name} />
        <input
          type="text"
          className="family"
          placeholder="family"
          ref={family}
        />
        <input type="text" className="age" placeholder="age" ref={age} />
        <input type="text" className="work" placeholder="work" ref={work} />
        <input
          type="submit"
          className="submit"
          value="Serch"
          onClick={handleClick}
        />
      </form>
    </>
  );
  function handleSubmit(e) {
    e.preventDefault();
  }
  function handleClick() {
    if (
      name.current.value === "" &&
      family.current.value === "" &&
      age.current.value === "" &&
      work.current.value === ""
    ) {
      alert("please fill one field");
    } else {
      handleSerch(
        name.current.value,
        family.current.value,
        age.current.value,
        work.current.value
      );
      icon.current.style.display = "block";
    }
    handlePage(0);
  }
  function handleIcon() {
    icon.current.style.display = "none";
    handleUser();
  }
};
export default Form;
