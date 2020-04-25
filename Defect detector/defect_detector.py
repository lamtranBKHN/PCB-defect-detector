import cv2
import numpy as np
import os
import json

hsv_lower = np.array([0, 150, 150])
hsv_upper = np.array([10, 255, 255])

readPath = 'dataset/'
writePath = 'exact/'
allImage = os.listdir(readPath)
index = len(allImage) // 2
ROI_number = 0

for index in range(0, index):
    origin = cv2.imread(readPath + '{}.jpg'.format(index * 2 + 1))
    temp = cv2.imread(readPath + '{}.jpg'.format(index * 2 + 2))
    difference = cv2.bitwise_xor(origin, temp, mask=None)
    Conv_hsv_Gray = cv2.cvtColor(difference, cv2.COLOR_BGR2GRAY)
    ret, mask = cv2.threshold(Conv_hsv_Gray, 0, 255, cv2.THRESH_BINARY_INV | cv2.THRESH_OTSU)
    difference[mask != 255] = [0, 0, 255]
    origin[mask != 255] = [0, 0, 255]
    temp[mask != 255] = [0, 0, 255]
    hsv = cv2.cvtColor(origin, cv2.COLOR_BGR2HSV)
    mask = cv2.inRange(hsv, hsv_lower, hsv_upper)
    kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (3, 3))
    opening = cv2.morphologyEx(mask, cv2.MORPH_OPEN, kernel, iterations=1)
    close = cv2.morphologyEx(opening, cv2.MORPH_CLOSE, kernel, iterations=1)
    cnts = cv2.findContours(close, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    cnts = cnts[0] if len(cnts) == 2 else cnts[1]
    offset = 20
    for c in cnts:
        x, y, w, h = cv2.boundingRect(c)
        cv2.rectangle(temp, (x - offset, y - offset), (x + w + offset, y + h + offset), (36, 255, 12), 2)
        ROI = origin[y - offset:y + h + offset, x - offset:x + w + offset]
        try:
            cv2.imwrite(writePath + 'contour_{}.png'.format(ROI_number), ROI)
        except:
            print("skipping image " + '{}.jpg'.format(ROI_number))
        ROI_number += 1

file_names_and_sizes = {}
file_names = os.listdir('exact/')

for index, file in enumerate(file_names):
    file_names_and_sizes[file_names[index]] = os.path.getsize('exact/' + file)
with open('extracted_defects.json', 'w') as outfile:
    json.dump(file_names_and_sizes, outfile)
