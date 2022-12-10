import {AiFillFacebook,AiOutlineTwitter,AiFillYoutube} from "react-icons/ai"
import {ImInstagram} from "react-icons/im"
import {GrTumblr} from "react-icons/gr"
import {RiAlarmWarningFill} from "react-icons/ri"
import {BsPinterest} from "react-icons/bs"

export default function Footer() {
  return (
    <div className="bg-[#151515]">
        
    <div className="flex justify-between  contain-center py-[100px] flex-wrap">
      <div>
        <img src="/imgs/mlogo.png" alt="" />
      </div>
      <div className="flex flex-col gap-3">
        <div>About Marvel</div>
        <div>Help/faqs</div>
        <div>Career</div>
        <div>Internships</div>
      </div>
      <div className="flex flex-col gap-3 font-[400]">
        <div>Advertising </div>
        <div>Disney+</div>
        <div>marvelhq.com</div>
        <div>
          Redeem digital <br /> comics
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex gap-5">
          <img
            className="w-[60px]"
            src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/marvel_insider-topnav-logo-large2x.png"
            alt=""
          />
          <div>
            <h3>MARVEL INSIDER</h3>
            <p className="text-gray-400">Get Rewarded for Being a Marvel Fan</p>
          </div>
        </div>
        <div className="flex gap-5">
          <img
            className="w-[60px]"
            src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/mu-logo-w-nav-2x-2021-02.png"
            alt=""
          />
          <div>
            <h3>MARVEL UNLIMITED</h3>
            <p className="text-gray-400">Access Over 30,000+ Digital Comics</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 text-gray-500">
        <h3 className="text-white">Follow Marvel</h3>
        <div className="flex gap-7">
            <AiFillFacebook size={21} className="transition-all duration-300 cursor-pointer hover:text-white"/>
            <AiOutlineTwitter size={21} className="transition-all duration-300 cursor-pointer hover:text-white"/>
            <ImInstagram size={21} className="transition-all duration-300 cursor-pointer hover:text-white"/>
            <GrTumblr size={21} className="transition-all duration-300 cursor-pointer hover:text-white"/>
           
        </div>
        <div className="flex gap-7">
        <AiFillYoutube size={21} className="transition-all duration-300 cursor-pointer hover:text-white"/>
            <RiAlarmWarningFill size={21} className="transition-all duration-300 cursor-pointer hover:text-white"/>
            <BsPinterest size={21} className="transition-all duration-300 cursor-pointer hover:text-white"/>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 justify-center px-10 py-[50px] text-gray-400 capitalize basis-full tracking-wider">
        <span className="pr-7 whitespace-nowrap">Terms in Use</span>
        <span className="pr-7 whitespace-nowrap">privacy policy</span>
        <span className="pr-7 whitespace-nowrap">Your california privacy rights</span>
        <span className="pr-7 whitespace-nowrap">Do not sell my personal information</span>
        <span className="pr-7 whitespace-nowrap">Children online privacy policy</span>
        <span className="pr-7 whitespace-nowrap">License agreement</span>
        <span className="pr-7 whitespace-nowrap">Interest based adds</span>
        <span className="pr-7 whitespace-nowrap">Marvel insider terms</span>
        <span className="pr-7 whitespace-nowrap">@2022 marvel</span>
      </div>
    </div>
    </div>
  );
}
