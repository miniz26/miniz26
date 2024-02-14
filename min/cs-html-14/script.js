// รายการของรูปภาพและข้อความที่ต้องการแสดง
var imageData = [
    { src: "https://media.tenor.com/rAVzM1cVcr4AAAAi/box-easyparcel.gif", caption: "TAP IMAGE HERE"},
    { src: "https://media.tenor.com/rAVzM1cVcr4AAAAi/box-easyparcel.gif", caption: "Don't forget play music on bottom ;)" },
    { src: "https://media.tenor.com/p96XUHeS4q8AAAAi/peach-and-goma-goma.gif", caption: "Wishing you laughter and enjoy every day na krub" },
    { src: "https://media.tenor.com/VdYluihFEPUAAAAi/cat_-vodk.gif", caption: "I hope you get well soon!" },
    { src: "https://media.tenor.com/zkaB7Dlry8YAAAAi/hug.gif", caption: "Nice try, big hug naa" },
    { src: "https://media.tenor.com/mxg1RwQmzQQAAAAi/peach-goma-love-pat-head-cheek.gif", caption: "Are you smiling? eiei"},
    { src: "https://media.tenor.com/VGovtqddxVwAAAAi/peach-goma-peach-and-goma.gif", caption: "Ummmm..."},
    { src: "https://media.tenor.com/jBpUdNL_XlkAAAAi/peach-goma-yawn.gif", caption: "Your smile so cute!!"},
    { src: "https://media.tenor.com/hgjdh1M4_G8AAAAi/peach-goma.gif", caption: "Hope you like this content and make you happy na;)"}
  ];
  
  // ดึงอินเด็กซ์ของรูปภาพปัจจุบัน
  var currentIndex = 0;
  
  // ติดตั้งการฟังเวนเจอร์สำหรับการคลิกที่รูปภาพ
  document.getElementById("galleryImage").addEventListener("click", function() {
    // เปลี่ยนรูปภาพและข้อความ
    currentIndex = (currentIndex + 1) % imageData.length;
    document.getElementById("galleryImage").src = imageData[currentIndex].src;
    document.getElementById("imageCaption").textContent = imageData[currentIndex].caption;
  });
  