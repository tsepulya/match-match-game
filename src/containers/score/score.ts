import { User, user } from "../../constants/constants";
import './score.css';

export function IDB() : void {
  let db: IDBDatabase;
  let tx: IDBTransaction;
  const DBOpenReq = indexedDB.open('tsepulya', 1);
  
  function makeTX(storeName: string, mode: IDBTransactionMode) {
    tx = db.transaction(storeName, mode);
    return tx;
  }
  
  function buildList() {
    const list = <HTMLElement>document.querySelector('.score__table');
    tx = makeTX('tsepulyaStore', 'readwrite');
    const store = tx.objectStore('tsepulyaStore');
    const getReq = store.getAll();
    getReq.onsuccess = (ev) => {
      const request = ev.target as IDBRequest;
      const reqArr = request.result.filter((obj:User) => obj.score !== 0);
      const arr = reqArr.sort((prev: User, next: User) => next.score - prev.score).slice(0, 10);
      list.innerHTML = arr.map((obj: User) => (
        `<div class="user">
          <div class="user-full-data">
              <div class="user-ava"><img src=${obj.avatar} class="user-ava"></div>
              <div class="user-data">
                  <p class="user-name">${obj.firstName} ${obj.lastName}</p>
                  <p class="user-email">${obj.email}</p>
              </div>
          </div>
          <div class="user-score">
              <p class="score_word">Score:</p>
              <p class="score_number">${obj.score}</p>
          </div>
        </div>`)).join('\n');
    };
  }
  
  DBOpenReq.addEventListener('success', (ev) => {
    const target = ev.target as IDBOpenDBRequest;
    db = target.result;
    tx = db.transaction('tsepulyaStore', 'readwrite');
    const iconScore = <HTMLElement>document.querySelector('.icon_score');
    if (!iconScore.classList.contains('active-icon')) {
      const store = tx.objectStore('tsepulyaStore');
      store.add(user);
    }
    if (iconScore.classList.contains('active-icon')) {
      buildList();
    }
  });
  
  DBOpenReq.addEventListener('upgradeneeded', (ev) => {
    const target = ev.target as IDBOpenDBRequest;
    db = target.result;
    if (!db.objectStoreNames.contains('tsepulyaStore')) {
      db.createObjectStore('tsepulyaStore', {
        keyPath: 'id',
      });
    }
  });
}
  
export function createPageScore(): void {
  const template = `
      <h2 class="score__title">Best players</h2>
      <div class="score__table"><div>
      `;
  const mainPageSettings = document.createElement('main');
  mainPageSettings.className = 'main';
  mainPageSettings.innerHTML = template;
  const wrapper = <HTMLElement>document.querySelector('.wrapper');
  wrapper.append(mainPageSettings);
  IDB();
}
