# load data
Y=read.csv("DataQuizOutliers.csv")$x
# make a histogram of the data
hist(Y,100)
# We see the data is highly skewed.

# calculate the mean and the standard deviation
mu=mean(Y)
s=sd(Y)
mu
s
# determine the Z-scores for the data
Z.Y= (Y-mu)/s
hist(Z.Y,100) # histogram of the Z scores. The skewness remains after standardizing the data

sum(Z.Y>3) # number of outliers (19)

# We now determine the outliers by first applying a log transformation
X=log(Y)
hist(X, 100) # after the log transformation, the data is more symmetric

Z.X=(X-mean(X))/sd(X) # apply the Z scores for the transformed variable X
hist(Z.X,100)

sum(Z.X>3) # number of outliers


