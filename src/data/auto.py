filename = "dataset_irr.txt"
result = []
with open(filename,'r') as f_obj:
    data = f_obj.readlines()
    for datum in data:
         x  = datum.split()
         temp = {}
         temp[x[0]] = x[1]
         result.append(temp)
         

f_obj.close()

filename = "result.txt"
with open(filename, 'w') as f_obj:
    f_obj.write(str(result))

f_obj.close()





