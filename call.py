#usr/bin/env python3

def work():
    processLiving = process()
    states = index(processLiving)
    return states

def process():
    content = open('cleanData.csv', 'r')
    start = 0
    values = {}
    for line in content:
        stuff = line.split(",")
        values[stuff[0]] = float(stuff[1])
    content.close()
    return values;

def index(values):
    data = open("thresh14.csv")
    states = {}
    for index in list(values.keys()):
        state = index[-2] + index[-1]
        if state not in list(states.keys()):
            states[state] = [values[index], 1]
        else:
            states[state] = [states[state][0] + values[index], states[state][1] + 1]
    for place in list(states.keys()):
        states[place] = states[place][0] / states[place][1]
    print(states)
    return states

work()
