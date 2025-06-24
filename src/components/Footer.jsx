const Footer = () => {
  return (
    <footer className="mt-12 py-12 bg-warmBeige text-amber-700 text-sm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Thương hiệu */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <svg
                className="w-6 h-6 text-amber-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6.253v13M12 6.253C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              <span className="font-lora text-lg font-bold text-amber-800">
                Học Giáo Lý Cùng Peter
              </span>
            </div>
            <p>
              Làm cho việc học trở nên vui vẻ và dễ tiếp cận cho mọi người thông
              qua các bài kiểm tra tương tác và nội dung giáo dục.
            </p>
          </div>

          {/* Liên kết nhanh */}
          <div>
            <h4 className="font-lora text-lg font-semibold text-amber-800 mb-4">
              Liên Kết Nhanh
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-amber-900">Trang Chủ</a>
              </li>
              <li>
                <a href="#quizzes" className="hover:text-amber-900">Tất Cả Bài Kiểm Tra</a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-900">Nổi Bật</a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-900">Danh Mục</a>
              </li>
            </ul>
          </div>

          {/* Giới thiệu */}
          <div>
            <h4 className="font-lora text-lg font-semibold text-amber-800 mb-4">
              Giới Thiệu
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-amber-900">Câu Chuyện Của Chúng Tôi</a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-900">Đội Ngũ</a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-900">Tuyển Dụng</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-900">Liên Hệ</a>
              </li>
            </ul>
          </div>

          {/* Kết nối */}
          <div>
            <h4 className="font-lora text-lg font-semibold text-amber-800 mb-4">Kết Nối</h4>
            <div className="flex space-x-4 mb-4">
              {/* Social icons - bạn có thể thay SVG khác nếu muốn */}
              <a href="#" className="w-8 h-8 bg-amber-600 text-white flex items-center justify-center rounded-full hover:bg-amber-700">
                <i className="fab fa-facebook-f">f</i>
              </a>
              <a href="#" className="w-8 h-8 bg-amber-600 text-white flex items-center justify-center rounded-full hover:bg-amber-700">
                <i className="fab fa-instagram">i</i>
              </a>
              <a href="#" className="w-8 h-8 bg-amber-600 text-white flex items-center justify-center rounded-full hover:bg-amber-700">
                <i className="fab fa-youtube">y</i>
              </a>
            </div>
            <p>Email: ninh.peterrock@gmail.com</p>
          </div>
        </div>

        <div className="border-t border-amber-300 mt-8 pt-6 text-center">
          <p>© 2025 Học Giáo Lý Cùng Peter.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
