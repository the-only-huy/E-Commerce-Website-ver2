import React from 'react';
function MainFeature(props) {
  return (
    <section className="feature-area section_gap_bottom_custom">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="single-feature">
              <div className="title">
                <i className="flaticon-money"></i>
                <h3>Ưu đãi hấp dẫn</h3>
              </div>
              <p>Giảm giá lên tới 50% mỗi sản phẩm</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="single-feature">
              <div className="title">
                <i className="flaticon-truck"></i>
                <h3>Vận chuyển tức thời</h3>
              </div>
              <p>Miễn phí giao hàng bán kính 7km</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="single-feature">
              <div className="title">
                <i className="flaticon-support"></i>
                <h3>Hỗ trợ tận tình</h3>
              </div>
              <p>Luôn sẵn sàng tiếp nhận ý kiến</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="single-feature">
              <div className="title">
                <i className="flaticon-blockchain"></i>
                <h3>Mua sắm an toàn</h3>
              </div>
              <p>Thanh toán tiện lợi, minh bạch</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainFeature;