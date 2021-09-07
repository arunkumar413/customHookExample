import "./styles.css";
import { useFetch } from "./useFetch";

export default function App() {
  const { data } = useFetch("https://jsonplaceholder.typicode.com/posts");

  function postElements() {
    const elemetns = data.map(function (item, index) {
      return <p key={index.toString()}> {item.title} </p>;
    });

    return elemetns;
  }

  return <div className="App">{data && data.length && postElements()}</div>;
}
