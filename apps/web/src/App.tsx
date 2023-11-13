import { useEffect, useState } from "react";
import { Foo } from "ui/components/foo";

export function App() {
  const [a, b] = useState(0);
  useEffect(() => {
    console.log(a, 1);
  }, []);
  return (
    <div className="bg-red-500 text-green-200">
      hello we here
      <Foo />
    </div>
  );
}
