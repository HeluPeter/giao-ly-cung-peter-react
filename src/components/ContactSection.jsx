const ContactSection = () => {
  return (
    <section id="contact" className="container mx-auto px-4 py-12">
      <h2 className="font-lora text-3xl font-bold text-amber-800 text-center mb-8">Liên Hệ</h2>
      <div className="bg-white rounded-xl p-8 shadow grid grid-cols-1 md:grid-cols-2 gap-8">
        <form className="space-y-4">
          <input className="w-full px-4 py-2 border rounded" placeholder="Họ và tên" />
          <input className="w-full px-4 py-2 border rounded" placeholder="Email" />
          <textarea className="w-full px-4 py-2 border rounded" placeholder="Nội dung"></textarea>
          <button type="submit" className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded">
            Gửi tin nhắn
          </button>
        </form>
        <div>
          <p className="mb-2">📧 Email: ninh.peterrock@gmail.com</p>
          <p className="mb-2">📞 Điện thoại: 0909.123.456</p>
          <p className="mb-2">📍 Địa chỉ: Nhà thờ XYZ, Quận ABC, TP.HCM</p>
          <p className="text-sm text-amber-600 mt-4">Giờ hỗ trợ: 08:00 - 17:00, Thứ 2 đến Thứ 7</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;