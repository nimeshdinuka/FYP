import pandas as pd
import numpy as np
from sklearn import tree
from sklearn.ensemble import RandomForestClassifier
from sklearn.svm import SVC
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score

df = pd.read_csv("genderdata.csv") 
gender_y = df['gender']
Y=[]
Y_ = []

food_x = df['food_item']
X=[]
X_ = []
for i in range(0,len(gender_y)):
    Y.append(''+gender_y[i].lower())
    X.append(''+food_x[i].lower())
    
food_unique = list(set(X))
gender_unique = list(set(Y))

## data to ints
for i in range(0,len(X)):
    X_.append(food_unique.index(X[i]))
    Y_.append(gender_unique.index(Y[i]))
    
X_=pd.DataFrame(X_).as_matrix().reshape(-1,1)
#gender_labels_test = ['male','male','female','male','female']
#food_data_test = ['cheese pizza','spicy chicken pizza','sausage pizza','mushroom pizza','tandoori chicken pizza','seafood pizza','grilled chicken pizza','beef submarine','grilled chicken submarin','mushroom submarine','fish submarine','spicy chicken submarine','ham burger','spicy chicken burger']

print(gender_unique)
#print(food_data_test)
print((Y_))

def decisionTree(fooditem):
    print(fooditem+"----------")
    food_data_set_ = []
    #for i in range(0,len(food_data_test)):
    food_data_set_.append(food_unique.index(fooditem))
    food_data_set_ =pd.DataFrame(food_data_set_).as_matrix().reshape(-1,1)
    ## Decision Tree classification
    dtc_clf = tree.DecisionTreeClassifier()
    dtc_clf = dtc_clf.fit(X_,Y_)
    dtc_prediction = dtc_clf.predict(food_data_set_)

    for i in range(0,len(dtc_prediction)):
        print(gender_unique[(dtc_prediction[i])])
    print( dtc_prediction)
    result = gender_unique[(dtc_prediction[i])]
    print(result)
    return result