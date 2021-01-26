export class Helper {
  /**
   * Format DateTime to Date
   * @param date
   */
  static formatDate(date: string): string {
    const strDate = date.substr(0, 11);
    const dd = strDate.slice(-2);
    const mm = strDate.substr(5, 2);
    const yyyy = strDate.substr(0, 4);
    return dd + '/' + mm + '/' + yyyy;
  }
}
