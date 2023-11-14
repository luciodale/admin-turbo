import {useState} from "react";
import { Foo } from "ui/components/foo";

export function App() {
  const [a, b] = useState(0);


  return (
    <div className="bg-red-500  font-bold text-pink-200">
      hello we here
      <div
      onClick={() => console.log("yo whatsup")}>
        foo
      </div>
      <Foo />
    </div>
  );
}


