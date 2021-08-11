import "./WidgetLg.scss";

const WidgetLg = ({ status }) => {
  const Button = ({ status }) => {
    return <button className={"item--btn " + status}>{status}</button>;
  };
  return (
    <div className="widgetLg">
      <span className="widgetLg__title">Lastest Transanctions</span>
      <div className="widgetLg__container">
        <div className="widgetLg__container--item">Customer</div>
        <div className="widgetLg__container--item">Date</div>
        <div className="widgetLg__container--item">Amount</div>
        <div className="widgetLg__container--item">Status</div>

        <div className="widgetLg__container--item">
          <div className="item__user">
            <img
              src="https://images.pexels.com/photos/1830937/pexels-photo-1830937.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="avatar"
            />
            <span className="item__user--username">Shark Dzung</span>
          </div>
        </div>
        <div className="widgetLg__container--item">8 Aug 21</div>
        <div className="widgetLg__container--item">$0 tỷ</div>
        <div className="widgetLg__container--item">
          <Button status="Pending" />
        </div>
      </div>
    </div>
  );
};

export default WidgetLg;
