"use client"
import { useRef } from 'react';

export default function Contact() {
  const nameRef = useRef();
  const emailRef = useRef();
  const contentRef = useRef();

  const validateForm = () => {
    let name = nameRef.current.value;
    let email = emailRef.current.value;
    let content = contentRef.current.value;

    if (name.trim() === "" || email.trim() === "" || content.trim() === "") {
      alert("Please complete the form!");
      return;
    }

    if (
      !email
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      alert("Enter a valid email!");
      return;
    }

    alert("Thanks for contacting me! I will reach out to you ASAP!");
    document.getElementById("contactForm").submit();
  };

  return (
    <section id="contact" className="flex flex-col justify-between bg-[#9747FF] py-10 px-4 sm:px-0 lg:px-24">
      <p className="text-white text-3xl sm:text-4xl font-bold pb-8">
      Wanna react me ?
      </p>

      <form
        id="contactForm"
        action="https://formspree.io/f/mvgzrgae"
        method="POST"
        className="flex flex-col w-full gap-2"
      >
        {/* Name Field */}
        <input
          ref={nameRef}
          className="w-full pt-[15px] pr-0 pb-[15px] pl-[15px] bg-white/28 border-0 outline-none text-white/10 text-lg sm:text-xl font-[Josefin Sans] rounded-lg placeholder-white placeholder-opacity-60"
          type="text"
          placeholder="Name"
          name="name"
        />

        {/* Email Field */}
        <input
          ref={emailRef}
          className="w-full pt-[15px] pr-0 pb-[15px] pl-[15px] bg-white/28 border-0 outline-none text-white text-lg sm:text-xl font-[Josefin Sans] rounded-lg placeholder-white placeholder-opacity-60"
          type="email"
          placeholder="Email"
          name="email"
        />

        {/* Message Field */}
        <textarea  
          ref={contentRef} 
          className="w-full p-3 bg-white/28 border-none outline-none text-white text-lg sm:text-xl placeholder-white placeholder-opacity-60 font-[Josefin Sans] rounded-lg resize-none"
          rows="5" 
          placeholder="Write Anything !! A simple Hi also works 🙌" 
          name="content">
        </textarea>

        {/* Submit Button */}
        <button
          type="button"
          className="bg-white/80 text-purple-700/60 items-start lg:w-1/5 font-bold text-lg sm:text-xl rounded-lg py-3 cursor-pointer transition-all duration-300 "
          onClick={validateForm}
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
