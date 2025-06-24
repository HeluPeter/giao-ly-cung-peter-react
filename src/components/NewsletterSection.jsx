const NewsletterSection = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="bg-warmBeige rounded-2xl p-8 md:p-12">
        <h3 className="font-lora text-2xl font-semibold text-amber-800 mb-2">Đăng ký nhận tin</h3>
        <p className="text-amber-700 mb-4">Nhận thông báo khi có bài kiểm tra mới và cập nhật giáo lý thú vị!</p>
        <form className="flex flex-col sm:flex-row gap-3">
          <input type="email" placeholder="Email của bạn" className="flex-grow px-4 py-3 rounded-lg" />
          <button type="submit" className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg">Đăng Ký</button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
