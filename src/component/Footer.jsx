import { useState } from "react";
// const Footer = ({ quote }) => {

//   return <div>{quote}</div>;
// };

// export default Footer;

const Footer = () => {
  const quote = "Have no fear of perfection - you'll never reach it.";
  return (
    <div className="mt-20 text-center bottom-0 static">
      <span className="text-3xl mt-50 bg-slate-400  ">
        &ldquo;{quote}&rdquo;
      </span>
    </div>
  );
};

export default Footer;
