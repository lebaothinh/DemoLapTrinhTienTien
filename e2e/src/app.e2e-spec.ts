import { AppPage } from './app.po';

describe('back-box', () => {
  let page: AppPage;
  beforeEach(() => {
    page = new AppPage();
  });

  it('TC_01 Should display "Chưa nhập tên sinh viên"', () => {
    page.navigateTo();
    page.clickButtonThem();
    page.setNgaySinh("01/01/1997");
    page.setDiaChi("Bình Dương");
    page.setGioiTinh(true);
    page.setLop("D15PM01");
    page.clickButtonThemCuoi();
    expect(page.getErrors().getText()).toEqual("Chưa nhập tên sinh viên");
    page.wait();
  });

  it('TC_02 Should display "Chưa nhập ngày sinh"', () => {
    page.navigateTo();
    page.clickButtonThem();
    page.setTenHocSinh("Lê Bảo Thịnh")
    page.setDiaChi("Bình Dương");
    page.setGioiTinh(true);
    page.setLop("D15PM01");
    page.clickButtonThemCuoi();
    expect(page.getErrors().getText()).toEqual("Chưa nhập ngày sinh");
    page.wait();
  });

  it('TC_03 Should display "Ngày sinh phải từ 01/01/1990 -> 31/12/2012"', () => {
    page.navigateTo();
    page.clickButtonThem();
    page.setTenHocSinh("Lê Bảo Thịnh")
    page.setNgaySinh("01/01/1989");
    page.setDiaChi("Bình Dương");
    page.setGioiTinh(true);
    page.setLop("D15PM01");
    page.clickButtonThemCuoi();
    expect(page.getErrors().getText()).toEqual("Ngày sinh phải từ 01/01/1990 -> 31/12/2012");
    page.wait();
  });

  it('TC_04 Should display "Ngày sinh phải từ 01/01/1990 -> 31/12/2012"', () => {
    page.navigateTo();
    page.clickButtonThem();
    page.setTenHocSinh("Lê Bảo Thịnh")
    page.setNgaySinh("01/01/2013");
    page.setDiaChi("Bình Dương");
    page.setGioiTinh(true);
    page.setLop("D15PM01");
    page.clickButtonThemCuoi();
    expect(page.getErrors().getText()).toEqual("Ngày sinh phải từ 01/01/1990 -> 31/12/2012");
    page.wait();
  });

  it('TC_05 Should display "Chưa nhập địa chỉ"', () => {
    page.navigateTo();
    page.clickButtonThem();
    page.setTenHocSinh("Lê Bảo Thịnh")
    page.setNgaySinh("01/01/1997");
    page.setGioiTinh(true);
    page.setLop("D15PM01");
    page.clickButtonThemCuoi();
    expect(page.getErrors().getText()).toEqual("Chưa nhập địa chỉ");
    page.wait();
  });

  it('TC_06 Should insert student', () => {
    page.navigateTo();
    page.clickButtonThem();
    page.setTenHocSinh("Lê Bảo Thịnh");
    page.setNgaySinh("01/01/1997");
    page.setDiaChi("Bình Dương");
    page.setGioiTinh(true);
    page.setLop("D15PM01");
    page.clickButtonThemCuoi();
    expect(page.getAlert().getText()).toEqual("Thêm Thành Công!");
    page.wait();
  });
});