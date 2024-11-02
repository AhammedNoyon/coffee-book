import PropType from "prop-types";
const Header = ({ title, subtitle }) => {
  return (
    <div className="text-center my-10">
      <h3 className="text-3xl font-bold">{title}</h3>
      <p className="text-lg font-medium text-gray-500">{subtitle}</p>
    </div>
  );
};

Header.propTypes = {
  title: PropType.string,
  subtitle: PropType.string,
};
export default Header;
