const FeaturedQuiz = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 bg-softPink p-8 flex items-center justify-center">
            <span className="text-5xl">⭐</span>
          </div>
          <div className="md:w-1/2 p-8">
            <span className="bg-rose-100 text-rose-800 text-xs px-2 py-1 rounded-full">Phổ Biến Nhất</span>
            <h3 className="font-lora text-2xl font-semibold text-amber-800 mt-3 mb-4">Âm Tiết</h3>
            <p className="text-amber-700 mb-6">Đọc câu hỏi và ghi ra đáp án đúng nhất.</p>
            <a href="/giao-ly-mua-chay/fill-in-sentences" className="inline-block bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-lg transition duration-300 ease-in-out">Làm Bài</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedQuiz;