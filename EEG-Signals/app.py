# -*- coding: utf-8 -*-
import numpy as np
from flask import Flask, request, render_template
from load import init
app=Flask(__name__)
global model

model= init()

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict',methods=['GET','POST'])

def predict():
    int_features=[float(x) for x in request.form.values()]
    final_features = [np.array(int_features)]
    final = np.vstack((final_features,final_features))
    predict_out=model.predict(final)
    #print(predict_out)
    #return render_template('index.html', prediction_text='Patient is Normal')
    predict_out=(predict_out>0.5)
    predict_out=predict_out[0]
    
    if predict_out == 1:
        return render_template('D.html', prediction_text='Patient is Suffering from Depression / Depressive Symptoms are present')
    else:
        return render_template('N.html', prediction_text='Patient is Normal')
    
if __name__ == "__main__":
    app.run(debug=True)
    

    
    
    
    

