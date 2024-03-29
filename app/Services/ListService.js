import List from "../Models/List.js";
import store from "../store.js";

//Public
class ListService {
  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change

  addList(rawList) {
    store.State.lists.push(new List(rawList))
    store.saveState();
  }

  removeList(id) {
    let index = store.State.lists.findIndex(list => list.id == id);
    store.State.lists.splice(index, 1);
    store.saveState();
  }

  addListItem(id, item) {
    let list = store.State.lists.find(list => list.id == id);
    list.items.push(item);
    store.saveState();
  }

  removeListItem(listID, itemIndex) {
    let list = store.State.lists.find(list => list.id == listID);
    list.items.splice(itemIndex, 1);
    store.saveState();
  }
}

const SERVICE = new ListService();
export default SERVICE;
