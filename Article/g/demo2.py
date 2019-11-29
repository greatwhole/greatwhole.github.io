from greenlet import greenlet

# greenlet 调用完毕后，会返回到 parent ，而不是调用处
def test1():
    print(12)
    gr2.switch()
    print(34)

def test2():
    print(56)

gr1 = greenlet(test1)
gr2 = greenlet(test2)
gr1.switch()

def test1():
    print(12)
    gr2.switch()
    print(34)

def test2():
    print(56)

gr1 = greenlet(test1)
gr2 = greenlet(test2, parent=gr1)
gr1.switch()
