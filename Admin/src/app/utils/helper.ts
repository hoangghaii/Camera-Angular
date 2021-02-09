export class Helper {
  /**
   * Format DateTime to Date
   * @param date
   */
  static formatDate(date: string): string {
    const strDate = date.substr(0, 10);
    const dd = strDate.substr(-2);
    const mm = strDate.substr(5, 2);
    const yyyy = strDate.substr(0, 4);
    return dd + '/' + mm + '/' + yyyy;
  }

  static formatCurrency(number: number): string {
    return new Intl.NumberFormat('vi-VN', {}).format(number) + ' VND';
  }

  static formatCurrency2(number: number): string {
    return new Intl.NumberFormat('vi-VN', {}).format(number) + ' D';
  }
}
