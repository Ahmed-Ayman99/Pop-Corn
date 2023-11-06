import { BsCodeSlash } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="main-footer">
      <BsCodeSlash />
      <span>{new Date().getFullYear()}</span> by
      <a
        target="_blank"
        rel="noreferrer"
        className="author"
        href="https://www.linkedin.com/in/ahmed-ayman-723605229/"
      >
        Ahmed Ayman
      </a>
    </footer>
  );
};

export default Footer;
