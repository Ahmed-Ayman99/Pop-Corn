import { Toaster } from "react-hot-toast";

const ToasterItem = () => {
  return (
    <Toaster
      position="top-center"
      gutter={12}
      containerStyle={{ margin: "8px" }}
      toastOptions={{
        success: {
          duration: 2000,
        },
        error: {
          duration: 4000,
        },
        style: {
          fontSize: "1.6rem",
          maxWidth: "50rem",
          padding: "1.6rem 2.4rem",
          backgroundColor: "var(--color-background-500)",
          color: "var(--color-text)",
        },
      }}
    />
  );
};

export default ToasterItem;
