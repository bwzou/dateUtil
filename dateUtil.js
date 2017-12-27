/**
 * Created by zbw on 2017/12/27.
 */

/**
 * 获取今年的剩余天数
 */
function getRemainDateNum(){
    var today = new Date();
    var endYear = new Date(1995,11,31,23,59,59,999);    // 设置日和月，注意，月份是0-11
    endYear.setFullYear(today.getFullYear());     // 把年设置为今年
    var msPerDay = 24 * 60 * 60 * 1000;     // 每天的毫秒数
    var daysLeft = (endYear.getTime() - today.getTime()) / msPerDay;
    daysLeft = Math.round(daysLeft);  //返回今年剩下的天数
    return daysLeft;
}

/**
 * 判断是否是闰年
 */
function isLeapYear(){

}


