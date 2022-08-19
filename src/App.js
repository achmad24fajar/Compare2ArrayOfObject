import "./styles.css";
import { oldCode, newCode } from "./data";

export default function App() {
  const isSameIzin = (a, b) => a.value === b.value;

  const onlyInLeft = (left, right, compareFunction) =>
    left.filter(
      (leftValue) =>
        !right.some((rightValue) => compareFunction(leftValue, rightValue))
    );

  let compare = oldCode
    .map((old) => {
      const onlyInA = onlyInLeft(old.kd_izin, newCode, isSameIzin);
      return {
        ...old,
        kd_izin: onlyInA
      };
    })
    .filter((empty) => empty.kd_izin.length > 0);

  console.log(compare);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
