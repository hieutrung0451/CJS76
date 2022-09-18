import "../css/Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="container-add">
        <div className="expense">
          <span>Name</span>
          <input type="text" placeholder="Enter name here ..." />
        </div>
        <div className="expense">
          <span>Amount</span>
          <input type="text" placeholder="Enter amount here ..." />
        </div>
        <div className="expense">
          <span>Date</span>
          <input type="text" placeholder="Enter date here ..." />
        </div>
        <button className="add-expense">ADD</button>
        <button className="cancel">CANCEL</button>
      </div>
      <button className="add-btn">ADD NEW EXPENSE</button>
    </div>
  );
};

export default Header;
