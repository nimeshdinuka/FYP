from flask import Flask,render_template,request,flash,session,jsonify,json
from flask_mysqldb import MySQL
from flask_cors import CORS,cross_origin
#from flask import jsonify

app = Flask(__name__)
#app.secret_key = 'ezfood1234'

app.config['MYSQL_HOST'] = '127.0.0.1'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'ezfood'

mysql = MySQL(app)

@app.route('/cusRegister',methods=['POST'])
@cross_origin(supports_credentials=True)
def cusRegister():
    if request.method == 'POST':
        userDetails = request.get_json(silent=True)
        fname = userDetails['firstname']
        lname = userDetails['lastname']
        email = userDetails['email']
        mobno = userDetails['mobileno']
        uname = userDetails['username']
        pswd = userDetails['password']
        utype = "customer"

        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO user(firstname,lastname,email,mobileno,username,password,usertype) VALUES(%s,%s,%s,%s,%s,%s,%s)",(fname,lname,email,mobno,uname,pswd,utype))
        mysql.connection.commit()
        cur.close()
        return jsonify("success")

@app.route('/login',methods=['GET','POST'])
@cross_origin(supports_credentials=True)
def login():
    
    if request.method == 'POST':
        userDetails = request.get_json(silent=True)
        uname = userDetails['username']
        pswd = userDetails['password']

        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM user where username =%s AND password = %s",(uname,pswd))
        data= cur.fetchall()
        mysql.connection.commit()
        cur.close()
        
        if(len(data)!=0):
                return jsonify(data)
        else:
                return jsonify('error')
        
        

@app.route('/addCashier',methods=['GET','POST'])
@cross_origin(supports_credentials=True)
def addCashier():
    if request.method == 'POST':
        userDetails = request.get_json(silent=True)
        fname = userDetails['firstname']
        lname = userDetails['lastname']
        email = userDetails['email']
        mobno = userDetails['mobileno']
        uname = userDetails['username']
        pswd = userDetails['password']
        shop = userDetails['shop']
        utype = "cashier"

        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO user(firstname,lastname,email,mobileno,username,password,usertype,shopid) VALUES(%s,%s,%s,%s,%s,%s,%s,%s)",(fname,lname,email,mobno,uname,pswd,utype,shop))
        mysql.connection.commit()
        cur.close()
        return jsonify("success")

@app.route('/addManager',methods=['GET','POST'])
@cross_origin(supports_credentials=True)
def addManager():
    if request.method == 'POST':
        userDetails = request.get_json(silent=True)
        fname = userDetails['firstname']
        lname = userDetails['lastname']
        email = userDetails['email']
        mobno = userDetails['mobileno']
        uname = userDetails['username']
        pswd = userDetails['password']
        shop = userDetails['shop']
        utype = "manager"

        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO user(firstname,lastname,email,mobileno,username,password,usertype,shopid) VALUES(%s,%s,%s,%s,%s,%s,%s,%s)",(fname,lname,email,mobno,uname,pswd,utype,shop))
        mysql.connection.commit()
        cur.close()
        return jsonify("success") 

@app.route('/addRestaurant',methods=['GET','POST'])
@cross_origin(supports_credentials=True)
def addRestaurant():
    if request.method == 'POST':
        userDetails = request.get_json(silent=True)
        shopname = userDetails['shopname']
        description = userDetails['description']
        
        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO shops(shopname,description) VALUES(%s,%s)",(shopname,description))
        mysql.connection.commit()
        cur.close()
        return jsonify("success")

@app.route('/addToCart',methods=['GET','POST'])
@cross_origin(supports_credentials=True)
def addToCart():
    if request.method == 'POST':
        userDetails = request.get_json(silent=True)
        item = userDetails['itemname']
        itemqty = userDetails['qty']
        itemprice = userDetails['unitprice']


        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO cart(itemname,qty,unitprice) VALUES(%s,%s,%s)",(item,itemqty,itemprice))
        mysql.connection.commit()
        cur.close()
        return jsonify("success")

@app.route('/getFoodItems',methods=['GET','POST'])
@cross_origin(supports_credentials=True)
def getFoodItems():
    if request.method == 'POST':
        userDetails = request.get_json(silent=True)
        shopy = userDetails['shopid']

        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM fooditem where shopid = %s",[shopy])
        data = cur.fetchall()
        mysql.connection.commit()
        cur.close()
        
        if(len(data)!=0):
                print (data)
                return jsonify(data)
        else:
                return jsonify('error')

@app.route('/getShops',methods=['GET','POST'])
@cross_origin(supports_credentials=True)
def getShops():
    if request.method == 'GET':

        cur = mysql.connection.cursor()
        cur.execute("SELECT * from shops")
        data = cur.fetchall()
        mysql.connection.commit()
        cur.close()
        
        if(len(data)!=0):
                return jsonify(data)
        else:
                return jsonify('error')

@app.route('/getManagers',methods=['GET','POST'])
@cross_origin(supports_credentials=True)
def getManagers():
    if request.method == 'POST':
        userDetails = request.get_json(silent=True)
        user = userDetails['username']

        cur = mysql.connection.cursor()
        cur.execute("SELECT * from user where username = %s",[user])
        data = cur.fetchall()
        mysql.connection.commit()
        cur.close()
        
        if(len(data)!=0):
                print (data)
                return jsonify(data)
        else:
                return jsonify('error')

@app.route('/viewCashiers',methods=['GET','POST'])
@cross_origin(supports_credentials=True)
def viewCashiers():
    if request.method == 'POST':
        userDetails = request.get_json(silent=True)
        shop = userDetails['shopid']

        cur = mysql.connection.cursor()
        cur.execute("SELECT * from user where usertype = 'cashier' and shopid = %s ",[shop])
        data = cur.fetchall()
        mysql.connection.commit()
        cur.close()
        
        if(len(data)!=0):
                #print (data)
                return jsonify(data)
        else:
                return jsonify('error')


@app.route('/viewManagers',methods=['GET','POST'])
@cross_origin(supports_credentials=True)
def viewManagers():
    if request.method == 'GET':

        cur = mysql.connection.cursor()
        cur.execute("SELECT * from user where usertype = 'manager'")
        data = cur.fetchall()
        mysql.connection.commit()
        cur.close()
        
        if(len(data)!=0):
                print (data)
                return jsonify(data)
        else:
                return jsonify('error')

@app.route('/addFood',methods=['GET','POST'])
@cross_origin(supports_credentials=True)
def addFood():
    if request.method == 'POST':
        userDetails = request.get_json(silent=True)
        shopid = userDetails['shopid']
        itemname = userDetails['itemname']
        description = userDetails['description']
        price = userDetails['price']
        picture = userDetails['picture']
        
        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO fooditem(shopid,itemname,description,price,itempic) VALUES(%s,%s,%s,%s,%s)",(shopid,itemname,description,price,picture))
        mysql.connection.commit()
        cur.close()
        return jsonify("success")

@app.route('/addOffer',methods=['GET','POST'])
@cross_origin(supports_credentials=True)
def addOffer():
    if request.method == 'POST':
        userDetails = request.get_json(silent=True)
        offertitle = userDetails['title']
        offerdesc = userDetails['description']
        shop = userDetails['shopid']
        
        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO offers(title,description,shopid) VALUES(%s,%s,%s)",(offertitle,offerdesc,shop))
        mysql.connection.commit()
        cur.close()
        return jsonify("success")

@app.route('/viewFoodItems',methods=['GET','POST'])
@cross_origin(supports_credentials=True)
def viewFoodItems():
    if request.method == 'POST':
        userDetails = request.get_json(silent=True)
        shop = userDetails['shopid']

        cur = mysql.connection.cursor()
        cur.execute("SELECT * from fooditem where shopid= %s",[shop])
        data = cur.fetchall()
        mysql.connection.commit()
        cur.close()
        
        if(len(data)!=0):
                print (data)
                return jsonify(data)
        else:
                return jsonify('error')

@app.route('/viewOffers',methods=['GET','POST'])
@cross_origin(supports_credentials=True)
def viewOffers():
    if request.method == 'POST':
        userDetails = request.get_json(silent=True)
        shop = userDetails['shopid']

        cur = mysql.connection.cursor()
        cur.execute("SELECT * from offers where shopid=%s",[shop])
        data = cur.fetchall()
        mysql.connection.commit()
        cur.close()
        
        if(len(data)!=0):
                print (data)
                return jsonify(data)
        else:
                return jsonify('error')

@app.route('/addShops',methods=['GET','POST'])
@cross_origin(supports_credentials=True)
def addShops():
    if request.method == 'POST':
        userDetails = request.get_json(silent=True)
        shopname = userDetails['shopname']
        description = userDetails['description']
        
        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO shops(shopname,description) VALUES(%s,%s)",(shopname,description))
        mysql.connection.commit()
        cur.close()
        return jsonify("success")

@app.route('/viewShops',methods=['GET','POST'])
@cross_origin(supports_credentials=True)
def viewShops():
    if request.method == 'GET':

        cur = mysql.connection.cursor()
        cur.execute("SELECT * from shops")
        data = cur.fetchall()
        mysql.connection.commit()
        cur.close()
        
        if(len(data)!=0):
                print (data)
                return jsonify(data)
        else:
                return jsonify('error')

@app.route('/placeOrder',methods=['POST'])
@cross_origin(supports_credentials=True)
def placeOrder():
    if request.method == 'POST':
        itemDetails = request.get_json(silent=True)
        cartdata = itemDetails['cart']
        userid = itemDetails['userid']
        datetime = datetime.now()
        
        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO foodorder(customerid,shopid,datetime) VALUES(%s,%s)",(userid,cartdata.foodshop,datetime))
        mysql.connection.commit()
        cur.close()
        return jsonify("success")

#flask run --host=192.168.8.100 port=5000

if __name__ == '__main__':
    app.run()