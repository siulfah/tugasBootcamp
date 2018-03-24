import random

kartu = ["2H","2S","2W","2K","3H","3S","3W","3K","4H","4S","4W","4K","5H","5S","5W","5K","6H","6S","6W","6K"
        , "7H", "7S", "7W", "7K","8H","8S","8W","8K","9H","9S","9W","9K","10H","10S","10W","10K","JH","JS","JW","JK"
        , "QH", "QS", "QW", "QK","KH","KS","KW","KK","AH","AS","AW","AK"]
increment = 0
arr=[]

for i in range (0,52,4):
    for j in range(i,i+4):
        arr.append(kartu[j])
    for m in reversed(range(i,i+4)):
        arr.remove(kartu[m])
        for k in range(52):
            if (arr[0][0] != kartu[k][0]):
                arr.append(kartu[k])
                for l in range((k*1),52):
                    if ((arr[0][0] != kartu[l][0]) and (arr[3][0]!=kartu[l][0])):
                        arr.append(kartu[l])
                        print(arr)
                        increment +=1
                        arr.remove(kartu[l])
                arr.remove(kartu[k])
        arr.append(kartu[m])
    arr.clear()

print("Kombinasi :", increment)