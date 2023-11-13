const StatsItem = ({ label, children }) => {
  return (
    <p>
      <span>{children}</span>
      <span>{label}</span>
    </p>
  );
};

export default StatsItem;
