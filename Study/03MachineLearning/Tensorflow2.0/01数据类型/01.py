import tensorflow as tf

import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'

a = tf.constant(1)

print(a.device)

print(tf.rank(tf.constant([1, 2, 3])))

print(tf.is_tensor(tf.constant(1.0)))