// let CurrentTime = () => {

//   let time = new Date();
//   return (
//     <div>
//       <p>This is curent time:{time.toLocaleDateString()} - {time.toLocaleTimeString()}</p>
//     </div>
//   );
// };
// export default CurrentTime;

import { useState, useEffect } from "react";

let CurrentTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date()); // update time every second
    }, 1000);

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div>
      <p>
        This is current time: {time.toLocaleDateString()} -{" "}
        {time.toLocaleTimeString()}
      </p>
    </div>
  );
};

export default CurrentTime;
