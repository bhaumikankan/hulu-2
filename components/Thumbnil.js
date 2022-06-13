import Image from "next/image";

function Thumbnil({data}) {
  return (
    <div className="group transition ease-in-out cursor-pointer hover:scale-105  text-white">
      <Image
      layout="responsive"
       src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
       width={1920}
       height={1080}
      />
      <p className="truncate">{data.overview}</p>
      <h1><b>{data.title||data.original_name}</b></h1>
    </div>
  )
}

export default Thumbnil