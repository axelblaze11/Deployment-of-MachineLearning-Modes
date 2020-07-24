# -*- coding: utf-8 -*-
"""
Created on Tue Dec 31 01:22:52 2019

@author: Axel Blaze
"""
import pandas as pd
from tensorflow.python.keras.models import Sequential
from tensorflow.python.keras.layers import Dense
dataset= pd.read_excel(r'F:\Project\Machine Learning & Artificial Intelligence\Project 5- Expert System On Major Depressive Disorder\Dataset\Signals\Merge.xlsx')
X=dataset.iloc[:,0:24]
y=dataset.iloc[:,24]

model= Sequential()
model.add(Dense(100, input_dim=24, kernel_initializer='normal' , activation='relu'))
model.add(Dense(50, activation='relu'))
model.add(Dense(45, activation='relu'))
model.add(Dense(40, activation='relu'))
model.add(Dense(35, activation='relu'))
model.add(Dense(30, activation='relu'))
model.add(Dense(25, activation='relu'))
model.add(Dense(20, activation='relu'))
model.add(Dense(15, activation='relu'))
model.add(Dense(10, activation='relu'))
model.add(Dense(5, activation='relu'))
model.add(Dense(1, activation='sigmoid'))
model.summary()
model.compile(loss='binary_crossentropy', optimizer='adam', metrics=['mse','mae'])
model.fit(X,y, epochs=500, batch_size=2,  verbose=1, validation_split=0.2)

model_json = model.to_json()
with open('model.json','w') as json_file:
    json_file.write(model_json)

model.save_weights('model.h5')
print("Saved Model to disk")


