const AboutSection = () => {
  return (
    <section id="about" className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="font-lora text-3xl font-bold text-amber-800 mb-2">Giới Thiệu</h2>
        <p className="text-amber-700 max-w-2xl mx-auto mb-6">
          Website được xây dựng để giúp thiếu nhi học giáo lý hiệu quả và vui vẻ qua các trò chơi tương tác.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-lora text-xl font-semibold text-amber-800 mb-2">Sứ Mệnh</h3>
            <p className="text-amber-700 text-sm">Truyền đạt kiến thức giáo lý qua phương pháp học tập vui vẻ và thân thiện với thiếu nhi.</p>
          </div>
          <div>
            <h3 className="font-lora text-xl font-semibold text-amber-800 mb-2">Giá Trị</h3>
            <p className="text-amber-700 text-sm">Giáo dục, Đức Tin, Niềm Vui và Tính Tương Tác là các giá trị nền tảng.</p>
          </div>
          <div>
            <h3 className="font-lora text-xl font-semibold text-amber-800 mb-2">Định Hướng</h3>
            <p className="text-amber-700 text-sm">Không ngừng cải tiến các trò chơi giáo lý để giúp các em tiếp thu nhanh chóng và nhớ lâu hơn.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
