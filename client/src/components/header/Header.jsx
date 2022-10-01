import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Welcome to our art community</span>
        <span className="headerTitleLg">Artinity</span>
      </div>
      <img
        className="headerImg"
        // src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        src="https://media.istockphoto.com/vectors/happy-young-employees-giving-support-and-help-each-other-vector-id1218490893?k=20&m=1218490893&s=612x612&w=0&h=svJxkZEFiciFHufK4LNn13TpNip1cVPW9Ig0Ahuugqs="
        alt=""
      />
    </div>
  );
}
