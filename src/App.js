import React, { useEffect } from "react";
import "./App.css";
import YouTube from "react-youtube";

import { Layout } from "./components/Layout";

const opts = {
  width: "100%",
  height: "100%",
  playerVars: {
    autoplay: 0,
  },
};

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      document
        .getElementById("page_starting")
        .scrollIntoView({ behavior: "smooth" });
    }, 500);
  }, []);

  return (
    <Layout>
      <div className="banner_container">
        <img
          className="banner_image"
          src={require("./assets/images/banner.jpg").default}
          alt=""
        />

        <div className="banner_title">
          <p id="page_starting">
            Nữ “trùm” - từ cái duyên nợ đến giữ lại gốc Xoan cổ
          </p>
        </div>
      </div>

      <div className="body_wrapper">
        <div className="body_container">
          <p className="body_quote">
            <i>
              Tiết trời rét hanh hao của mùa đông, cùng với không gian ảm đạm do
              dịch bệnh như đã trùm lên vùng trung du Phú Thọ một bức màn xám
              bạc. Nghệ nhân dân gian Nguyễn Thị Lịch – nữ “trùm” phường Xoan An
              Thái vẫn thư thả ngồi trước hiên, pha ấm trà, trò chuyện tí tách
              cùng hai người chị em cũng là hai nghệ nhân cùng phường. “Chị em
              tôi chơi thân từ trong khi đi hát đến giờ vẫn thân nhau. Dịch dã
              thế này, chẳng được đi biểu diễn, chúng tôi vẫn hay loanh quanh
              buôn chuyện với nhau thôi.”
            </i>
          </p>

          <div className="body_video-container">
            <YouTube videoId="FJrX6_25JA8" opts={opts} />
          </div>

          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="body_uppercase-character">M</span>ột đời tâm huyết
            với hát Xoan, bà Nguyễn Thị Lịch đã góp phần làm sống lại làn điệu
            dân ca vốn là đặc sản của vùng đất Tổ. Từ chỗ nguy cơ mai một chỉ
            với 7-8 nghệ nhân có kỹ năng trình diễn và thực hành, nay con số đó
            đã nâng lên 68 cùng 34 câu lạc bộ với khoảng 1.500 thành viên yêu
            thích và trình diễn được Hát Xoan.
          </p>
          <p className="body_content-title">
            Một cuộc đời nặng nghĩa tình với câu ca
          </p>
          <div className="body_text-and-image-left-container">
            <img src={require("./assets/images/1.jpg").default} alt="" />
            <div style={{ flex: 1, marginLeft: 16 }}>
              <div className="body_text-and-image-content">
                &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                <span className="body_uppercase-character">T</span>rên con đường
                quanh co về thành phố Việt Trì “đi tìm nhà bà Lịch”, chúng tôi
                chỉ cần nhắc tên bà trùm hát Xoan thì hầu như ai cũng biết.
                <br />
                <br />
                Người ta biết về bà như một đứa con gái trưởng thành trong một
                gia đình có 5 đời hát Xoan, ông nội, cha, các cô chú đều là
                những nghệ nhân có tiếng của phường Xoan xóm Chùa, làng An Thái
                thời kỳ trước cách mạng tháng Tám. Người con gái ấy đến năm 13
                tuổi đã trở thành đào nương trẻ tuổi của làng. 14 điệu hát xoan
                bà đều thuộc nằm lòng.
                <br />
                <br />
                Trải qua những năm tháng gian khổ của chiến tranh, của nạn đói,
                cái nôi của hát xoan, làng An Thái dần dần vắng bóng những điệu
                hát. Nhiều gánh hát phải giải thể, phiêu bạt khắp nơi, phường
                Xoan không còn.
              </div>
            </div>
          </div>
          <p>
            Thế nhưng tình yêu và niềm đam mê dành cho hát xoan của bà đã luôn
            là nguồn động lực lớn để bà bảo tồn di sản hát Xoan đến tận ngày hôm
            nay. Chúng tôi thắc mắc tại sao một người đã đến tuổi này rồi và
            trông vẫn còn trẻ và còn nhiều năng lượng như thế, bà Lịch bật cười:
            “Hình như ai làm nghệ thuật cũng thế đấy, cái mà mình theo đuổi suốt
            đời cũng là cái tiếp sức mạnh để mình cống hiến. Tôi đam mê và tôi
            hát từ bé, có lẽ vì vậy mà mỗi khi hát tôi như được trẻ ra.”
          </p>
          <p>
            Khi nghe chúng tôi hỏi về nghệ thuật hát Xoan, nghệ nhân Nguyễn Thị
            Lịch không giấu nổi niềm vui trong ánh mắt lấp lánh. Bà kể rành rọt
            về nguồn gốc dân gian của điệu hát Xoan quê mình: Vợ Vua Hùng mang
            thai, tới ngày sinh nở, đau bụng mãi mà không sinh được. Một hầu gái
            tâu rằng: Nên đón nàng Quế Hoa xinh đẹp, múa giỏi, hát hay, về múa
            hát sẽ đỡ đau và sinh nở được. Hoàng hậu nghe lời, cho mời Quế Hoa
            đến. Giọng hát của nàng trong veo như chim hót, suối ngân, tay múa
            chân đi dẻo như tơ, khiến cho Hoàng hậu quên cả đau và sinh con dễ
            dàng. Vua Hùng mừng rỡ, hết lời khen ngợi Quế Hoa và truyền cho các
            công chúa học lấy điệu múa và lời hát ấy.
          </p>
          <img
            className="body_image-full"
            src={require("./assets/images/2.jpg").default}
            alt=""
          />
          <p>
            Theo các cụ cao niên trong làng, hát Xoan có tên gốc là hát Xuân,
            nhưng vì trùng tên với thứ phi của Vua Hùng thứ sáu nên phải đọc
            chệch thành Xoan. Hội chính của làng An Thái nhằm ngày 9 tháng 9 âm
            lịch. Sáng sớm ngày hội chính, cả làng vây quanh hồ Thiếc, sau 3 hồi
            9 tiếng trống thì mọi người ào xuống hồ bắt cá để mang về đình tế
            thành hoàng. Hội làng đông vui lắm, đào thì xúng xính quần lĩnh áo
            thâm, kép thanh nhã cùng áo the khăn xếp, hát Đối đáp, hát Trống
            quân, hát Xoan (hay còn gọi là Khúc môn đình) bên hồ Thiếc, trước
            sân đình, ra tận bến đò Ðức Bác. “Cá bé anh phó cho đào/ Cá lớn anh
            bắt để chào đại vương...”.
          </p>
          <p className="body_content-title">Lệ làng, ý vua</p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="body_uppercase-character">V</span>ới Trùm phường
            Nguyễn Thị Lịch, có những sự trùng hợp rất lạ lùng. Hồ sơ của bà
            Lịch cũng đã làm “đau đầu” các vị cao niên của phường Xoan và cả hệ
            thống chính quyền địa phương. Theo quy chế đã tồn tại lâu đời của
            phường Xoan, chỉ người đàn ông mới được kế thừa chức trùm phường. Và
            việc xem xét 1 người phụ nữ cho vị trí kế thừa đầy cao quý và tôn
            kính này, chưa hề có tiền lệ. Thế nhưng cuối cùng, hồ sơ của bà Lịch
            cũng đã được cộng đồng và chính quyền địa phương thông qua. Bà Lịch
            được giao giữ chức Trùm phường Xoan An Thái, 1 trong 4 phường Xoan
            gốc của Phú Thọ.
          </p>
          <div className="body_text-and-image-right-container">
            <div style={{ flex: 1, marginRight: 16 }}>
              <div className="body_text-and-image-content">
                Trên con đường quanh co về thành phố Việt Trì “đi tìm nhà bà
                Lịch”, chúng tôi chỉ cần nhắc tên bà trùm hát Xoan thì hầu như
                ai cũng biết.
                <br />
                <br />
                Người ta biết về bà như một đứa con gái trưởng thành trong một
                gia đình có 5 đời hát Xoan, ông nội, cha, các cô chú đều là
                những nghệ nhân có tiếng của phường Xoan xóm Chùa, làng An Thái
                thời kỳ trước cách mạng tháng Tám. Người con gái ấy đến năm 13
                tuổi đã trở thành đào nương trẻ tuổi của làng. 14 điệu hát xoan
                bà đều thuộc nằm lòng.
                <br />
                <br />
                Trải qua những năm tháng gian khổ của chiến tranh, của nạn đói,
                cái nôi của hát xoan, làng An Thái dần dần vắng bóng những điệu
                hát. Nhiều gánh hát phải giải thể, phiêu bạt khắp nơi, phường
                Xoan không còn.
              </div>
            </div>
            <img src={require("./assets/images/3.jpg").default} alt="" />
          </div>
          <p>
            Hát Xoan cũng trở thành hiện tượng “chưa có tiền lệ” trên nghị
            trường quốc tế vào cuối năm 2017: UNESCO đưa hát Xoan ra khỏi danh
            sách Di sản văn hóa phi vật thể cần bảo vệ khẩn cấp và ghi danh tại
            Danh sách di sản văn hóa phi vật thể đại diện của nhân loại, thì tại
            quê nhà, bà Lịch cũng là 1 hiện tượng chưa có tiền lệ của vùng đất
            Tổ. Nhiều người dân Phú Thọ tin rằng, bà đã được các “bề trên” chọn
            để làm trùm phường. “Các Vua Hùng đã giao sứ mệnh này cho bà”- cụ Vũ
            Hà Hùng, 1 cụ cao niên trong phường Xoan An Thái quả quyết.
          </p>
          <p className="body_content-title">
            “Rồi ai mà chẳng tìm cách sống chung với dịch”
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="body_uppercase-character">N</span>hư nhiều nghệ
            nhân khác, cách truyền dạy hát Xoan của nghệ nhân Nguyễn Thị Lịch
            cũng theo lối truyền khẩu. Nghĩa là, nghệ nhân sẽ hát, múa từng nhịp
            Xoan làm mẫu trước, học trò xem và tập theo.
          </p>
          <img
            className="body_image-full"
            src={require("./assets/images/4.jpg").default}
            alt=""
          />
          <p>
            Chưa từng thống kê, bà Lịch chỉ biết rằng, hiện học trò của mình có
            mặt ở khắp các địa phương trong tỉnh Phú Thọ, một số khác thì ở Tỉnh
            Vĩnh Phúc và tỉnh Yên Bái... Còn số lớp học mà bà đã truyền dạy
            trong từng ấy năm, “phải đến hàng trăm lớp, tôi cũng không đếm xuể,
            mà đếm cũng không để làm gì”, bà Lịch chia sẻ.
          </p>
          <p>
            Sự tâm huyết của bà Lịch đối với việc truyền dạy hát Xoan cũng được
            một nghệ nhân ưu tú – bà Bùi Thị Hà - kể lại trong lúc bà Lịch tranh
            thủ đi cắm nồi cơm: “Nghệ nhân Nguyễn Thị Lịch dìu dắt từ những ngày
            đầu tới ngày nay. Giờ tôi đã được Nghệ nhân Ưu tú rồi nhưng có những
            gì làm sai vẫn bị mắng như mới vào nghề.” Nghệ nhân Hà còn nói vui:
            “Bà ấy còn cầm cả dép lên doạ đấy! Nhưng cũng vì thế mới biết bà
            Lịch quan tâm như thế nào, có thế mình mới nên người được.”
          </p>
          <p style={{ textAlign: "center" }}>
            <i>
              “Nếu giờ không có dịch, chắc tôi đang tận phương trời nào rồi”
            </i>
          </p>
          <img
            className="body_image-full"
            src={require("./assets/images/5.jpg").default}
            alt=""
          />
          <p>
            Dịch dã còn phức tạp, các lớp học hát Xoan tại địa phương tuy được
            tỉnh cấp phép học nhưng số buổi giảm một nửa, bà Lịch tuy có thêm
            nhiều thời gian nghỉ ngơi hơn nhưng vẫn tập luyện và dạy hát Xoan
            cho các con, cháu trong gia đình và hết mình với cộng đồng.
          </p>
          <p>
            Mỗi buổi tối, bà vẫn đi dạy ở các lớp quanh khu, quanh xã. Các lớp
            được bà thiết kế chu đáo sao cho các thế hệ nghệ sĩ kế cận và thế hệ
            trẻ đều được học tập từ nhau. Ấy vậy mà mỗi lần đi học, cả lớp đều
            rộn ràng như mở hội, ai cũng mong chờ đến buổi để tham gia.
          </p>
          <p>
            Bà Lịch chia sẻ:{" "}
            <i>
              “Mọi người trong phường Xoan vẫn chia sẻ cùng nhau, giúp đỡ nhau
              có thêm động lực và niềm tin để tiếp tục vun đắp tình yêu và đam
              mê của mình. Tôi mong chóng dịch bệnh sớm qua đi để câu Xoan lại
              được vang lên ở các sân đình”.
            </i>
          </p>
          <img
            className="body_image-full"
            src={require("./assets/images/6.jpg").default}
            alt=""
          />
          <p>
            Chúng tôi cứ thắc mắc mãi, bởi sức trẻ đến đâu đi lâu cũng thấy mỏi.
            Vậy mà một người đã đến cái ngưỡng “thất thập cổ lai hy” vẫn còn
            nhiều sức khoẻ để đi lưu diễn, đi dạy. Bỗng nhiên, người nghệ sĩ bật
            khóc:{" "}
            <i>
              “Một đồng nghiệp của tôi đã sống trọn vẹn cả 96 năm cuộc đời với
              công cuộc giữ lại tinh hoa của nhân loại này, dù không có một chế
              độ gì nhưng trước khi mất bà ấy chỉ mong sờ tay vào tấm bằng nghệ
              nhân. Thế nhưng, cho đến ngày mất thì bà ấy vẫn chưa thể thấy tấm
              bằng của mình. Lúc ấy tôi nghĩ thấy thương lắm, bà ấy mất từ tháng
              4 nhưng đến tháng 10 mới được trao.”
            </i>
          </p>
          <p>
            <i>
              “Tôi nghĩ nếu như có một ngày sức khỏe tôi yếu đi thì con trai tôi
              (nay đã ngoài 50) sẽ vào thay mẹ nên là tôi không lo. Tôi chỉ trăn
              trở một điều là tất cả các nghệ nhân hát xoan bây giờ đều chưa có
              chế độ gì, như bản thân tôi đã có 4 cái bằng: Nghệ nhân dân gian
              Việt Nam, Nghệ nhân cấp tỉnh, Nghệ nhân Ưu tú, Nghệ nhân nhân dân;
              nhưng vẫn chưa được hưởng chế độ gì từ Nhà nước. Tôi suy nghĩ
              nhiều bởi không có báu vật nhân văn sống thì làm gì có di sản. Tôi
              cứ nghĩ về người đồng nghiệp nọ mà lại nghĩ đến những thế hệ kế
              cận.”
            </i>
          </p>

          <img
            className="body_image-full"
            src={require("./assets/images/7.jpg").default}
            alt=""
          />

          <p>
            Một đời tâm huyết với hát Xoan, bà đã góp phần làm sống lại làn điệu
            dân ca vốn là đặc sản của vùng đất Tổ. Ở tuổi 71, bà Trùm phường
            Xoan cổ duy nhất của tỉnh Phú Thọ Nguyễn Thị Lịch vẫn rất “phong
            độ”. Bà bày tỏ mong muốn duy nhất là có thật nhiều sức khỏe để cống
            hiến nhiều hơn cho nghệ thuật, đợi được đến khi dịch bệnh qua đi, để
            truyền dạy thế hệ trẻ đến hơi thở cuối cùng.
          </p>

          <div className="body_footer-container">
            <p>
              <i>
                Ghi nhận sự đóng góp của nghệ nhân Nguyễn Thị Lịch, năm 2005, bà
                được Hội Văn nghệ dân gian Việt Nam phong tặng danh hiệu Nghệ
                nhân dân gian; năm 2011, bà được Viện Âm nhạc tặng Giấy khen vì
                có thành tích trong công tác bổ sung xây dựng hồ sơ hát xoan Phú
                Thọ; năm 2012, được Ủy ban nhân dân tỉnh Phú Thọ tặng Bằng khen
                và phong tặng danh hiệu Nghệ nhân. Năm 2015, bà được Nhà nước
                phong tặng danh hiệu Nghệ nhân ưu tú. Nghệ nhân Nguyễn Thị Lịch
                là một trong những cá nhân tiêu biểu được nhận Giải thưởng Phụ
                nữ Việt Nam năm 2021.
              </i>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default App;
