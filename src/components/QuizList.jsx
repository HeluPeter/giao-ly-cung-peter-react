const QuizList = () => {
  const quizzes = [
    {
      title: "Trắc Nghiệm",
      type: "multiple-choice",
      href: "/giao-ly-mua-chay/multiple-choice",
      color: "bg-softYellow",
      icon: "📝",
      badge: "Trắc Nghiệm",
      desc: "Đọc câu hỏi và chọn đáp án đúng nhất.",
    },
    {
      title: "Âm Tiết",
      type: "fill-in-sentences",
      href: "/giao-ly-mua-chay/fill-in-sentences",
      color: "bg-softPink",
      icon: "🔤",
      badge: "Điền Từ",
      desc: "Điền từ còn thiếu vào chỗ trống.",
    },
    {
      title: "Điền Câu",
      type: "fill-in-blank-review",
      href: "/giao-ly-mua-chay/fill-in-blank-review",
      color: "bg-softBlue",
      icon: "🖊️",
      badge: "Điền Câu",
      desc: "Đọc câu và hoàn thành bằng cách viết đáp án.",
    },
    {
      title: "Đoán Từ (Body)",
      type: "guess-the-word",
      href: "/giao-ly-mua-chay/guess-the-word",
      color: "bg-warmBeige",
      icon: "💡",
      badge: "Body",
      desc: "Cùng bạn bè khám phá các từ khóa theo chủ đề.",
    },
    {
      title: "AI Hỏi-Đáp Giáo Lý",
      type: "audio-ai",
      href: "https://ung-dung-hoi-dap-audio.vercel.app/",
      color: "bg-softYellow",
      icon: "🤖",
      badge: "AI Bot",
      desc: "Ghi âm và kiểm tra đáp án bằng giọng nói!",
    },
  ];

  return (
    <section id="quizzes" className="container mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h2 className="font-lora text-3xl font-bold text-amber-800 mb-2">Bài Kiểm Tra</h2>
        <p className="text-amber-700">Chọn một chủ đề để bắt đầu</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {quizzes.map((quiz) => (
          <a
            key={quiz.type}
            href={quiz.href}
            className="card bg-white rounded-2xl overflow-hidden shadow-card transition transform hover:-translate-y-1 hover:shadow-hover"
          >
            <div className={`h-40 ${quiz.color} flex items-center justify-center`}>
              <span className="text-6xl">{quiz.icon}</span>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-lora text-xl font-semibold text-amber-800">{quiz.title}</h3>
                <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full">
                  {quiz.badge}
                </span>
              </div>
              <p className="text-amber-700 text-sm">{quiz.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default QuizList;
