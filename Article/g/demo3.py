import time
import threading
from greenlet import greenlet
# 不能切换到其他线程的 greenlet
gr_other_thread = None

def build_gr_other_thread():
    global gr_other_thread
    print 'other-thread start'
    gr_other_thread = greenlet(run=dummy)
    time.sleep(10)
    print 'other-thread end'

def dummy():
    pass

threading.Thread(target=build_gr_other_thread).start()

time.sleep(1)
gr_other_thread.switch()