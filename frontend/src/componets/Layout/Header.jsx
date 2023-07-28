import { useAuthContext } from "../../hooks/useAuthContext";

const Header = ({ check, setCheck }) => {
  const { user } = useAuthContext();

  const handleChangeMessage = () => {
    setCheck(!check);
  };
  return (
    <header className="hame flex bg-red w-screen border-b h-12 border-gray-400 bg-white">
      <input type="checkbox" id="check" onChange={handleChangeMessage} />
      <label htmlFor="check" className="checkbtn">
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
      </label>
    </header>
  );
};

export default Header;
