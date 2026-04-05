// ============================================
// shop.js — Filter & Sort for Shop page
// ============================================

function filterProducts(category, btn) {
  // Update active button
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  const products = document.querySelectorAll('#product-grid .pro');
  let visible = 0;

  products.forEach(pro => {
    const cat = pro.getAttribute('data-category');
    if (category === 'all' || cat === category) {
      pro.style.display = 'block';
      visible++;
    } else {
      pro.style.display = 'none';
    }
  });

  document.getElementById('product-count').textContent =
    'Hiển thị ' + visible + ' sản phẩm';
}

function sortProducts() {
  const select = document.getElementById('sort-select');
  const value  = select.value;
  const grid   = document.getElementById('product-grid');
  const products = Array.from(grid.querySelectorAll('.pro'));

  products.sort((a, b) => {
    const priceA = parseFloat(a.getAttribute('data-price'));
    const priceB = parseFloat(b.getAttribute('data-price'));
    const nameA  = a.getAttribute('data-name').toLowerCase();
    const nameB  = b.getAttribute('data-name').toLowerCase();

    if (value === 'price-asc')  return priceA - priceB;
    if (value === 'price-desc') return priceB - priceA;
    if (value === 'name-asc')   return nameA.localeCompare(nameB);
    return 0;
  });

  products.forEach(p => grid.appendChild(p));
}
