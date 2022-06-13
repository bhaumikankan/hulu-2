function HeaderItem({ title, Icon }) {
  return (
    <div className="flex flex-col items-center cursor-pointer group hover:text-white">
      <Icon className="h-7 group-hover:animate-bounce" />
      <p className=" opacity-0  text-xs  group-hover:opacity-100 sm:tracking-widest ">
        {title}
      </p>
    </div>
  );
}

export default HeaderItem;
