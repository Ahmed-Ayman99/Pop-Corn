const Error = ({ message = "Something went very wrong" }) => {
  return (
    <div className='oaerror danger'>
      <strong>Error</strong>- {message}
    </div>
  );
};

export default Error;
