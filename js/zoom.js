// ========== CLICK-TO-ZOOM · ขยายการ์ด/แผงข้อมูลเพื่อโฟกัส ==========
// คลิกที่การ์ดที่ทำเครื่องหมาย .zoomable → แสดงสำเนาที่ขยายใหญ่กลางจอ
// ปิดด้วยการคลิกที่ใดก็ได้ หรือกด Esc · ไม่รบกวนการนำทางสไลด์เดิม

(function () {
  // องค์ประกอบที่ "โฟกัสได้" — การ์ดสรุป/แผงข้อมูล (ไม่รวมการ์ดที่มี action อยู่แล้ว เช่น system tile, agenda)
  var SEL = '.stat-card, .ben-card, .tl-card, .phone-feature, .seoperf-stat, .seoperf-card, [data-zoomable]';

  var overlay, stage;

  function isOpen() { return overlay && overlay.classList.contains('show'); }

  function init() {
    // ทำเครื่องหมายองค์ประกอบที่ขยายได้
    document.querySelectorAll(SEL).forEach(function (el) { el.classList.add('zoomable'); });

    // สร้าง overlay หนึ่งครั้ง
    overlay = document.createElement('div');
    overlay.className = 'zoom-overlay';
    overlay.innerHTML = '<div class="zoom-stage"></div>' +
      '<div class="zoom-hint">🔍 คลิกที่ใดก็ได้ หรือกด <b>Esc</b> เพื่อปิด</div>';
    document.body.appendChild(overlay);
    stage = overlay.querySelector('.zoom-stage');
    overlay.addEventListener('click', close);

    // เปิดเมื่อคลิกการ์ด (capture-phase → ดักก่อน handler อื่น)
    document.addEventListener('click', function (e) {
      if (isOpen()) return;
      var z = e.target.closest('.zoomable');
      if (!z) return;
      if (e.target.closest('a, button')) return; // อย่าแย่งคลิกปุ่ม/ลิงก์
      e.preventDefault();
      e.stopPropagation();
      openZoom(z);
    }, true);

    // เมื่อเปิดอยู่ ดูดคีย์ทั้งหมด (กันสไลด์เลื่อนหลัง overlay) + Esc ปิด
    document.addEventListener('keydown', function (e) {
      if (!isOpen()) return;
      if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); close(); return; }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight' || e.key === ' ' ||
          e.key === 'PageUp' || e.key === 'PageDown' || e.key === 'Home' || e.key === 'End') {
        e.preventDefault();
        e.stopPropagation();
      }
    }, true);

    // กัน wheel ไปเลื่อนสไลด์ขณะเปิด
    document.addEventListener('wheel', function (e) {
      if (isOpen()) e.stopPropagation();
    }, true);
  }

  function openZoom(el) {
    stage.innerHTML = '';
    var clone = el.cloneNode(true);
    clone.classList.remove('zoomable');
    clone.removeAttribute('data-zoomable');

    // รูปภาพ: แสดงเต็มภาพ (ไม่ crop) พอดีจอ — ไม่ใช้ transform scale
    if (el.tagName === 'IMG') {
      clone.style.cssText = 'display:block; width:auto; height:auto; max-width:92vw; max-height:88vh; object-fit:contain; border-radius:12px; border:1px solid rgba(255,255,255,.18); box-shadow:0 30px 90px rgba(0,0,0,.6)';
      stage.style.transform = 'scale(1)';
      stage.appendChild(clone);
      overlay.classList.add('show');
      return;
    }

    var w = el.getBoundingClientRect().width;
    clone.style.width = Math.round(w) + 'px';
    clone.style.margin = '0';
    stage.appendChild(clone);
    overlay.classList.add('show');

    // การ์ด: คำนวณ scale ให้พอดีจอ (ไม่เกิน 1.85x และไม่เคยย่อ)
    stage.style.transform = 'scale(1)';
    var r = stage.getBoundingClientRect();
    var sx = (window.innerWidth * 0.9) / r.width;
    var sy = (window.innerHeight * 0.86) / r.height;
    var scale = Math.max(1, Math.min(1.85, sx, sy));
    stage.style.transform = 'scale(' + scale + ')';
  }

  function close() {
    if (!overlay) return;
    overlay.classList.remove('show');
    stage.innerHTML = '';
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();

  window.ZoomFocus = { close: close };
})();
