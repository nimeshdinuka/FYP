import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  });

  cart = [];
  userName: string;
  shopId: number;
  selectedCartitems = [];
  currentShopId:number;

  constructor(public http: HttpClient) { }

  public setSelectedCart(selectedCartitems){
    this.selectedCartitems = selectedCartitems;
  }

  public getSelectedCart(){
    return this.selectedCartitems;
  }

  public setcurrentShopId(currentShopId) {
    this.currentShopId = currentShopId;
  }

  public getcurrentShopId() {
    return this.currentShopId;
  }

  public setUser(username) {
    this.userName = username;
  }

  public getUser() {
    return this.userName;
  }

  public setShop(shopid) {
    this.shopId = shopid;
  }
  
  public getShop() {
    return this.shopId;
  }

  public getCart(){
    return this.cart;
  }

  public addCart(foods){
    this.cart.push(foods);
  }

  public setCart(foods){
    this.cart = foods;
  }

  public removeCart(){
    this.cart.length--;
  }
  
  public count() {
    this.cart.sort();
    var current = null;
    var cnt = 0;
    for (var i = 0; i < this.cart.length; i++) {
        if (this.cart[i] != current) {
            if (cnt > 0) {
                console.log( ' comes --> ' + cnt + ' times<br>');
            } 
            current = this.cart[i];
            cnt = 1;
        } else { 
            cnt++;
        }
    }
    if (cnt > 0) {
        console.log(' comes --> ' + cnt + ' times');
    }
}

  // register
  public register(credentials) {
    return this.http.post('http://192.168.8.101:5000/cusRegister',
      (
        {
          'firstname': credentials.firstname,
          'lastname': credentials.lastname,
          'email': credentials.email,
          'mobileno': credentials.mobileno,
          'username': credentials.username,
          'password': credentials.password
        }), { headers: this.headers }).pipe(map(res => res));
  }

  // login
  public login(credentials) {
    this.setUser(credentials.username);
    return this.http.post('http://192.168.8.101:5000/login',
      (
        {
          'username': credentials.username,
          'password': credentials.password
        }), { headers: this.headers }).pipe(map(res => res));
  }

  // manager register
  public addManager(credentials) {
    return this.http.post('http://192.168.8.101:5000/addManager',
      (
        {
          'firstname': credentials.firstname,
          'lastname': credentials.lastname,
          'email': credentials.email,
          'mobileno': credentials.mobileno,
          'username': credentials.username,
          'password': credentials.password,
          'shop': credentials.shop
        }), { headers: this.headers }).pipe(map(res => res));
  }

  // add cashier
  public addCashier(credentials) {
    console.log(this.shopId);
    return this.http.post('http://192.168.8.101:5000/addCashier',
      (
        {
          'firstname': credentials.firstname,
          'lastname': credentials.lastname,
          'email': credentials.email,
          'mobileno': credentials.mobileno,
          'username': credentials.username,
          'password': credentials.password,
          'shop': credentials.shop
        }), { headers: this.headers }).pipe(map(res => res));
  }

  // get fooditems
  public getFoodItems() {
    return this.http.post('http://192.168.8.101:5000/getFoodItems',
    (
      {
        'shopid': this.shopId
      }), { headers: this.headers }).pipe(map(res => res));
  }

  // add restaurant
  public addRestaurant(credentials) {
    return this.http.post('http://192.168.8.101:5000/addRestaurant',
      (
        {
          'shopname': credentials.shopname,
          'description': credentials.description
        }), { headers: this.headers }).pipe(map(res => res));
  }

  // get shops
  public getShops() {
    return this.http.get('http://192.168.8.101:5000/getShops',
      { headers: this.headers }).pipe(map(res => res));
  }

  // get managers
  public getManagers() {
    return this.http.post('http://192.168.8.101:5000/getManagers',
    (
      {
        'username': this.userName
      }
    ),{ headers: this.headers }).pipe(map(res => res));
  }

  // view cashiers
  public viewCashiers() {
    console.log(this.shopId);
    return this.http.post('http://192.168.8.101:5000/viewCashiers',
      (
        {
          'shopid': this.shopId
        }
      ), { headers: this.headers }).pipe(map(res => res));
  }

  // view managers
  public viewManagers() {
    return this.http.get('http://192.168.8.101:5000/viewManagers',
       { headers: this.headers }).pipe(map(res => res));
  }

  // add fooditems
  public addFood(credentials) {
    return this.http.post('http://192.168.8.101:5000/addFood',
      (
        {
        'shopid':credentials.shop,
        'itemname': credentials.itemname,
        'description': credentials.description,
        'price': credentials.price,
        'picture': credentials.picture
        }), { headers: this.headers }).pipe(map(res => res));
  }

  // add offer
  public addOffer(credentials) {
    return this.http.post('http://192.168.8.101:5000/addOffer',
      (
        {
          'title': credentials.title,
          'description': credentials.description,
          'shopid': credentials.shop
        }), { headers: this.headers }).pipe(map(res => res));
  }

  // view food
  public viewFoodItems() {
    console.log(this.shopId);
    return this.http.post('http://192.168.8.101:5000/viewFoodItems',
      (
        {
          'shopid': this.shopId
        }
      ), { headers: this.headers }).pipe(map(res => res));
  }

  // view offers
  public viewOffers() {
    console.log(this.shopId);
    return this.http.post('http://192.168.8.101:5000/viewOffers',
      (
        {
          'shopid': this.shopId
        }
      ), { headers: this.headers }).pipe(map(res => res));
  }

  //add shops
  public addShops(credentials) {
    return this.http.post('http://192.168.8.101:5000/addShops',
      (
        {
          'shopname': credentials.shopname,
          'description': credentials.description
        }), { headers: this.headers }).pipe(map(res => res));
  }
  
  //view shops
  public viewShops() {
    console.log(this.shopId);
    return this.http.get('http://192.168.8.101:5000/viewShops',
       { headers: this.headers }).pipe(map(res => res));
  }

 // add order
  public placeOrder(credentials) {
    return this.http.post('http://192.168.8.101:5000/placeOrder',
      (
        {
          'userid': credentials.userid,
          'shopid': credentials.shopid
          
        }
      ), { headers: this.headers }).pipe(map(res => res));
  }

   // add order
   public placeOrderDetails(credentials) {
    console.log(credentials.cart);
    console.log(credentials.lastid);
    console.log(credentials.qty);
    return this.http.post('http://192.168.8.101:5000/placeOrderDetails',
      (
        {
          'orderid': credentials.lastid,
          'cart': credentials.cart,
          'qty':credentials.qty
          
        }
      ), { headers: this.headers }).pipe(map(res => res));
  }

  //add feedback
  public submitFeedback(credentials) {
    return this.http.post('http://192.168.8.101:5000/submitFeedback',
      (
        {
          'category': credentials.category,
          'comment': credentials.comment,
        }
      ), { headers: this.headers }).pipe(map(res => res));
  }

  public removeOffer(credentials) {
    return this.http.post('http://192.168.8.101:5000/removeOffer',
      (
        {
          'offerid': credentials.offerid
        }
      ), { headers: this.headers }).pipe(map(res => res));
  }

  public removeFood(credentials) {
    return this.http.post('http://192.168.8.101:5000/removeFood',
      (
        {
          'foodid': credentials.foodid
        }
      ), { headers: this.headers }).pipe(map(res => res));
  }

  public removeShops(credentials) {
    return this.http.post('http://192.168.8.101:5000/removeShops',
      (
        {
          'shopid': credentials.shopid
        }
      ), { headers: this.headers }).pipe(map(res => res));
  }

  public resetPassword(credentials) {
    return this.http.post('http://192.168.8.101:5000/resetPassword',
      (
        {
          'username': credentials.username,
          'password': credentials.password
        }
      ), { headers: this.headers }).pipe(map(res => res));
  }
}
