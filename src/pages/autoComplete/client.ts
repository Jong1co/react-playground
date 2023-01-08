import { action, computed, makeAutoObservable, makeObservable, observable, toJS } from "mobx";

interface ILocation {
  lat: number;
  lgt: number;
  title: string;
}

interface IForm {
  start: ILocation;
  end: ILocation;
  move: ILocation;
}

class FormStore {
  constructor() {
    makeObservable(this, {
      _start: observable,
      _end: observable,
      _move: observable,
      _num: observable,
      _price: observable,
      _amount: observable,

      start: computed,
      total: computed,

      setStart: action,
      setPlus: action,
      setMinus: action,
      setPrice: action,
      setAmount: action,
    });
  }

  _start: ILocation = {
    lat: 0,
    lgt: 0,
    title: "",
  };

  _end: ILocation = {
    lat: 0,
    lgt: 0,
    title: "",
  };

  _move: ILocation = {
    lat: 0,
    lgt: 0,
    title: "",
  };

  _num: number = 0;

  _price: number = 0;

  _amount: number = 0;

  // primitive type은 괜찮은데 객체의 경우
  // toJS를 안 하고 출력 시 Proxy로 나옴
  // 그래서 getter가 필요한듯.

  get start() {
    return toJS(this._start);
  }

  get total() {
    console.log("computing...");
    return this._price * this._amount;
  }

  setStart(location: ILocation) {
    this._start = location;
  }

  setPlus() {
    this._num++;
  }

  setMinus() {
    this._num--;
  }

  setPrice(price: number) {
    this._price = price;
  }

  setAmount(amount: number) {
    this._amount = amount;
  }
}

export default new FormStore();
