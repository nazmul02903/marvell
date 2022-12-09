import { BiSearch } from "react-icons/bi";

export default function Header() {
  return (
    <>
    <div className="border-y border-y-bcolor">
      <div className="flex items-streatch contain-center">
        <div className="flex items-center basis-[190px] border-x border-x-bcolor gap-1 justify-center">
          <img src="/imgs/inlogo.png" alt="" />
          <div className="flex gap-2">
            <h4>Sign In</h4>
            <span>|</span>
            <h4>join</h4>
          </div>
        </div>
        <div className="w-full">
          <img className="mx-auto" src="/imgs/marvel.png" alt="" />
        </div>
        <div className="flex basis-[190px] border-x border-x-bcolor items-center justify-center gap-2">
          <img
            className="h-[25px]"
            src="https://i.annihil.us/u/prod/marvel/images/mu/web/2021/icon-mu-shield.png"
            alt=""
          />
          <div className="tracking-wider leading-4 text-center">
            <h4>marvel United</h4>
            <h4>Subscribe</h4>
          </div>
        </div>
        <div className="flex justify-center items-center p-3 border-r border-r-bcolor">
          <BiSearch size={25} />
        </div>
      </div>
    </div>
    <div className="flex justify-center">
        <div className="flex gap-[30px] justify-center py-2 hover:text-gray-500 transition-all duration-300">
        <div className="cursor-pointer hover:text-white">News</div>
        <div className="cursor-pointer hover:text-white">Comics</div>
        <div className="cursor-pointer hover:text-white">Characters</div>
        <div className="cursor-pointer hover:text-white">movies</div>
        <div className="cursor-pointer hover:text-white">Tv shows</div>
        <div className="cursor-pointer hover:text-white">games</div>
        <div className="cursor-pointer hover:text-white">videos</div>
        <div className="cursor-pointer hover:text-white">more</div>
            
        </div>
    </div>
    </>
  );
}
