import { browser, by, element, protractor } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h3')).getText();
  }

  clickButtonThem() {
    return element(by.css('[name="addstudentbutton"]')).click();
  };

  clickButtonThemCuoi() {
    return element(by.css('[name="btnadd"]')).click();
  }

  clickButtonCapNhat() {
    return element(by.css('[name="btnupdate"]')).click();
  }

  setTenHocSinh(tenHocSinh: string) {
    return element(by.css('[name="studentName"]')).sendKeys(tenHocSinh);
  }

  getErrors(){
    return element(by.css('[name="errors"]'));
  }

  setGioiTinh(index: boolean) {
    if (index == true)
      return element(by.cssContainingText('option', 'Nam')).click();
    return element(by.cssContainingText('option', 'Nữ')).click();
  }

  setNgaySinh(ngaySinh: string) {
    return element(by.css('[name="dateOfBirth"]')).sendKeys(ngaySinh);
  }

  getNgaySinh(){
    return element(by.css('[name="dateOfBirth"]'));
  }
  setDiaChi(diaChi: string) {
    return element(by.css('[name="address"]')).sendKeys(diaChi);
  }

  setLop(index: string) {
    if (index == "D15PM01")
      return element(by.cssContainingText('option', 'D15PM01')).click();
    return element(by.cssContainingText('option', 'D15PM02')).click();
  }

  getAlert(){
    var timeoutInMilliseconds = 1000;
    browser.wait(protractor.ExpectedConditions.alertIsPresent(), timeoutInMilliseconds);
    return browser.switchTo().alert();
  }

  wait(){
    browser.pause();
  }
}
