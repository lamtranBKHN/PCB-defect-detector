import pandas as pd
import shutil

directory = 'exact/'
Mouse_bite = 'Organized dataSet/mouse bite/'
Not = 'Organized dataSet/not/'
Open = 'Organized dataSet/open/'
Pin_hole = 'Organized dataSet/pin hole/'
Short = 'Organized dataSet/short/'
Spur = 'Organized dataSet/spur/'
Spurious = 'Organized dataSet/spurious copper/'

csv = pd.read_csv('image_labels.csv', header=None).values
print(len(csv))
print(type(csv))
print(csv[5, 1])
for i in range(len(csv)):
    if csv[i, 1] == 'mousebite':
        shutil.copy(directory + csv[i, 0], Mouse_bite)
    elif csv[i, 1] == 'NOT':
        shutil.copy(directory + csv[i, 0], Not)
    elif csv[i, 1] == 'open':
        shutil.copy(directory + csv[i, 0], Open)
    elif csv[i, 1] == 'pin hole':
        shutil.copy(directory + csv[i, 0], Pin_hole)
    elif csv[i, 1] == 'short':
        shutil.copy(directory + csv[i, 0], Short)
    elif csv[i, 1] == 'spur':
        shutil.copy(directory + csv[i, 0], Spur)
    elif csv[i, 1] == 'spurious copper':
        shutil.copy(directory + csv[i, 0], Spurious)


