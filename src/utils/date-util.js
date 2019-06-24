
/**
 * 获取当前日期偏移preDay天的yyyy-MM-dd形式
 *
 * @export
 * @param {*} preDay 偏移量
 * @returns
 */
export function getDate(preDay) {
    var time = (new Date()).getTime() - preDay * 24 * 60 * 60 * 1000;
    var date = new Date(time);
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
    if (strDate >= 0 && strDate <= 9) {
           strDate = "0" + strDate;
        }
    var currentDate = date.getFullYear() + '-' + month + '-' + strDate;
    return currentDate;
}

/**
 * 将yyyy-MM-dd形式的日期格式化为（今天，昨天，MM-dd）
 *
 * @export
 * @param {*} date yyyy-MM-dd
 * @returns
 */
export function translateDate(date) {
    if (!date) {
        return;
    }
    if (getDate(0) === date) {
        return '今天';
    } else if (getDate(1) === date) {
        return '昨天'
    } else {
        return date.slice(5);
    }
}