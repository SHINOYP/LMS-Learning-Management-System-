import { useAuthContext } from "../../hooks/useAuthContext";

const Header = ({ check, setCheck }) => {
  const { user } = useAuthContext();

  const handleChangeMessage = () => {
    setCheck(!check);
  };
  return (
    <header className="hame flex bg-red w-[120%] -ml-10 border-b h-14 border-gray-400 bg-white overflow-hidden">
     <div className="ml-14 -mt-2">
     <input type="checkbox" id="check" onChange={handleChangeMessage} />
      <label htmlFor="check" className="checkbtn">
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
      </label>
     </div>
    </header>
  );
};

export default Header;
