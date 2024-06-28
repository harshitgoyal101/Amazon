
export const Navbar = () => {
    return (
      <div className="nav grid grid-cols-7 bg-[#131921] text-white ">
          
          <img src="../assets/amazon_logo.webp" className = "bg-[#131921] hover:border rounded border-white " />
          <div className="nav text-[#9CC1CC] hover:border rounded border-white  ">delivering to amal</div>
          <div>
          <input type="text" className="bg-[#FFFFFF]  placeholder-[#6F7373]  " placeholder="Search Amazon.in"/>
          </div>
          <div className="hover:border rounded border-white text-black">english</div>
          <div className="hover:border rounded border-white ">account and lists</div>
          <div className="hover:border rounded border-white ">orders</div>
          <div className="hover:border rounded border-white ">cart</div>
          
      </div>

  )
}