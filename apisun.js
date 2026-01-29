const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;
const SOURCE_API = "https://api789hix.hacksieucap.pro/taixiuv3";

/*
  LOGIC:
  - phien       : phiên vừa xong
  - phien_dudoan: PHIÊN ĐANG ĐÁNH
*/

app.get("/api/789", async (req, res) => {
  try {
    const response = await axios.get(SOURCE_API);
    const d = response.data;

    const data = {
      game: "789Club",
      phien_hien_tai: d.phien_dudoan,
      ket_qua_gan_nhat: d.ket_qua_hien_tai,
      du_doan: d.du_doan_van_sau,
      do_tin_cay: d.do_tin_cay,
      ty_le_thanh_cong: d.ty_le_thanh_cong,
      chien_thuat: d.chien_thuat,
      giai_thich: d.giai_thich,
      loai_cau: d.loai_cau,
      he_thong: d.phan_tich_chi_tiet?.he_thong,
      phien: d.phien,
      id: "tiendat",
      time: new Date().toISOString()
    };

    res.json({
      status: "success",
      data
    });

  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message
    });
  }
});

app.listen(PORT, () => {
  console.log(`✅ API 789 đang chạy tại http://localhost:${PORT}/api/789`);
});
