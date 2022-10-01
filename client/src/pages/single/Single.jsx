// import Sidebar from "../../components/sidebar/Sidebar";
// import SinglePost from "../../components/singlePost/SinglePost";
// import "./single.css";
//
// export default function Single() {
//   return (
//     <div className="single">
//       <SinglePost />
//     </div>
//   );
// }

import "./single.css";
import Sidebar from "../../components/sidebar/Sidebar";
import SinglePost from "../../components/singlePost/SinglePost";

export default function Single() {
  return (
    <div className="single">
      <SinglePost/>
      <Sidebar />
    </div>
  );
}
