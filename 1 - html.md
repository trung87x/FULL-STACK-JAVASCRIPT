# ✅ TỔNG HỢP 10 NGỮ CẢNH HTML CƠ BẢN

---

## I-1: Khung tài liệu tối thiểu

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

---

## I-2: Thẻ ngữ nghĩa thường dùng

```html
<header>
  <h1>Trang Demo</h1>
</header>

<nav>
  <a href="/">Trang chủ</a> | <a href="/bai-viet">Bài viết</a> |
  <a href="/lien-he">Liên hệ</a>
</nav>

<main>
  <section>
    <h2>Giới thiệu</h2>
    <article>
      <h3>Bài viết mẫu</h3>
      <p>Đây là nội dung bài viết minh hoạ cho cấu trúc HTML ngữ nghĩa.</p>
    </article>
  </section>

  <aside>
    <h3>Mục lục</h3>
    <ol>
      <li>Giới thiệu</li>
      <li>Nội dung chính</li>
      <li>Kết luận</li>
    </ol>
  </aside>
</main>

<footer>
  <p>© 2025 Demo Site</p>
</footer>
```

---

## I-3: Văn bản & liên kết

- Tiêu đề: `<h1>.. <h6>` (chỉ một `<h1>` / trang).  
- Đoạn văn: `<p>` — khoảng cách dùng `mb-*`.  
- Danh sách: `<ul>`, `<ol>`, `<li>`.  
- Liên kết: `<a href target rel>`. Nếu `target="_blank"` thì thêm `rel="noopener"`.  
- Inline semantic: `<strong>`, `<em>`, `<mark>`, `<code>`.  

Ví dụ:

```html
<a href="https://tailwindcss.com" target="_blank" rel="noopener">
  Tài liệu Tailwind
</a>
```

---

## I-4: Ảnh, SVG, video

- `<img alt>` luôn có `alt` mô tả.  
- Dùng `object-cover`, `aspect-video` để kiểm soát tỉ lệ.  
- Ưu tiên SVG inline để đổi màu bằng `fill-current`.  
- Với video/audio: dùng `controls` và `<track>` để có caption.  

Ví dụ:

```html
<img src="https://picsum.photos/640/360" alt="Ảnh minh hoạ">
```

---

## I-5: Form cơ bản

Cặp đôi quan trọng: `<label for>` ↔ `id`.

```html
<form>
  <div>
    <label for="email">Email</label>
    <input id="email" type="email" required placeholder="you@example.com">
  </div>
  <div>
    <label for="pw">Mật khẩu</label>
    <input id="pw" type="password" minlength="6">
  </div>
  <div>
    <input id="remember" type="checkbox">
    <label for="remember">Ghi nhớ đăng nhập</label>
  </div>
  <button type="submit">Đăng nhập</button>
</form>
```

Ví dụ khác:

```html
<label for="q">Tìm kiếm</label>
<input id="q" name="q" type="search" placeholder="Nhập từ khoá">
```

---

## I-6: Bảng

Dùng đúng `thead` / `tbody` / `th`.

```html
<table>
  <thead>
    <tr>
      <th>Từ</th>
      <th>Nghĩa</th>
      <th>Từ loại</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>apple</td><td>quả táo</td><td>noun</td>
    </tr>
    <tr>
      <td>run</td><td>chạy</td><td>verb</td>
    </tr>
  </tbody>
</table>
```

---

## I-7: Meta & SEO cơ bản

- `<meta name="description">` (~150 ký tự).  
- Open Graph: `og:title`, `og:description`, `og:image`.  
- Favicon: `<link rel="icon" href="/favicon.ico">`.  
- Dùng `<button>` cho hành động, `<a>` cho điều hướng.  

Ví dụ:

```html
<meta property="og:title" content="EnglishKid">
<meta property="og:description" content="Học từ vựng siêu nhanh.">
<meta property="og:image" content="https://example.com/og.png">
```

---

## I-8: Truy cập (a11y) tối thiểu cần nhớ

- Thứ tự heading hợp lý, không bỏ cấp tuỳ tiện.  
- Ảnh phải có `alt` (nếu trang trí: `alt=""`).  
- Label đúng cách, `tabindex` tự nhiên, `:focus` rõ ràng.  
- Màu sắc tương phản (Tailwind hỗ trợ `focus`, `hover`, `aria-*`).  
- Dùng `role` / `aria-*` khi thật sự cần.  

---

## I-9: Mẫu layout nhanh (Grid/Flex)

### Card grid 3 cột responsive

```html
<div>
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
</div>
```

### Sidebar layout

```html
<div>
  <aside>Sidebar</aside>
  <section>Main content</section>
</div>
```

---

## I-10: Mẹo nhớ nhanh khi gắn Tailwind vào HTML

1. Box trước, typography sau: `p-*`, `m-*`, `rounded-*` rồi mới màu/chữ.  
2. Responsive theo mobile-first: mặc định → `sm:` → `md:` → `lg:` → `xl:`.  
3. State: `hover:`, `focus:`, `active:`, `disabled:`, `aria-selected:`…  
4. Nhóm phần tử: `space-x-*`, `space-y-*`, `divide-*`.  
5. Icon SVG inline: đổi màu bằng `fill-current`, kích thước `w-* h-*`.  
6. Utilities ít gặp nhưng hữu ích: `line-clamp-*`, `aspect-*`, `backdrop-blur`, `scroll-smooth`.  
