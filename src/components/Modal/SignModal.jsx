import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { toast } from "react-toastify";
import { GlobalStates } from "../../context";

const SignModal = () => {
  const { setSignedIn, showModal, setShowModal } = GlobalStates();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div
      className={`${
        showModal ? "block" : "hidden"
      } overflow-auto fixed top-0 bottom-0 w-full h-full z-[200] bg-black/80`}
    >
      <div className="min-h-[620px]">
        <div className="h-[520px] relative w-[410px] bg-white text-black my-[30px] mx-auto rounded-lg flex flex-col  gap-5 items-center p-10 ">
            <div className="absolute top-10 right-10 text-gray-500 cursor-pointer" onClick={() => setShowModal(false)}>
            <AiOutlineClose size={22}/>
            </div>
          <div>
            <img src="/imgs/marvel.png" alt="" />
          </div>
          <p className="text-red-600">sign in</p>
          <form
            className="w-full"
            onSubmit={(e) => {
              e.preventDefault();
              const id = toast.loading("Please wait...");
              setTimeout(() => {
                if (
                  email.toLowerCase() === "check@gmail.com" &&
                  password === "12345678"
                ) {
                  setSignedIn(true);
                  toast.update(id, {
                    render: "Signed In successfully",
                    type: "success",
                    isLoading: false,
                    autoClose: 2000,
                  });
                  setShowModal(false);
                } else {
                  toast.update(id, {
                    render: "Invalid Email or Password",
                    type: "error",
                    isLoading: false,
                    autoClose: 2000,
                  });
                }
              }, 2000);
            }}
          >
            <div className="mb-6">
              <input
                type="email"
                id="email"
                className="common-input"
                placeholder="john.doe@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                id="password"
                className="common-input"
                placeholder="•••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="py-3 w-full text-white uppercase bg-red-600 rounded-md"
            >
              {" "}
              Sign In
            </button>
          </form>
          <div>
            <p className="text-red-700">
              email: <span className="lowercase">check@gmail.com</span>{" "}
            </p>
            <p className="text-red-700">
              password: <span className="lowercase">12345678</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignModal;
