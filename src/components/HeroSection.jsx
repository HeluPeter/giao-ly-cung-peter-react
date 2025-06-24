const HeroSection = () => {
  return (
    <header className="container mx-auto px-4 pt-12 pb-8 text-center">
      <h1 className="font-lora text-4xl md:text-5xl font-bold text-amber-800 mb-4">
        Học Giáo Lý Cùng Peter
      </h1>
      <p className="font-nunito text-lg md:text-xl text-amber-700 max-w-2xl mx-auto">
        Khám phá các bài kiểm tra thú vị để thử thách trí óc và tận hưởng niềm vui!
      </p>
      <div className="w-24 h-1 bg-amber-300 mx-auto mt-6 rounded-full"></div>
      <div className="bg-red-500 text-white p-4">Kiểm tra Tailwind</div>
    </header>
  );
};

export default HeroSection;
