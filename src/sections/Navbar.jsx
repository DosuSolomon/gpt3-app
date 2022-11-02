import logo from '../assets/logo.png'
const Navbar = () =>{
  return (
    <div className="flex flex-row w-full justify-between items-center pt-8 px-20">
      <div className="flex flex-row text-white gap-[30px]">
        <img  src={logo} alt="logo" srcset="" />
        <nav className="flex flex-row gap-[20px] text-[18px] font-[500]">
          <p>
            <a href="#">Home</a>
          </p>
          <p>
            <a href="#">What's GTP</a>
          </p>
          <p>
            <a href="#">Open AI</a>
          </p>
          <p>
            <a href="#">Case Studies</a>
          </p>
          <p>
            <a href="#">Library</a>
          </p>
        </nav>
      </div>
      <div className="flex flex-row gap-[10px]">
        <button className="text-white text-[18px]">Sign in</button>
        <button className="text-white text-[18px] bg-[#FF4820] px-7 py-4 rounded-md">Sign up</button>
      </div>
    </div>
  );
}

export default Navbar;