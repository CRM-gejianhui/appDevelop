import { AsyncStorage }from 'react-native';

/**
 * 存取数据
 */
export default {
  /**
   * 获取
   * @param key
   */
  get(key,callback) {
    AsyncStorage.getItem(key, (error, object) => {
      if (error) {
        console.log('Error:' + error.message);
        callback();
      } else {
        callback(JSON.parse(object));
      }
    })
  },


  /**
   * 保存
   * @param key
   * @param value
   * @returns {*}
   */
  save(key, value) {
    // value = typeof value === "string" ? value : JSON.stringify(value);
    return AsyncStorage.setItem(key, JSON.stringify(value));
  },


  /**
   * 删除
   * @param key
   * @returns {*|Promise}
   */
  delete(key) {
    return AsyncStorage.removeItem(key);
  }
};
