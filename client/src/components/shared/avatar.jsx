function Avatar() {
  return (
    <div
      className={`flex cursor-pointer items-center justify-center bg-middleBlue border border-white text-gray-700 font-bold rounded-full w-8 h-8 text-sm overflow-hidden`}
    >
      <img
        loading="lazy"
        src="/avatar.png"
        alt={'Avatar'}
        className="w-6 h-6 object-cover"
      />
    </div>
  );
}

export default Avatar;
