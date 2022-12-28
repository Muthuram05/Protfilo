const Coloritem = ({color,setColor}) => <div onClick={setColor} className="color-item" style={{'--orange':color}}></div>
export default Coloritem;