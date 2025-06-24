const Navbar = () => {
  return (
    <nav className="bg-warmBeige shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="font-lora text-xl font-bold text-amber-800">
            Học Giáo Lý Cùng Peter
          </span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="font-nunito text-amber-800 hover:text-amber-900">Trang Chủ</a>
          <a href="#quizzes" className="font-nunito text-amber-800 hover:text-amber-900">Bài Kiểm Tra</a>
          <a href="#about" className="font-nunito text-amber-800 hover:text-amber-900">Giới Thiệu</a>
          <a href="#contact" className="font-nunito text-amber-800 hover:text-amber-900">Liên Hệ</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;