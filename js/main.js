window.onscroll = function () {
  //Code tạo hiệu ứng xuất hiện thanh màu đen khi scroll
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    // translate(-50%,0)
    document.getElementById("headerFixed").style.transform =
      "translate(-50%,0)";
  } else {
    document.getElementById("headerFixed").style.transform =
      "translate(-50%,-400%)";
  }
};
