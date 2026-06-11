library(jpeg)
Picture = readJPEG('QuintenJuno.jpg')
dim(Picture)

r=Picture[,,1]
g=Picture[,,2]
b=Picture[,,3]

plot(r[,10], r[,200], pch=20, col="blue")

par(mfrow=c(2,2))
plot(r[,10], r[,11], pch=20, col="blue")
plot(r[,10], r[,12], pch=20, col="blue")
plot(r[,10], r[,31], pch=20, col="blue")
plot(r[,10], r[,110], pch=20, col="blue")

# Apply PCA
r.pca = prcomp(r, center=FALSE)
g.pca = prcomp(g, center=FALSE)
b.pca = prcomp(b, center=FALSE)

Extract = function(M, k ){
  y=M$x[, 1:k]%*% t(M$rotation[,1:k])
  return(y)
}

PCA=list(r.pca, g.pca, b.pca)

for(j in 1:1179){
  Compr = sapply(PCA, Extract, k=j, simplify = 'array' )
  writeJPEG(Compr, paste("QuintenJuno_",j,".jpg", sep = ""))
}


