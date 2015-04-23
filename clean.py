f = open("livingData.csv")
nums = []
city = []
for line in f:
    q = line.split(",")
    nums.append(q[len(q)-7:len(q)])
    city.append("".join(q[:len(q)-7]))


h = open("cleanData.csv", "w")

for k in range(len(city)):
    h.write(city[k] + "," + ",".join(nums[k]))

f.close()
h.close()
