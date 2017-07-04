import { AsyncStorage }from 'react-native';

/**
 * 存取数据
 */
export default {
  /**
   * 获取
   * @param key
   */
  get(key) {
    return AsyncStorage.getItem(key).then((value) => {
      return JSON.parse(value);
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
