

## A first example on PCA

# 2 observations A and B in a 2 dimensional case
x1=c(2, 1)  # x-coordinates of A and B
x2=c(1,2)  # y-coordinates of A and B
X=matrix(c(x1, x2),2,2)
plot(x1,x2, pch=20, col="blue", lwd=4, xlim=c(-2,2.5),  ylim=c(-2,2.5), xlab="X1", ylab="X2", main="Two observations A and B")
axis(side=1)
text(2.1,1.1, "A", cex=1.4)
text(0.9,2.1, "B", cex=1.4)

# the obervations alpha_1 and alpha_2
alpha1=c(-1/sqrt(2),1/sqrt(2))
alpha2=c(1/sqrt(2),1/sqrt(2))
A=matrix(c(alpha1,alpha2),2,2, byrow = FALSE)
points(A, pch=20, col="red", lwd=3, xlim=c(-2,2.5),  ylim=c(-2,2.5))

# Add the x and y axis in zero
abline(h=0, lty=2, col="blue", lwd=1)
abline(v=0, lty=2, col="blue", lwd=1)
text(-0.8,0.7, "a1", cex=1.4)
text(0.8,0.6, "a2", cex=1.4)

# add the axis w.r.t. to the alpha coordinates
abline(a=0,b=-1, col="red", lwd=2, lty=2)
abline(a=0,b=+1, col="red", lwd=2, lty=2)

# Traveling from A to B in the old system
par(mfrow=c(1,2))
plot(x1,x2, pch=20, col="blue", lwd=4, xlim=c(-2,2.5),  ylim=c(-2,2.5), xlab="X1", ylab="X2", main="Going from A to B in the old coordinate system")
axis(side=1)
text(2.1,1.1, "A", cex=1.4)
text(0.9,2.1, "B", cex=1.4)
abline(h=0, lty=2, col="blue", lwd=1)
abline(v=0, lty=2, col="blue", lwd=1)
arrows(2,1,1,1, col="blue", lty=2)
arrows(1,1,1,2, col="blue", lty=2)
text(1.5,0.8,"Travel in the x direction")
text(0.5,1.5,"Travel in the y direction")

plot(x1,x2, pch=20, col="blue", lwd=4, xlim=c(-2,2.5),  ylim=c(-2,2.5), xlab="X1", ylab="X2", main="Going from A to B in the new coordinate system")
axis(side=1)
text(2.1,1.1, "A", cex=1.4)
text(0.9,2.1, "B", cex=1.4)
abline(a=0,b=-1, col="red", lwd=2, lty=2)
abline(a=0,b=+1, col="red", lwd=2, lty=2)
arrows(2,1,1,2, col="red", lty=2)
text(0.8,1.4,"Travel in the Z1 direction")


#####################################################################
## PCA with normal distributions
#####################################################################
rm(list=ls())
set.seed(20)
w=rnorm(10000,0,1)

X=data.frame(x1=w, x2=0.8*w+sqrt(1-0.8^2)*rnorm(100000))
plot(X, pch=20, col="blue", lwd=2, asp=1,main="Observations in the regular coordinate system")


# plot the principal components
alpha1=c(0.7048, 0.7094)
alpha2=c(0.7094, -0.7048)
prcomp(X)
  
plot(X, pch=20, col="blue", lwd=2, asp=1,main="Observations in the regular coordinate system")
abline(a=0, b=alpha1[2]/alpha1[1], col="red", lwd=2, lty=2)
abline(a=0, b=alpha2[2]/alpha2[1], col="red", lwd=2, lty=2)
abline(h=0, lty=2, col="blue", lwd=1)
abline(v=0, lty=2, col="blue", lwd=1)


# Determine the Z1 and Z2 transformation
Z1=X$x1*alpha1[1]+X$x2*alpha1[2]
Z2=X$x1*alpha2[1]+X$x2*alpha2[2]

# determine the variance and covariances
var(Z1)
var(Z2)
cov(Z1,Z2)

var(X)

# compare the total variance of X and Z
var(Z1)+var(Z2)
var(X)[1,1]+var(X)[2,2]



# plot the Z1 and Z2 observations and the X1 and X2 observations
par(mfrow=c(1,2))
plot(X, pch=20, col="blue", lwd=2, asp=1,main="Observations in the regular coordinate system")
abline(a=0, b=alpha1[2]/alpha1[1], col="red", lwd=2, lty=2)
abline(a=0, b=alpha2[2]/alpha2[1], col="red", lwd=2, lty=2)
abline(h=0, lty=2, col="blue", lwd=1)
abline(v=0, lty=2, col="blue", lwd=1)

plot(Z1,Z2, pch=20, col="blue", lwd=2, asp=1,main="Observations in the new coordinate system")
abline(h=0, lty=2, col="red", lwd=1)
abline(v=0, lty=2, col="red", lwd=1)


## Reconstructing the original data 
library(matlib) # for the inverse function
Rotation=matrix(c(alpha1, alpha2), ncol=2)
Z=as.matrix(X)%*%Rotation

Reconstruction= Z%*%t(Rotation)

# the reconstruction if we use only one component

Reconstruction.1=Z[,1]%*%t(Rotation[,1])
Reconstruction.2=Z[,2]%*%t(Rotation[,2])

head(Reconstruction.1)
head(Reconstruction)

par(mfrow=c(1,2))
plot(Reconstruction.1, pch=20, col="blue", lwd=2, asp=1,main="2 principal components")
plot(Reconstruction.2, pch=20, col="blue", lwd=2, asp=1,main="1 principal component")

#####################################################################
## The housing data set
#####################################################################

Data= read.csv("houses.csv", header=TRUE) # read the data
names(Data)=c("mvalue", "mincome", "mage", "rooms", "bedrms", "popn", "househld", "lat", "long") # we give names to the different variables
head(Data) # first 6 observations
dim(Data) # dimension of the data
summary(Data,-1)

# Scale the data so it has mean zero and variance 1
Data = scale(Data[,-1])

apply(Data,2,mean)  # apply the mean function on the columns (2) of the data set Data
apply(Data,2,var)
summary(Data)

# Dependence between the variables
pairs(~mincome + mage + rooms + bedrms, data=Data[1:1000,], pch=20, col="blue")
round(cov(Data), digits=3) # variance-covariance matrix

# Apply PCA to the data set

Data.PCA = prcomp(Data)
Data.PCA

PC=Data.PCA$rotation  #PC = rotation matrix (principal components in the columns )
round(PC,digits=3)
Z=Data.PCA$x # the data set in the new coordinate system.
round(head(Z), digits=3)

round(cov(Z), digits=3)  # variance-covariance matrix of the data set in the new coordinate system.
# Compare the var-cov matrix calculated on the X coordinate system with the one of the Z coordinate system. 

# Plot the first two principal components
library(ggfortify)
library(ggplot2)
round(PC[,1], digits=3)
round(PC[,2], digits=3)

autoplot(Data.PCA,  loadings = TRUE, loadings.colour = 'red', loadings.label = TRUE, col="blue",
         loadings.label.size = 4, loading.label.color = 'red',loadings.label.repel=T) + xlim(-0.02, 0.01)

# variance explained
summary(Data.PCA)

# Determine partial correlations
Cor.Z1=cbind(Z[,1], Data[, 1:5])  #put the Z1 data values together with the first 5 X values. 
pairs(Cor.Z1[1:500,], labels=c("PC 1","mincome", "mage", "rooms", "bedrms", "popn"))
round(cor(Cor.Z1), digits=3)


##################################################################################
#### PCA IMAGE RECONSTRUCTION
##################################################################################

library(jpeg)

Picture=readJPEG('QuintenJuno.jpg')
dim(Picture)

# extract a matrix for each color
r=Picture[,,1]
g=Picture[,,2]
b=Picture[,,3]

# each matrix takes a value in [0,1], representing the number in the rgb scheme
r[1:5, 1:4]

# we plot two columns of the r matrix to understand the dependence.  
par(mfrow=c(2,2))
plot(r[,10], r[,11], pch=20, col="blue")
plot(r[,10], r[,12], pch=20, col="blue")
plot(r[,10], r[,31], pch=20, col="blue")
plot(r[,10], r[,110], pch=20, col="blue")

# we take column 200 of the correlation matrix of r (cor takes the correlation between the columns) 
# we plot the correlations between X200 and each Xk.
plot(cor(r)[,200], col="blue", pch=20)

# Apply PCA on each matrix
r.pca=prcomp(r, center=FALSE)
g.pca=prcomp(g, center=FALSE)
b.pca=prcomp(b, center=FALSE)

PCA=list(r.pca, g.pca, b.pca)

# the function determine the approximation of the data when we only use the first k principal components.
Extract = function(M,k){
  y=M$x[,1:k]%*%t(M$rotation[,1:k])
}

for(j in c(5,10,100,500)){
Compr=sapply(PCA,Extract,k=j, simplify='array')
writeJPEG(Compr,paste("QuintenJuno_",j,".jpg",sep=""))
}





