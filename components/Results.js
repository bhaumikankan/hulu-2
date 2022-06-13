import Thumbnil from "./Thumbnil";

function Results({ result }) {
  const data = result.results;
  return (
    <div className="grid grid-cols-1 gap-4 m-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 ">
      {data.map((result,index) => {
        return <Thumbnil key={index} data={result}/>
      })}
    </div>
  );
}

export default Results;
