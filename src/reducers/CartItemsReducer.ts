import { Product } from '../types/productType';

let localData = [];

if (typeof window !== 'undefined') {
  localData = JSON.parse(localStorage.getItem('cartItems')) || [];
}

// 初始資料，為 state 的初始值，通常會在這裡把結構描述完整
// 一個 Reducer 用來描述根據指令執行對應的動作，會回傳一個新的 state 物件，是個純函式
export const cartItemsReducer = (state = localData, action) => {
  // 判斷指令
  switch (action.type) {
    case 'clear': {
      const newCartItems = [];
      window.localStorage.setItem('cartItems', JSON.stringify(newCartItems));
      return newCartItems;
    }
    default: {
      return state;
    }
  }
};

export const clearCartItems = () => ({
  type: 'clear',
});
