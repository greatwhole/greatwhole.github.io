# 查准率（precision) 查全率（recall）

查准率（precision) 也被叫做 精确率；查全率（recall）也被叫做召回率

## 问题：

一些很倾斜的样本，如果仅评估 Accuracy ，会漏掉一些重要信息。

## 定义：

Relevant: 我们想从一个样本中标记到的 case
Retrieved: 我们的预测结果的返回值

|               | Relevant | NonRelevant |
| -             | - | - |
| Retrieved     | true positive  TP | false positive FP |
| Not Retrieved | false negative FN | true negative  TN |


Accuracy 准确率，这个是最常见的一种指标，即将判断正确的数量除以总数

$$ A=\frac{TP+TN}{TP+FP+FN+TN} $$  


Precision 精确率

$$ P=\frac{TP}{TP+FP} $$  

Recall 准确率

$$ R= \frac {TP}{TP+FN} $$

P 值 和 R 值，在某种意义上是相对的，存在一种权衡。
故而，使用 F1 score 来综合考虑以上两种 case 。
F1 score 是 Precision 和 Recall 的调和平均值

$$ \frac{1}{F_1} = 1/2 * \left( \frac{1}{P} + \frac{1}{R} \right) $$


## Refer:
- https://blog.exsilio.com/all/accuracy-precision-recall-f1-score-interpretation-of-performance-measures/
- [准确率(Accuracy), 精确率(Precision), 召回率(Recall)和F1-Measure](https://blog.argcv.com/articles/1036.c)
- https://en.wikipedia.org/wiki/Precision_and_recall