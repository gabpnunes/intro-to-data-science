Object.assign(SOURCES, {
  part2Slides: "Part2/IntroductionDataScience_Part_2.pdf",
  part2Text: "Part2/CourseText_Part 2.pdf",
  part2R: "Part2/RCode_Part2_PCA.R",
  tut3q: "Part2/IntroductionDataScience_Tutorial 3_Questions.pdf",
  tut3s: "Part2/IntroductionDataScience_Tutorial 3_Solutions.pdf",
  tut4q: "Part2/IntroductionDataScience_Tutorial 4_Questions.pdf",
  part2Data: "Part2 datasets: DataOutliers.csv, Inflation.csv, houses.csv, QuintenJuno.jpg",
  part2Media: "Five Part 2 PCA videos supplied with the Canvas files"
});

SOURCE_INVENTORY.push(
  {
    label: "Part 2 slides",
    source: SOURCES.part2Slides,
    status: "incorporated",
    detail: "All 79 slides are incorporated into the PCA guide, diagrams, visual labs, flashcards, and Exam Kit."
  },
  {
    label: "Part 2 course text",
    source: SOURCES.part2Text,
    status: "incorporated",
    detail: "All 38 pages were reconciled with the slide deck, including the PCA proofs, houses application, and photo compression."
  },
  {
    label: "Tutorial 3 questions",
    source: SOURCES.tut3q,
    status: "incorporated",
    detail: "All questions, including the exam question, are included exactly as sourced."
  },
  {
    label: "Tutorial 3 solutions",
    source: SOURCES.tut3s,
    status: "official",
    detail: "Official wording is preserved for Question 3 and the exam question. The PDF does not provide solutions for Questions 1 and 2."
  },
  {
    label: "Tutorial 4 questions",
    source: SOURCES.tut4q,
    status: "incorporated",
    detail: "All seven tutorial questions and the exam question are included with provisional solutions."
  },
  {
    label: "Tutorial 4 solutions",
    source: "Official Tutorial 4 solution file",
    status: "pending",
    detail: "No official solution file was supplied. Every Tutorial 4 solution is visibly marked unofficial."
  },
  {
    label: "Part 2 R code and datasets",
    source: `${SOURCES.part2R}; ${SOURCES.part2Data}`,
    status: "incorporated",
    detail: "The site uses verified values from the outlier, inflation, houses, and image-compression files."
  },
  {
    label: "Part 2 linked media",
    source: SOURCES.part2Media,
    status: "linked",
    detail: "All five videos are linked by title. Their content is supplementary because no reliable transcript was supplied."
  }
);

const part2Roadmap = COURSE_PARTS.find(part => part.id === "part2");
if (part2Roadmap) {
  part2Roadmap.status = "live";
  part2Roadmap.coverage = "Slides, course text, Tutorial 3-4 questions, Tutorial 3 official solutions, R code, datasets, photo compression, and linked lectures are incorporated.";
  part2Roadmap.topics = ["PCA geometry", "Covariance", "Eigenvectors", "Explained variance", "Houses", "Image compression"];
}

ERRATA_NOTES.push(
  {
    id: "err-p2-independence",
    severity: "important nuance",
    source: "Part 2 slides/course text, PCA properties",
    title: "Uncorrelated principal components are not always independent",
    note: "The material sometimes moves from zero covariance to independence. PCA guarantees that different principal components are uncorrelated. Independence additionally follows for jointly normal data, but not for an arbitrary distribution.",
    action: "On an exam, write 'uncorrelated' unless joint normality or another independence condition is explicitly available."
  },
  {
    id: "err-p2-r-length",
    severity: "code error",
    source: "Part2/RCode_Part2_PCA.R, dependent-normal example",
    title: "The two simulated columns have different lengths",
    note: "The script creates w with 10,000 values but adds rnorm(100000) when constructing x2. R cannot form the intended data frame from those incompatible lengths.",
    action: "Use rnorm(length(w)) so x1 and x2 both contain 10,000 observations."
  },
  {
    id: "err-t3-outlier-file",
    severity: "source mismatch",
    source: "Part2/Tutorial_3_Exercise_1_Solution.R and DataOutliers.csv",
    relatedQuestionId: "t3q1",
    title: "The supplied R solution names a different dataset",
    note: "The R file reads DataQuizOutliers.csv and comments that 19 values have z-score above 3. The supplied Canvas file is DataOutliers.csv; it contains 15 such values.",
    action: "The question-bank calculation uses the supplied DataOutliers.csv and clearly labels the result provisional because the official PDF does not solve Question 1."
  },
  {
    id: "err-t3-boxcox-domain",
    severity: "domain conflict",
    source: "Tutorial 3 Question 2 and Part2/Inflation.csv",
    relatedQuestionId: "t3q2",
    title: "The transform requires positive values but inflation includes negatives",
    note: "The question defines the transformation only on positive reals, while Inflation.csv contains values down to -1.0. Logarithms and non-integer powers are therefore undefined for all observations as written.",
    action: "State the domain problem before transforming. A shift may be explored only if it is explicitly justified, because it changes interpretation."
  },
  {
    id: "err-t3-orthogonality-sign",
    severity: "calculation typo",
    source: "Tutorial 3 Solutions, Question 3(d), page 4",
    relatedQuestionId: "t3q3",
    title: "The printed dot-product signs do not match the vectors",
    note: "For alpha1=(1/sqrt(2),-1/sqrt(2)) and alpha2=(1/sqrt(2),1/sqrt(2)), the dot product is 1/2-1/2=0. The PDF prints two negative products and then states zero.",
    action: "Official wording is preserved in the solution area; the explanation shows the corrected dot product."
  },
  {
    id: "err-t3-exam-index",
    severity: "notation typo",
    source: "Tutorial 3 Solutions, exam question",
    relatedQuestionId: "t3exam1",
    title: "The principal-component sum uses n instead of p",
    note: "The question introduces p variables but writes the upper summation index as n. The intended sum is over the p variables.",
    action: "Use p as the variable index limit in the derivation."
  },
  {
    id: "err-houses-header",
    severity: "data import issue",
    source: "Part2/RCode_Part2_PCA.R and Part2/houses.csv",
    title: "header=TRUE consumes the first observation",
    note: "houses.csv has no header row, but the script imports it with header=TRUE and then renames the columns. This treats the first data row as column names and leaves 20,639 instead of 20,640 observations.",
    action: "Use header=FALSE when reproducing the dataset exactly. The resulting PCA proportions still match the slides to rounding."
  }
);

TOPICS.push(
  {
    id: "pca-geometry",
    part: "Part 2",
    week: "W2",
    title: "PCA Geometry and Coordinate Rotation",
    short: "Vectors, norms, dot products, projections, orthogonal axes, scores, and reconstruction.",
    tags: ["vectors", "dot product", "projection", "rotation", "scores"],
    sources: [SOURCES.part2Slides, SOURCES.part2Text, SOURCES.part2R],
    sections: [
      {
        heading: "Why PCA is a change of coordinates",
        body: [
          "PCA does not initially delete information. It first describes the same observations using a new set of perpendicular axes chosen to align with the directions in which the data vary most.",
          "A principal direction is a unit vector. The score of observation x on that direction is its signed projection: a dot product. Positive and negative scores tell you on which side of the origin the observation lies."
        ],
        math: "\\[\\|a\\|=\\sqrt{a_1^2+\\cdots+a_p^2},\\qquad a^Tx=\\sum_{j=1}^p a_jx_j.\\]",
        diagram: "pca-rotation",
        traps: ["A principal component can mean the direction/loading vector or the resulting score variable; say which one you mean.", "Changing an eigenvector's sign changes score signs but not the PCA solution."]
      },
      {
        heading: "The A=(2,1), B=(1,2) example",
        body: [
          "The course uses alpha1=(-1/sqrt(2),1/sqrt(2)) and alpha2=(1/sqrt(2),1/sqrt(2)). Both have norm one and their dot product is zero, so they form an orthonormal basis.",
          "A has new coordinates (-1/sqrt(2),3/sqrt(2)); B has (1/sqrt(2),3/sqrt(2)). The observations have identical Z2 coordinates, so every difference between them is represented by Z1."
        ],
        math: "\\[z=A^Tx,\\quad A=[\\alpha_1\\ \\alpha_2],\\qquad x=Az\\ \\text{when }A^TA=I.\\]",
        proof: "An orthonormal matrix satisfies A^{-1}=A^T. Therefore z=A^Tx can be inverted as x=Az=AA^Tx=x."
      },
      {
        heading: "Projection and lossy reconstruction",
        body: [
          "Keeping every principal component gives exact reconstruction. Keeping only the first k components projects each observation onto a k-dimensional subspace. The discarded directions are exactly where the reconstruction error lives.",
          "PCA is useful when the first few directions capture most variation: many coordinates can then be discarded while retaining the dominant structure."
        ],
        math: "\\[Z=XA,\\qquad X=ZA^T,\\qquad \\widehat X_k=Z_kA_k^T.\\]"
      }
    ]
  },
  {
    id: "pca-dependence",
    part: "Part 2",
    week: "W2",
    title: "Dependence, Covariance, and Principal Axes",
    short: "How PCA rotates correlated variables into uncorrelated score variables.",
    tags: ["covariance", "correlation", "normal", "decorrelation"],
    sources: [SOURCES.part2Slides, SOURCES.part2Text, SOURCES.part2R],
    sections: [
      {
        heading: "Covariance measures joint movement",
        body: [
          "Covariance is positive when two centered variables tend to move in the same direction and negative when they tend to move in opposite directions. Correlation rescales covariance to the interval from -1 to 1.",
          "The covariance matrix collects every variance on its diagonal and every pairwise covariance off the diagonal. It is symmetric, which is why it has orthogonal eigenvectors."
        ],
        math: "\\[\\operatorname{Cov}(X,Y)=E[(X-E[X])(Y-E[Y])],\\qquad \\rho_{XY}=\\frac{\\operatorname{Cov}(X,Y)}{\\sigma_X\\sigma_Y}.\\]",
        diagram: "pca-covariance"
      },
      {
        heading: "The correlated normal example",
        body: [
          "The R example builds X2=rX1+sqrt(1-r^2)epsilon. Both variables have variance one and their covariance is r. For positive r, the long axis of the point cloud follows the same-direction line and the short axis follows the counter-movement line.",
          "After rotating into the principal axes, Cov(Z1,Z2)=0 and total variance is unchanged. In the jointly normal example, zero covariance also implies independence."
        ],
        math: "\\[\\Sigma=\\begin{pmatrix}1&r\\\\r&1\\end{pmatrix},\\quad \\lambda_1=1+r,\\quad \\lambda_2=1-r.\\]",
        proof: "Multiplying Sigma by (1,1)^T gives (1+r)(1,1)^T; multiplying it by (1,-1)^T gives (1-r)(1,-1)^T."
      },
      {
        heading: "Why uncorrelated does not always mean independent",
        body: [
          "PCA always makes distinct component scores uncorrelated because their covariance is alpha_i^T Sigma alpha_j=lambda_j alpha_i^T alpha_j=0.",
          "Independence is stronger: it rules out every kind of dependence, not only linear co-movement. The normal distribution is a special case in which uncorrelated linear combinations are independent."
        ]
      }
    ]
  },
  {
    id: "pca-theory",
    part: "Part 2",
    week: "W2",
    title: "PCA Optimization and Eigenvectors",
    short: "Why maximizing projected variance leads to the eigenvalue equation.",
    tags: ["eigenvalue", "eigenvector", "Lagrange", "variance proof"],
    sources: [SOURCES.part2Slides, SOURCES.part2Text, SOURCES.tut3s, SOURCES.tut4q],
    sections: [
      {
        heading: "Standardize before comparing unlike variables",
        body: [
          "If variables have different units or spreads, a covariance-based PCA can be dominated by the variable with the largest numerical variance. Standardization gives every variable mean zero and variance one, making the covariance matrix equal to the correlation matrix.",
          "Standardization is a modeling choice, not a ritual. If absolute scale is scientifically meaningful, an unstandardized PCA may be appropriate."
        ],
        math: "\\[X_j^{std}=\\frac{X_j-\\bar X_j}{s_j}.\\]"
      },
      {
        heading: "Variance of a projected score",
        body: ["For centered X and a direction alpha, the score is Z=alpha^T X. Its variance is a quadratic form in the covariance matrix."],
        math: "\\[\\operatorname{Var}(Z)=\\operatorname{Var}(\\alpha^TX)=\\alpha^T\\Sigma\\alpha.\\]",
        proof: "Var(BX)=B Var(X) B^T. With B=alpha^T, this becomes alpha^T Sigma alpha."
      },
      {
        heading: "The constrained maximization",
        body: [
          "Without a length constraint, multiplying alpha by a large constant makes the score variance arbitrarily large. PCA therefore searches only among unit vectors.",
          "The stationary condition of the Lagrangian is Sigma alpha=lambda alpha. Thus every candidate direction is an eigenvector. The first component chooses the eigenvector with the largest eigenvalue."
        ],
        math: "\\[\\max_{\\alpha}\\ \\alpha^T\\Sigma\\alpha\\quad\\text{s.t.}\\quad\\alpha^T\\alpha=1,\\qquad L=\\alpha^T\\Sigma\\alpha-\\lambda(\\alpha^T\\alpha-1).\\]",
        proof: "Because Sigma is symmetric, the derivative is 2 Sigma alpha-2 lambda alpha. Setting it to zero gives Sigma alpha=lambda alpha. Premultiplying by alpha^T gives Var(Z)=alpha^T Sigma alpha=lambda."
      },
      {
        heading: "Later components",
        body: [
          "The second component maximizes remaining variance subject to norm one and orthogonality to the first. Continuing gives an orthonormal set ordered by decreasing eigenvalue.",
          "Orthogonality prevents the next component from rediscovering the same direction."
        ],
        math: "\\[\\lambda_1\\ge\\lambda_2\\ge\\cdots\\ge\\lambda_p\\ge0,\\qquad \\alpha_i^T\\alpha_j=0\\ (i\\ne j).\\]"
      }
    ]
  },
  {
    id: "pca-variance",
    part: "Part 2",
    week: "W2",
    title: "Explained Variance and Dimension Reduction",
    short: "Total variance, scree plots, retention rules, and the information-loss tradeoff.",
    tags: ["explained variance", "scree plot", "eigenvalue criterion", "dimension reduction"],
    sources: [SOURCES.part2Slides, SOURCES.part2Text, SOURCES.tut4q],
    sections: [
      {
        heading: "PCA redistributes rather than creates variance",
        body: [
          "The sum of all eigenvalues equals the trace of the covariance matrix, which is the sum of the original variable variances. Rotation changes where variation appears, not its total amount.",
          "For p standardized variables, total variance is p."
        ],
        math: "\\[\\sum_{k=1}^p\\lambda_k=\\operatorname{tr}(\\Sigma)=\\sum_{j=1}^p\\operatorname{Var}(X_j).\\]"
      },
      {
        heading: "Proportion and cumulative variance",
        body: [
          "The proportion explained by PC k is its eigenvalue divided by total variance. To choose m components, add the first m proportions and compare with a target such as 95%.",
          "A high threshold preserves more information but reduces compression."
        ],
        math: "\\[PVE_k=\\frac{\\lambda_k}{\\sum_j\\lambda_j},\\qquad CPVE_m=\\frac{\\sum_{k=1}^m\\lambda_k}{\\sum_j\\lambda_j}.\\]",
        diagram: "pca-scree"
      },
      {
        heading: "Three retention rules",
        body: [
          "Explained-variance rule: keep the smallest m reaching a chosen cumulative percentage. Scree/elbow rule: keep components before the curve becomes nearly flat. Eigenvalue rule: for standardized data, keep components with eigenvalue above one because they explain more variance than one original standardized variable.",
          "These are heuristics. Interpretation, downstream performance, and the cost of information loss also matter."
        ],
        traps: ["The eigenvalue-above-one rule assumes standardized variables.", "A scree plot elbow can be ambiguous; do not invent precision the plot does not contain."]
      }
    ]
  },
  {
    id: "pca-houses",
    part: "Part 2",
    week: "W2",
    title: "PCA on the California Houses Data",
    short: "Reading loadings, scores, biplots, partial correlations, and the course variance table.",
    tags: ["houses", "loadings", "scores", "biplot", "prcomp"],
    sources: [SOURCES.part2Slides, SOURCES.part2Text, SOURCES.part2R, SOURCES.part2Data],
    sections: [
      {
        heading: "Data and preprocessing",
        body: [
          "The dataset contains 20,640 California census blocks. Median house value is treated as the target and excluded from PCA. The eight predictors are median income, median age, rooms, bedrooms, population, households, latitude, and longitude.",
          "All eight predictors are standardized before PCA. This prevents variables such as room counts from dominating only because of units."
        ],
        code: "Data <- read.csv(\"houses.csv\", header=FALSE)\nnames(Data) <- c(\"mvalue\",\"mincome\",\"mage\",\"rooms\",\"bedrms\",\"popn\",\"househld\",\"lat\",\"long\")\nX <- scale(Data[,-1])\nfit <- prcomp(X)"
      },
      {
        heading: "Interpret the first two loading vectors",
        body: [
          "PC1 has large same-sign loadings for rooms, bedrooms, population, and households. It is a block-size component. Median age points in the opposite direction; income and geographic coordinates contribute little.",
          "PC2 is almost entirely latitude versus longitude, so it is a location component. Eigenvector signs are arbitrary: reversing every sign gives the same axis."
        ],
        math: "\\[\\alpha_1\\approx(-.045,.218,-.484,-.491,-.472,-.492,.071,-.069),\\]\\[\\alpha_2\\approx(-.025,-.003,.072,.054,.020,.056,.703,-.702).\\]",
        diagram: "pca-loadings"
      },
      {
        heading: "How much variance is retained?",
        body: [
          "The verified proportions are PC1 0.4880, PC2 0.2382, PC3 0.1343, PC4 0.1023, then 0.0186, 0.0102, 0.00646, and 0.00185.",
          "The first four components explain about 96.29%, so four components exceed a 95% retention target while halving the number of coordinates."
        ],
        math: "\\[CPVE_4=0.4880+0.2382+0.1343+0.1023\\approx0.9629.\\]"
      },
      {
        heading: "Scores, loadings, and biplots",
        body: [
          "A loading tells how strongly an original variable contributes to a principal direction. A score tells where one observation lies on that direction.",
          "In a biplot, observations are shown by scores and variable arrows summarize loading directions. Variables with arrows pointing together are positively related; opposite arrows suggest negative relation; near-right angles suggest weak linear relation."
        ]
      }
    ]
  },
  {
    id: "pca-compression",
    part: "Part 2",
    week: "W2",
    title: "PCA for Photo Compression",
    short: "RGB matrices, spatial dependence, truncated reconstruction, storage, and image quality.",
    tags: ["image", "RGB", "compression", "reconstruction", "rank k"],
    sources: [SOURCES.part2Slides, SOURCES.part2Text, SOURCES.part2R, "Part2/Photo_R.R", SOURCES.part2Data],
    sections: [
      {
        heading: "An image is three data matrices",
        body: [
          "The supplied photo has 1,359 rows, 1,179 columns, and three channels. Each red, green, and blue matrix stores intensities between 0 and 1.",
          "Nearby columns are often highly correlated because neighboring pixels usually show similar scene content. That redundancy is what PCA exploits."
        ],
        math: "\\[\\text{Picture}\\in[0,1]^{1359\\times1179\\times3}.\\]"
      },
      {
        heading: "PCA each color channel",
        body: [
          "The course applies prcomp separately to red, green, and blue, using center=FALSE. For each channel, retain the first k score columns and loading columns, then multiply them to reconstruct a rank-k approximation.",
          "Small k stores less information but causes visible blur and stripe-like artifacts. Larger k restores detail and approaches the original image."
        ],
        code: "fit <- prcomp(channel, center=FALSE)\napprox <- fit$x[,1:k] %*% t(fit$rotation[,1:k])",
        math: "\\[M\\approx Z_kA_k^T.\\]",
        diagram: "pca-compression"
      },
      {
        heading: "What compression is trading",
        body: [
          "The original channel stores H times L numbers. A rank-k factorization stores approximately k(H+L) numbers, so compression is useful when k is much smaller than both dimensions.",
          "PCA minimizes squared reconstruction error among rank-k linear approximations. It does not know which visual features humans care about, so maximum explained variance is not always identical to maximum perceived quality."
        ],
        math: "\\[HL\\quad\\text{versus approximately}\\quad k(H+L).\\]"
      }
    ]
  }
);

GUIDE_CHECKS.push(
  { id: "gc-pca-score", topic: "pca-geometry", source: SOURCES.part2Slides, prompt: "What does z=alpha^T x mean geometrically?", answer: "It is the signed projection, or coordinate, of observation x along the unit direction alpha." },
  { id: "gc-pca-reconstruct", topic: "pca-geometry", source: SOURCES.part2Text, prompt: "When is PCA reconstruction exact?", answer: "When all principal components are retained. With orthonormal loading matrix A, Z=XA and X=ZA^T." },
  { id: "gc-pca-independence", topic: "pca-dependence", source: SOURCES.part2Slides, prompt: "What does PCA guarantee about two different component scores, and when may you call them independent?", answer: "It guarantees zero covariance. Independence follows in the jointly normal case, not for arbitrary data." },
  { id: "gc-pca-var", topic: "pca-theory", source: SOURCES.tut4q, prompt: "Why is Var(alpha^T X)=alpha^T Sigma alpha?", answer: "Use Var(BX)=B Var(X) B^T with B=alpha^T." },
  { id: "gc-pca-eigen", topic: "pca-theory", source: SOURCES.part2Text, prompt: "Why must the first loading vector be an eigenvector?", answer: "The Lagrange first-order condition for maximizing alpha^T Sigma alpha subject to alpha^T alpha=1 is Sigma alpha=lambda alpha." },
  { id: "gc-pca-total", topic: "pca-variance", source: SOURCES.part2Slides, prompt: "What is total variance after standardizing p variables?", answer: "p, because each variable has variance one and total variance is the trace of the covariance matrix." },
  { id: "gc-pca-houses", topic: "pca-houses", source: SOURCES.part2Slides, prompt: "What do the first two houses components represent?", answer: "PC1 mainly block size (rooms, bedrooms, population, households); PC2 mainly geographic location (latitude versus longitude)." },
  { id: "gc-pca-photo", topic: "pca-compression", source: SOURCES.part2Slides, prompt: "How is a color image reconstructed with k PCs?", answer: "Apply PCA to each RGB matrix and form Z_k A_k^T for each channel, then combine the three reconstructed channels." }
);

QUESTIONS.push(
  {
    id: "t3q1", topic: "pca-theory", topicName: "PCA Preparation and Diagnostics", source: "Tutorial 3 Questions, Q1",
    difficulty: "medium", type: "code", solutionStatus: "unofficial",
    text: "Use for this question the data set DataOutliers.csv. Import the data set in R/Python and determine how many outliers this data set has. Explain your answer.",
    sourceNote: "The official Tutorial 3 PDF does not solve this question. The separate R file names DataQuizOutliers.csv and reports 19, but the supplied DataOutliers.csv contains 15 values with z-score above 3.",
    explanation: "Provisional solution using the supplied file: n=1000, mean approximately 314.9285 and sample standard deviation approximately 994.7628. Define Z=(Y-mean(Y))/sd(Y). There are 15 observations with Z>3 (also 15 with |Z|>3 because the extremes are in the right tail). The distribution is strongly right-skewed, so this mean/SD rule is itself influenced by the extreme values. After log(Y), no observation has |z|>3. Code: `Y <- read.csv(\"DataOutliers.csv\")$x; Z <- scale(Y); sum(Z > 3)`."
  },
  {
    id: "t3q2", topic: "pca-theory", topicName: "PCA Preparation and Diagnostics", source: "Tutorial 3 Questions, Q2",
    difficulty: "hard", type: "code", solutionStatus: "unofficial",
    text: "Use the data set Inflation.csv with monthly inflation (in %) in the Netherlands. Consider the function f_lambda with domain the positive real numbers: f_lambda(x)=(x^lambda-1)/lambda if lambda is not 0, and log(x) if lambda=0. Investigate the effect of lambda when using f_lambda to transform the inflation data.",
    questionHtml: `<p>Use the data set <code>Inflation.csv</code> with monthly inflation (in %) in the Netherlands. Consider the following function \\(f_\\lambda\\) with domain the positive real numbers:</p><div class="math-block">\\[f_\\lambda(x)=\\begin{cases}\\dfrac{x^\\lambda-1}{\\lambda},&\\lambda\\ne0,\\\\\\log(x),&\\lambda=0.\\end{cases}\\]</div><p>Investigate the effect of \\(\\lambda\\) when using the function \\(f_\\lambda\\) to transform the inflation data.</p>`,
    sourceNote: "Inflation.csv includes zero/negative values (minimum -1.0), outside the stated positive-real domain.",
    explanation: "Provisional solution: first report that the transform cannot be applied to the entire supplied series as written. For positive x, lambda=1 gives x-1; lambda near 0 approaches log(x); lambda<1 compresses large positive values and usually reduces right skew; lambda>1 expands the upper tail. If a shifted analysis is requested, choose c>1 so x+c>0 and apply f_lambda(x+c), but state that the shift changes interpretation and should not be silently introduced."
  },
  {
    id: "t3q3", topic: "pca-theory", topicName: "PCA Optimization and Eigenvectors", source: "Tutorial 3 Questions, Q3",
    difficulty: "hard", type: "proof", solutionStatus: "official",
    text: "Consider 2 observations, A and B in a 2-dimensional space and A=(2,1) and B=(1,2). (a) Determine the standardized versions of A and B. The sample variance is s^2=(1/n) sum_i (x_i-xbar)^2. (b) Determine the eigenvalues of the covariance matrix of the standardized data set. (c) Determine the principal components alpha1 and alpha2. (d) Show that the principal components are orthogonal. (e) The smallest eigenvalue is zero. Explain the intuition.",
    questionHtml: `<p>Consider 2 observations, \\(A\\) and \\(B\\) in a 2-dimensional space and</p><div class="math-block">\\[A=(2,1)\\text{ and }B=(1,2).\\]</div><p>(a) Determine the standardized versions of \\(A\\) and \\(B\\) and denote them by \\((x_{1,1},x_{1,2})\\) and \\((x_{2,1},x_{2,2})\\). The sample variance \\(s^2\\) of a data set \\(x_i\\) for \\(i=1,2,\\ldots,n\\) can be determined as follows: \\(s^2=\\frac1n\\sum_{i=1}^n(x_i-\\bar x)^2\\).</p><p>(b) Determine the eigenvalues of the covariance matrix of the standardized data set \\((x_{1,1},x_{1,2})\\) and \\((x_{2,1},x_{2,2})\\).</p><p>(c) Determine the principal components \\(\\alpha_1\\) and \\(\\alpha_2\\) of the data.</p><p>(d) Show that the principal component are orthogonal.</p><p>(e) The smallest eigenvalue is zero. Explain the intuition of this result.</p>`,
    officialSolution: `Solution: Question a: We denote the observations A and B as follows:
(y1,1, y1,2) = (2, 1) and (y2,1, y2,2) = (1, 2).

Note that there are 2 observations and therefore we can put n = 2. Then, the mean y-bar1 of the first variable can be determined as follows:
y-bar1 = (y1,1 + y2,1)/n = 3/2.
Similarly, we find that the sample mean y-bar2 of the second component is given by y-bar2 = 3/2.
We can determine the sample variance s1^2 as follows:
s1^2 = 1/2 ((2 - 3/2)^2 + (1 - 3/2)^2) = 1/4,
and similarly s2^2 = 1/4.
Then, the standardized observations are:
x1,1 = (y1,1 - y-bar1)/s1 = 1,
x1,2 = (y1,2 - y-bar2)/s2 = -1.
x2,1 = -1
x2,2 = 1.

Question b: The covariance s1,2 can be determined as follows
s1,2 = 1/n sum from i=1 to n of (xi,1 - x-bar1)(xi,2 - x-bar2).
Since the data is standardized, we can simplify this to
s1,2 = 1/n sum from i=1 to n of xi,1 xi,2.
Using the two observations we find:
s1,2 = (1 x (-1) + (-1) x 1)/2 = -1.
Then:
Sigma = (1 -1; -1 1).
To determine the eigenvector alpha and the eigenvector lambda we have to solve the following equations:
Sigma(alpha1, alpha2)' = lambda(alpha1, alpha2)'.
This implies that:
alpha1 - alpha2 = lambda alpha1,
-alpha1 + alpha2 = lambda alpha2.
From the first equation, we find alpha2 = (1 - lambda)alpha1 and plugging this expresion in the second equation (while assuming that alpha1 != 0) results in:
lambda(2 - lambda) = 0.
We conclude that the two eigenvalues are given by
lambda1 = 2 or lambda2 = 0.

Question c: The first principal component alpha1 = (alpha1,2, alpha2,2) is the eigenvector which corresponds with the largest eigenvalue. From the previous question we find that the largest eigenvalue is 2, and therefore the first principal component should be determined by solving the following equations:
Sigma alpha1' = 2 alpha1'
alpha1,1^2 + alpha1,2^2 = 1,
where the second equation follows from the normalization of the principal component. From the first equation, we find -alpha1,2 = alpha1,1. Plugging this expression in the second equation results in:
alpha1,1^2 + alpha1,1^2 = 1,
from which we find:
alpha1,1 = 1/sqrt(2).
We then find that the first principal component is given by
alpha1 = (1/sqrt(2), -1/sqrt(2)).
The second principal component alpha2 corresponds with the eigenvector with eigenvalue 0. Then, we find that the second principal component should be determined using
Sigma alpha2' = 0
alpha2,1^2 + alpha2,2^2 = 1.
The first equation results in alpha2,1 = alpha2,2. Plugging this expression in the second equation gives the following principal component:
alpha2 = (1/sqrt(2), 1/sqrt(2)).

Question d: The vectors are orthogonal if alpha1 dot alpha2 = 0. We can calculate:
alpha1 dot alpha2 = -1/sqrt(2) x 1/sqrt(2) - 1/sqrt(2) x 1/sqrt(2) = 0.

Question e: There are only 2 observations and therefore we can always draw a first principal component that runs parallel with the line connecting the two observations. Therefore, the variation between the two observations is completely explained by this first component. Since there are no movements in any other direction, the second component has variance zero. The variance of the second component is given by the second eigenvalue, which is therefore equal to 0.
The total variance of the data is given by the sum of the variances:
Total Variance = 1 + 1 = 2,
where we used that the data is standardized and therefore the two variables have variance 1. We then see that the variance explained by the first component is 100%.`,
    officialSolutionHtml: `<p><strong>Question a:</strong> We denote the observations \\(A\\) and \\(B\\) as \\((y_{1,1},y_{1,2})=(2,1)\\) and \\((y_{2,1},y_{2,2})=(1,2)\\). Both sample means are \\(3/2\\), and both sample variances (using denominator \\(n=2\\)) are \\(1/4\\). The standardized observations are \\((x_{1,1},x_{1,2})=(1,-1)\\) and \\((x_{2,1},x_{2,2})=(-1,1)\\).</p><p><strong>Question b:</strong> The covariance is \\(s_{1,2}=-1\\), so</p><div class="math-block">\\[\\Sigma=\\begin{pmatrix}1&-1\\\\-1&1\\end{pmatrix}.\\]</div><p>Solving \\(\\Sigma\\alpha=\\lambda\\alpha\\) gives \\(\\lambda(2-\\lambda)=0\\), hence \\(\\lambda_1=2\\) and \\(\\lambda_2=0\\).</p><p><strong>Question c:</strong> The first principal component corresponds with eigenvalue 2 and the second with eigenvalue 0:</p><div class="math-block">\\[\\alpha_1=\\left(\\frac1{\\sqrt2},-\\frac1{\\sqrt2}\\right),\\qquad \\alpha_2=\\left(\\frac1{\\sqrt2},\\frac1{\\sqrt2}\\right).\\]</div><p><strong>Question d:</strong> The vectors are orthogonal if \\(\\alpha_1\\cdot\\alpha_2=0\\).</p><p><strong>Question e:</strong> There are only 2 observations and therefore we can draw a first principal component parallel with the line connecting the two observations. The variation between the two observations is completely explained by this first component. Since there are no movements in any other direction, the second component has variance zero. Total variance is \\(1+1=2\\), so the first component explains 100%.</p>`,
    sourceNote: "The official page 4 dot-product display has a sign typo. The exact vectors imply 1/2-1/2=0.",
    explanation: "The official result uses the course's denominator n. The corrected orthogonality calculation is (1/sqrt2)(1/sqrt2)+(-1/sqrt2)(1/sqrt2)=1/2-1/2=0. Geometrically the two standardized points lie on one line, so the data have rank one and no variance perpendicular to that line."
  },
  {
    id: "t3exam1", topic: "pca-theory", topicName: "PCA Optimization and Eigenvectors", source: "Tutorial 3 Exam Question, Q1",
    difficulty: "hard", type: "exam", solutionStatus: "official",
    text: "Consider a data set with p variables X1,...,Xp. Each variable has mean 0 and Var(Xi)=sigma^2. The first principal component is Z1=sum alpha1,i Xi and Sigma alpha1=lambda1 alpha1. Show that Corr[Z1,Xj]=sqrt(lambda1) alpha1,j / sigma, where lambda1 is the variance of Z1.",
    questionHtml: `<p>Consider a data set with \\(p\\) variables, denoted by \\(X_1,X_2,\\ldots,X_p\\). We have that each variable has mean 0 and the variance of \\(X_i\\) is \\(\\sigma^2\\). The first principal component \\(Z_1\\) is given by</p><div class="math-block">\\[Z_1=\\sum_{i=1}^{n}\\alpha_{1,i}X_i.\\]</div><p>The vector \\(\\alpha_1\\) is defined as follows:</p><div class="math-block">\\[\\Sigma\\alpha_1=\\lambda_1\\alpha_1,\\]</div><p>for some \\(\\lambda_1\\in\\mathbb R\\). Show that</p><div class="math-block">\\[\\operatorname{Corr}[Z_1,X_j]=\\frac{\\sqrt{\\lambda_1}\\alpha_{1,j}}{\\sigma},\\]</div><p>where \\(\\lambda_1\\) is the variance of \\(Z_1\\).</p>`,
    officialSolution: `Solution: Recall that for random variables X and Y, the correlation is defined as
Corr[X,Y] = Cov[X,Y] / sqrt(Var[X] Var[Y]).

Since we are interested in the calculating Corr[Z1,Xj], we will compute Var[Z1], Var[Xj] and Cov[Z1,Xj].
Recall that lambda1 also has the property of being equal to Var[Z1]. To see this, we write
Var[Z1] = Var[sum from i=1 to n alpha1,i Xi]
= Cov[sum from i=1 to n alpha1,i Xi, sum from k=1 to n alpha1,k Xk]
= sum from i=1 to n sum from k=1 to n alpha1,i alpha1,k Cov[Xi,Xk]
= alpha1^T Sigma alpha1 (Sigma is covariance matrix)
= alpha1^T lambda alpha1 (Sigma alpha1 = lambda1 alpha1)
= lambda1 (since alpha1^T alpha1 = 1).
Furthermore, it is given that Var[Xj] = sigma^2.
Next, we compute Cov[Z1,Xj]:
Cov[Z1,Xj] = Cov[sum from i=1 to n alpha1,i Xi, Xj]
= sum from i=1 to n alpha1,i Cov[Xi,Xj]
= sum from i=1 to n alpha1,i Sigma_ij
= sum from i=1 to n alpha1,i Sigma_ji.
Now note that Sigma alpha1 = lambda1 alpha1 written out in components gives us that the j-th row of Sigma multiplied by alpha1 is lambda1 alpha1,j.
This implies that
Cov[Z1,Xj] = sum from i=1 to n alpha1,i Sigma_ji = lambda1 alpha1,j.
Using the above results, we can now compute the correlation:
Corr[Z1,Xj] = Cov[Z1,Xj] / sqrt(Var[Z1] Var[Xj])
= lambda1 alpha1,j / sqrt(lambda1 sigma^2)
= sqrt(lambda1) alpha1,j / sigma,
as desired.`,
    officialSolutionHtml: `<p>Recall that \\(\\operatorname{Corr}[X,Y]=\\operatorname{Cov}[X,Y]/\\sqrt{\\operatorname{Var}[X]\\operatorname{Var}[Y]}\\). First,</p><div class="math-block">\\[\\operatorname{Var}[Z_1]=\\alpha_1^T\\Sigma\\alpha_1=\\alpha_1^T\\lambda_1\\alpha_1=\\lambda_1,\\]</div><p>since \\(\\alpha_1^T\\alpha_1=1\\). Furthermore, \\(\\operatorname{Var}[X_j]=\\sigma^2\\). Next,</p><div class="math-block">\\[\\operatorname{Cov}[Z_1,X_j]=\\sum_i\\alpha_{1,i}\\operatorname{Cov}[X_i,X_j]=\\sum_i\\alpha_{1,i}\\Sigma_{ij}=\\lambda_1\\alpha_{1,j}.\\]</div><p>Therefore,</p><div class="math-block">\\[\\operatorname{Corr}[Z_1,X_j]=\\frac{\\lambda_1\\alpha_{1,j}}{\\sqrt{\\lambda_1\\sigma^2}}=\\frac{\\sqrt{\\lambda_1}\\alpha_{1,j}}{\\sigma}.\\]</div>`,
    sourceNote: "The PDF introduces p variables but writes n as the upper index of the principal-component sum.",
    explanation: "The key is to compute the three pieces of correlation separately. The eigenvalue equation gives both Var(Z1)=lambda1 and the covariance with Xj as the j-th component of Sigma alpha1."
  },
  {
    id: "t4q1", topic: "pca-theory", topicName: "PCA Optimization and Eigenvectors", source: "Tutorial 4 Questions, Q1",
    difficulty: "medium", type: "long", solutionStatus: "unofficial",
    text: "Consider 50 observations on 5 standardized variables. Z1 and Z2 are linear combinations with coefficient vectors alpha1 and alpha2, each of norm 1. (a) True or false: the sums of squared Z1 and Z2 scores are equal. (b) Explain why additionally assuming sum_j alpha1,j alpha2,j=0 may be a good idea. (c) True or false: sum_j alpha1,j^2 + sum_j alpha2,j^2=1. (d) True or false: Var[Z1]=1. Which statements are always correct?",
    questionHtml: `<p>Consider a data set consisting of 50 observations in 5 different variables \\(X_1,X_2,X_3,X_4\\) and \\(X_5\\). We use the notation \\(x_{i,j}\\) to denote the \\(i\\)-th observation of \\(X_j\\) and we assume this data set is standardized. Assume that \\(Z_1\\) and \\(Z_2\\) can be defined as follows:</p><div class="math-block">\\[Z_1=\\alpha_{1,1}X_1+\\alpha_{1,2}X_2+\\alpha_{1,3}X_3+\\alpha_{1,4}X_4+\\alpha_{1,5}X_5,\\]\\[Z_2=\\alpha_{2,1}X_1+\\alpha_{2,2}X_2+\\alpha_{2,3}X_3+\\alpha_{2,4}X_4+\\alpha_{2,5}X_5.\\]</div><p>The vectors \\(\\alpha_1\\) and \\(\\alpha_2\\) are assumed to have norm 1.</p><p>(a) True or false? Explain your answer. \\(\\sum_{i=1}^{50}(\\sum_{j=1}^{5}\\alpha_{1,j}x_{i,j})^2=\\sum_{i=1}^{50}(\\sum_{j=1}^{5}\\alpha_{2,j}x_{i,j})^2\\).</p><p>(b) Explain why it might be a good idea to additionally assume that \\(\\sum_{j=1}^{5}\\alpha_{1,j}\\alpha_{2,j}=0\\).</p><p>(c) True or false? \\(\\sum_{j=1}^{5}\\alpha_{1,j}^2+\\sum_{j=1}^{5}\\alpha_{2,j}^2=1\\).</p><p>(d) True or false? \\(\\operatorname{Var}[Z_1]=1\\).</p><p>Which of these statements is always correct?</p>`,
    explanation: "Provisional solution: (a) False; unit loading norms do not force equal score variance. (b) Orthogonality prevents the components from describing the same direction and, for covariance eigenvectors, gives uncorrelated scores. (c) False: each norm-square sum is 1, so their sum is 2. (d) False: Var(Z1)=alpha1^T Sigma alpha1, which equals an eigenvalue for a principal direction and need not be 1. The always-correct facts are the stated individual norm constraints; among (a), (c), and (d), none is always true."
  },
  {
    id: "t4q2", topic: "pca-variance", topicName: "Explained Variance and Dimension Reduction", source: "Tutorial 4 Questions, Q2",
    difficulty: "medium", type: "multiple choice", solutionStatus: "unofficial",
    text: "A data set has 1000 observations and 10 mean-zero variables with equal variance. Total variance is 5. For first-PC scores zi=sum_j alpha1,j xi,j, sum_i zi^2=1253. What proportion of variance is explained? A <10%; B 10-20%; C 20-30%; D 30-40%.",
    questionHtml: `<p>Consider a data set with 1000 observations. Each observation contains 10 different variables with mean zero and equal variance. We perform a principal component analysis. We determine the scores \\(z_1,z_2,\\ldots,z_{1000}\\) for each observation using the first principal component as follows:</p><div class="math-block">\\[z_i=\\sum_{j=1}^{10}\\alpha_{1,j}x_{i,j}.\\]</div><p>The total variance of the data set is equal to 5 and you are given \\(\\sum_{i=1}^{1000}z_i^2=1253\\). What is proportion of the variance that is explained by the first principal component?</p><p>A. Smaller than 10%<br>B. Between 10% and 20%.<br>C. Between 20% and 30%.<br>D. Between 30% and 40%.</p>`,
    explanation: "Provisional solution: because the scores have mean zero, Var(Z1)=(1/1000)sum zi^2=1.253 using the course denominator n. The explained proportion is 1.253/5=0.2506, or about 25.1%. Answer C."
  },
  {
    id: "t4q3", topic: "pca-variance", topicName: "Explained Variance and Dimension Reduction", source: "Tutorial 4 Questions, Q3",
    difficulty: "medium", type: "long", solutionStatus: "unofficial",
    text: "For a standardized PCA of 9 numerical mtcars variables, standard deviations are 2.3782, 1.4429, 0.71008, 0.51481, 0.42797, 0.35184, 0.32413, 0.2419, 0.14896. Proportions include 0.6284, 0.2313, ?, 0.02945, 0.02035, 0.01375, 0.01167, 0.0065, 0.00247. (a) Relate standard deviations and eigenvalues. (b) Determine PC3 proportion. (c) How many components reach 95% cumulative variance?",
    questionHtml: `<p>The Motor-Trend-Car-Road dataset consists of data that was extracted from the 1974 Motor Trend US magazine, and comprises fuel consumption and 10 aspects of automobile design and performance for 32 automobiles (1973-74 models). There are 32 observations on 11 numeric variables:</p><p>1 <code>mpg</code> Miles/(US) gallon: more powerful and heavier cars tend to consume more fuel<br>2 <code>cyl</code> Number of cylinders: more powerful cars often have more cylinders<br>3 <code>disp</code> Displacement (cu.in.): the combined volume of the engine's cylinders<br>4 <code>hp</code> Gross horsepower: this is a measure of the power generated by the car<br>5 <code>drat</code> Rear axle ratio: higher values will decrease fuel efficiency<br>6 <code>wt</code> Weight (1000 lbs)<br>7 <code>qsec</code> 1/4 mile time: the cars speed and acceleration<br>8 <code>vs</code> Engine block: 0 = V-shaped or 1 = straight<br>9 <code>am</code> Transmission: 0 = automatic or 1 = manual<br>10 <code>gear</code> Number of forward gears: sports cars tend to have more gears<br>11 <code>carb</code> Number of carburetors: associated with more powerful engines</p><p>Because PCA works best with numerical data, the two categorical variables (<code>vs</code> and <code>am</code>) are excluded so we are left with a matrix of 9 columns and 32 rows. The data is standardized before PCA is applied and gives the following result:</p><div class="source-table-wrap"><table class="source-table"><thead><tr><th></th><th>PC1</th><th>PC2</th><th>PC3</th><th>PC4</th><th>PC5</th><th>PC6</th><th>PC7</th><th>PC8</th><th>PC9</th></tr></thead><tbody><tr><td>Standard deviation</td><td>2.3782</td><td>1.4429</td><td>0.71008</td><td>0.51481</td><td>0.42797</td><td>0.35184</td><td>0.32413</td><td>0.2419</td><td>0.14896</td></tr><tr><td>Proportion of Variance</td><td>0.6284</td><td>0.2313</td><td>?</td><td>0.02945</td><td>0.02035</td><td>0.01375</td><td>0.01167</td><td>0.0065</td><td>0.00247</td></tr></tbody></table></div><p>(a) What is the relation between the first row (Stand. dev.) and the eigenvalues \\(\\lambda_i\\)?</p><p>(b) Determine the Proportion of Variance for PC3.</p><p>(c) How many components should be retained according to the proportion of variance explained criterion at level 95%?</p>`,
    explanation: "Provisional solution: (a) lambda_k=(standard deviation of PC k)^2. (b) lambda3=0.71008^2, and total standardized variance is 9, so PVE3=0.71008^2/9=0.05602. (c) The first four total about 0.94517, below 95%; adding PC5 gives about 0.96552. Retain 5 components."
  },
  {
    id: "t4q4", topic: "pca-dependence", topicName: "Dependence, Covariance, and Principal Axes", source: "Tutorial 4 Questions, Q4",
    difficulty: "hard", type: "proof", solutionStatus: "unofficial",
    text: "Let (X1,X2)^T be bivariate normal with mean zero and covariance R=[[1,r],[r,1]], where r>0. (a) Determine eigenvectors alpha1 and alpha2. (b) Explain intuitively why the principal-component directions are independent of r. (c) What is the effect of r on PCA?",
    questionHtml: `<p>Let</p><div class="math-block">\\[X=\\begin{pmatrix}X_1\\\\X_2\\end{pmatrix}\\sim N\\left(\\begin{pmatrix}0\\\\0\\end{pmatrix},R\\right),\\qquad R=\\begin{pmatrix}1&r\\\\r&1\\end{pmatrix}.\\]</div><p>Assume that the distributions \\(X_1\\) and \\(X_2\\) are standardized and \\(r&gt;0\\).</p><p>(a) Determine the eigenvectors \\(\\alpha_1\\) and \\(\\alpha_2\\) of the covariance matrix \\(R\\).</p><p>(b) The results from the previous question imply that the principal components of a bivariate normal distribution are independent of the correlation coefficient \\(r\\). Explain this intuitively.</p><p>(c) What is the effect of the correlation \\(r\\) when performing a principal component analysis on a bivariate normal data set.</p>`,
    explanation: "Provisional solution: normalized eigenvectors are alpha1=(1,1)/sqrt2 with eigenvalue 1+r and alpha2=(1,-1)/sqrt2 with eigenvalue 1-r. Equal marginal variances make the cloud symmetric around the 45-degree and -45-degree axes, so changing positive r stretches or compresses those axes without rotating them. As r rises, PC1 explains (1+r)/2 and PC2 explains (1-r)/2, so dimension reduction becomes more effective."
  },
  {
    id: "t4q5", topic: "pca-houses", topicName: "Interpreting Loadings", source: "Tutorial 4 Questions, Q5",
    difficulty: "medium", type: "long", solutionStatus: "unofficial",
    text: "Car loadings are: MPG (0.3,0.02), Weight (-0.36,0.18), Length (-0.27,0.42), Engine (-0.34,0.02), Horsepower (-0.32,-0.29), Price (-0.26,-0.47). Interpret PC1 and PC2.",
    questionHtml: `<p>Consider a data set with car information.</p><div class="source-table-wrap"><table class="source-table compact"><thead><tr><th>Variable</th><th>PC 1</th><th>PC2</th></tr></thead><tbody><tr><td>gas mileage (MPG)</td><td>0.3</td><td>0.02</td></tr><tr><td>Weight</td><td>-0.36</td><td>0.18</td></tr><tr><td>Length</td><td>-0.27</td><td>0.42</td></tr><tr><td>Engine</td><td>-0.34</td><td>0.02</td></tr><tr><td>Horsepower</td><td>-0.32</td><td>-0.29</td></tr><tr><td>Price</td><td>-0.26</td><td>-0.47</td></tr></tbody></table></div><p>Give an interpretation of the first and second principal component.</p>`,
    explanation: "Provisional solution: PC1 contrasts fuel economy with vehicle size/power/price: high PC1 means higher MPG and generally lighter, shorter, smaller-engined, less powerful, cheaper cars. PC2 loads positively on length/weight and negatively on horsepower/price, so it contrasts physical body size with performance/value. Reversing every sign of either component gives an equivalent interpretation."
  },
  {
    id: "t4q6", topic: "pca-theory", topicName: "PCA Optimization and Eigenvectors", source: "Tutorial 4 Questions, Q6",
    difficulty: "medium", type: "proof", solutionStatus: "unofficial",
    text: "For X=(X1,...,Xp) with covariance Sigma and Z1=alpha1,1 X1+...+alpha1,p Xp, show that Var[Z1]=alpha1 Sigma alpha1', where alpha1 is written as a row vector.",
    questionHtml: `<p>Consider the random variables \\(X=(X_1,X_2,\\ldots,X_p)\\) with covariance matrix denoted by \\(\\Sigma\\). Define the variable \\(Z_1\\) as a linear combination of the variables \\(X\\):</p><div class="math-block">\\[Z_1=\\alpha_{1,1}X_1+\\alpha_{1,2}X_2+\\cdots+\\alpha_{1,p}X_p.\\]</div><p>Show that</p><div class="math-block">\\[\\operatorname{Var}[Z_1]=\\alpha_1\\Sigma\\alpha_1',\\]</div><p>where \\(\\alpha_1=(\\alpha_{1,1},\\alpha_{1,2},\\ldots,\\alpha_{1,p})\\).</p>`,
    explanation: "Provisional solution: write Z1=alpha1 X. Then Var(Z1)=Var(alpha1 X)=alpha1 Var(X) alpha1'=alpha1 Sigma alpha1'. In sums, this is sum_j sum_k alpha1,j alpha1,k Cov(Xj,Xk)."
  },
  {
    id: "t4q7", topic: "pca-theory", topicName: "PCA Optimization and Eigenvectors", source: "Tutorial 4 Questions, Q7",
    difficulty: "hard", type: "proof", solutionStatus: "unofficial",
    text: "For f(alpha1)=alpha1 Sigma alpha1' - lambda(alpha1 dot alpha1 -1), show that partial f / partial alpha1 = 2(Sigma alpha1' - lambda alpha1').",
    questionHtml: `<p>Consider the covariance matrix \\(\\Sigma\\) of a \\(n\\)-dimensional random vector \\(X\\). Define \\(\\alpha_1=(\\alpha_{1,1},\\alpha_{1,2},\\ldots,\\alpha_{1,n})\\) and</p><div class="math-block">\\[f(\\alpha_1)=\\alpha_1\\Sigma\\alpha_1'-\\lambda(\\alpha_1\\cdot\\alpha_1-1).\\]</div><p>Show that</p><div class="math-block">\\[\\frac{\\partial f}{\\partial\\alpha_1}=2(\\Sigma\\alpha_1'-\\lambda\\alpha_1').\\]</div>`,
    explanation: "Provisional solution: for symmetric Sigma, the gradient of alpha Sigma alpha' is 2 Sigma alpha'. The gradient of lambda(alpha alpha'-1) is 2 lambda alpha'. Subtracting gives 2(Sigma alpha'-lambda alpha'). Setting it to zero recovers Sigma alpha'=lambda alpha'."
  },
  {
    id: "t4exam1", topic: "pca-theory", topicName: "PCA Optimization and Eigenvectors", source: "Tutorial 4 Exam Question, Q1",
    difficulty: "hard", type: "exam", solutionStatus: "unofficial",
    text: "For observations (160,70), (180,81), (200,90), (174,65), E[X1]=178.5, E[X2]=76.5, Var[X1]=275.67, Var[X2]=126.67, and Var[X1+X2]=714. (a) Determine the first principal component without standardizing. (b) Determine its proportion of total variance. (c) Determine the variance of the second principal component.",
    questionHtml: `<p>Consider a data set with two variables, denoted by \\(X_1\\) and \\(X_2\\). You are also given the following information</p><div class="math-block">\\[E[X_1]=178.5,\\quad E[X_2]=76.5,\\quad \\operatorname{Var}[X_1]=275.67,\\quad \\operatorname{Var}[X_2]=126.67.\\]</div><p>Moreover, you are also given that</p><div class="math-block">\\[\\operatorname{Var}[X_1+X_2]=714.\\]</div><div class="source-table-wrap"><div class="source-caption">Table 1: Data set with four observations.</div><table class="source-table compact"><thead><tr><th>Observation</th><th>X1</th><th>X2</th></tr></thead><tbody><tr><td>1</td><td>160</td><td>70</td></tr><tr><td>2</td><td>180</td><td>81</td></tr><tr><td>3</td><td>200</td><td>90</td></tr><tr><td>4</td><td>174</td><td>65</td></tr></tbody></table></div><p>(a) (4 points) Determine the first principal component. You do not need to standardize or scale the data.</p><p>(b) (1 point) Determine the proportion of the total variance explained by the first principal component.</p><p>(c) (2 points) Denote by \\((\\beta_1,\\beta_2)\\) the second principal component. Determine the variance of the second principal component.</p>`,
    explanation: "Provisional solution: Cov(X1,X2)=[714-275.67-126.67]/2=155.83, so Sigma=[[275.67,155.83],[155.83,126.67]]. Its eigenvalues are approximately 373.893 and 28.447. A normalized first eigenvector may be (0.84597,0.53323) (the simultaneous negative is equivalent), so Z1=0.84597 X1+0.53323 X2. It explains 373.893/(275.67+126.67)=0.92930, about 92.93%. The second-component variance is lambda2 approximately 28.447."
  }
);

CARDS.push(
  { topic: "pca-geometry", front: "PCA score", back: "For loading vector alpha and observation x, the score is z=alpha^T x: the signed projection onto that axis.", source: SOURCES.part2Slides },
  { topic: "pca-geometry", front: "Orthonormal basis", back: "Every loading has norm 1 and distinct loadings have dot product 0; then A^{-1}=A^T.", source: SOURCES.part2Text },
  { topic: "pca-geometry", front: "Exact PCA reconstruction", back: "With all PCs, Z=XA and X=ZA^T. Truncating to k PCs gives X-hat=Z_k A_k^T.", source: SOURCES.part2Slides },
  { topic: "pca-dependence", front: "Covariance matrix", back: "Variances are on the diagonal and pairwise covariances are off-diagonal; the matrix is symmetric.", source: SOURCES.part2Text },
  { topic: "pca-dependence", front: "PCA decorrelation", back: "Different principal-component scores have covariance zero.", source: SOURCES.part2Slides },
  { topic: "pca-dependence", front: "Uncorrelated versus independent", back: "PCA guarantees uncorrelated scores. Independence additionally follows for jointly normal scores, not in general.", source: SOURCES.part2Slides },
  { topic: "pca-dependence", front: "Equal-variance 2D correlation matrix", back: "For [[1,r],[r,1]], eigenvectors are (1,1)/sqrt2 and (1,-1)/sqrt2, with eigenvalues 1+r and 1-r.", source: SOURCES.tut4q },
  { topic: "pca-theory", front: "Projected variance", back: "Var(alpha^T X)=alpha^T Sigma alpha.", source: SOURCES.tut4q },
  { topic: "pca-theory", front: "First PCA optimization", back: "Maximize alpha^T Sigma alpha subject to alpha^T alpha=1.", source: SOURCES.part2Text },
  { topic: "pca-theory", front: "PCA eigenvalue equation", back: "The Lagrange condition is Sigma alpha=lambda alpha.", source: SOURCES.part2Slides },
  { topic: "pca-theory", front: "Eigenvalue meaning in PCA", back: "For a unit eigenvector alpha, lambda=Var(alpha^T X).", source: SOURCES.part2Slides },
  { topic: "pca-theory", front: "Why standardize before PCA?", back: "To prevent variables with large units/variances from dominating when scale should not determine importance.", source: SOURCES.part2Slides },
  { topic: "pca-variance", front: "Total variance", back: "sum lambda_k=trace(Sigma)=sum Var(X_j). For p standardized variables, total variance is p.", source: SOURCES.part2Slides },
  { topic: "pca-variance", front: "Explained variance of PC k", back: "lambda_k divided by the sum of all eigenvalues.", source: SOURCES.part2Slides },
  { topic: "pca-variance", front: "Three PC retention rules", back: "Cumulative explained-variance target, scree-plot elbow, and eigenvalue >1 for standardized data.", source: SOURCES.part2Slides },
  { topic: "pca-houses", front: "Houses PC1", back: "A block-size component dominated by rooms, bedrooms, population, and households.", source: SOURCES.part2Slides },
  { topic: "pca-houses", front: "Houses PC2", back: "A location component dominated by opposite latitude and longitude loadings.", source: SOURCES.part2Slides },
  { topic: "pca-houses", front: "Houses first four PCs", back: "They explain about 96.29% of standardized predictor variance.", source: SOURCES.part2Slides },
  { topic: "pca-houses", front: "Loading versus score", back: "A loading defines an axis; a score locates one observation on that axis.", source: SOURCES.part2Text },
  { topic: "pca-compression", front: "RGB image representation", back: "A color image is three matrices: red, green, and blue intensity values.", source: SOURCES.part2Slides },
  { topic: "pca-compression", front: "Rank-k image reconstruction", back: "For each color channel, retain k scores/loadings and reconstruct Z_k A_k^T.", source: SOURCES.part2R },
  { topic: "pca-compression", front: "PCA image storage", back: "An H x L matrix uses HL values; a rank-k factorization uses roughly k(H+L), useful when k is small.", source: SOURCES.part2Text },
  { topic: "pca-theory", front: "Tutorial 3 two-point eigenvalues", back: "After standardizing A and B, Sigma=[[1,-1],[-1,1]] has eigenvalues 2 and 0.", source: SOURCES.tut3s },
  { topic: "pca-theory", front: "PC-variable correlation", back: "If all X_j have variance sigma^2, Corr(Z1,Xj)=sqrt(lambda1) alpha1,j / sigma.", source: SOURCES.tut3s }
);

EXAM_KIT.formulas.push(
  { topic: "PCA Geometry", source: SOURCES.part2Slides, label: "Projection and score", formula: "\\[z=\\alpha^Tx,\\qquad \\|\\alpha\\|=1.\\]", use: "Convert an observation into its coordinate along a PCA direction.", trap: "The sign is directional; distance alone would lose it." },
  { topic: "PCA Theory", source: SOURCES.tut4q, label: "Variance of a linear combination", formula: "\\[\\operatorname{Var}(\\alpha^TX)=\\alpha^T\\Sigma\\alpha.\\]", use: "Start almost every PCA variance proof.", trap: "Include covariance terms; variances do not simply add unless variables are uncorrelated." },
  { topic: "PCA Theory", source: SOURCES.part2Text, label: "PCA eigenvalue equation", formula: "\\[\\Sigma\\alpha_k=\\lambda_k\\alpha_k,\\qquad \\operatorname{Var}(Z_k)=\\lambda_k.\\]", use: "Identify the directions and variances of principal components.", trap: "Normalize eigenvectors before treating them as PCA loading vectors." },
  { topic: "PCA Variance", source: SOURCES.part2Slides, label: "Explained variance", formula: "\\[PVE_k=\\frac{\\lambda_k}{\\sum_j\\lambda_j},\\qquad CPVE_m=\\frac{\\sum_{k=1}^m\\lambda_k}{\\sum_j\\lambda_j}.\\]", use: "Choose how many components to retain.", trap: "For standardized p-variable data, the denominator is p." },
  { topic: "PCA Reconstruction", source: SOURCES.part2Slides, label: "Truncated reconstruction", formula: "\\[Z=XA,\\qquad \\widehat X_k=Z_kA_k^T.\\]", use: "Explain dimension reduction and photo compression.", trap: "Exact reconstruction requires all components." },
  { topic: "PCA Loadings", source: SOURCES.tut3s, label: "Correlation with an original variable", formula: "\\[\\operatorname{Corr}(Z_1,X_j)=\\frac{\\sqrt{\\lambda_1}\\alpha_{1,j}}{\\sigma}\\]", use: "Interpret how strongly an equal-variance variable relates to PC1.", trap: "This displayed form uses the common variance sigma^2 assumption." }
);

EXAM_KIT.derivations.push(
  {
    id: "pca-linear-variance", topic: "PCA Theory", source: SOURCES.tut4q, label: "Derive Var(alpha^T X)",
    goal: "Show the quadratic-form expression for the variance of a linear combination.",
    steps: ["Write Z=alpha^T X.", "Use Var(BX)=B Var(X) B^T.", "Set B=alpha^T and Var(X)=Sigma.", "Obtain Var(Z)=alpha^T Sigma alpha."],
    check: "Expand it as a double sum and identify the covariance terms."
  },
  {
    id: "pca-lagrange", topic: "PCA Theory", source: SOURCES.part2Text, label: "Derive the eigenvalue equation",
    goal: "Show why maximum projected variance is achieved by an eigenvector.",
    steps: ["Maximize alpha^T Sigma alpha subject to alpha^T alpha=1.", "Form L=alpha^T Sigma alpha-lambda(alpha^T alpha-1).", "Differentiate: 2 Sigma alpha-2 lambda alpha=0.", "Therefore Sigma alpha=lambda alpha.", "Choose the eigenvector with largest lambda for PC1."],
    check: "Explain why the norm constraint is necessary."
  },
  {
    id: "pca-uncorrelated", topic: "PCA Dependence", source: SOURCES.part2Text, label: "Show distinct PCs are uncorrelated",
    goal: "Prove Cov(Z_i,Z_j)=0 for orthogonal covariance eigenvectors.",
    steps: ["Write Z_i=alpha_i^T X and Z_j=alpha_j^T X.", "Cov(Z_i,Z_j)=alpha_i^T Sigma alpha_j.", "Use Sigma alpha_j=lambda_j alpha_j.", "This becomes lambda_j alpha_i^T alpha_j=0 for i not equal to j."],
    check: "State why zero covariance is not automatically independence."
  },
  {
    id: "pca-loading-correlation", topic: "PCA Loadings", source: SOURCES.tut3s, label: "Derive Corr(Z1,Xj)",
    goal: "Reproduce the official Tutorial 3 exam derivation.",
    steps: ["Use Var(Z1)=alpha1^T Sigma alpha1=lambda1.", "Use Var(Xj)=sigma^2.", "Cov(Z1,Xj) is the j-th component of Sigma alpha1, so it is lambda1 alpha1,j.", "Divide covariance by sqrt(lambda1 sigma^2)."],
    check: "The result is sqrt(lambda1) alpha1,j / sigma."
  }
);

EXAM_KIT.rCommands.push(
  { topic: "PCA", source: SOURCES.part2R, label: "Standardize and fit PCA", code: "X <- scale(Data[,-1])\nfit <- prcomp(X)", use: "Run covariance/correlation PCA on comparably scaled variables.", trap: "Check whether the target column should be excluded and whether scale=TRUE is already needed." },
  { topic: "PCA", source: SOURCES.part2R, label: "Inspect loadings and scores", code: "fit$rotation\nfit$x", use: "Read loading vectors and observation coordinates.", trap: "rotation contains directions; x contains scores." },
  { topic: "PCA", source: SOURCES.part2R, label: "Inspect explained variance", code: "summary(fit)\nfit$sdev^2\ncumsum(fit$sdev^2 / sum(fit$sdev^2))", use: "Compute eigenvalues, proportions, and cumulative proportions.", trap: "sdev is the square root of the eigenvalue." },
  { topic: "PCA", source: SOURCES.part2R, label: "Verify decorrelation", code: "round(cov(fit$x), 3)", use: "Check that score covariance is diagonal up to numerical rounding.", trap: "Zero sample covariance is not general independence." },
  { topic: "Image PCA", source: "Part2/Photo_R.R", label: "Reconstruct k image components", code: "fit <- prcomp(channel, center=FALSE)\nreconstructed <- fit$x[,1:k] %*% t(fit$rotation[,1:k])", use: "Build a rank-k approximation of one color channel.", trap: "Repeat for red, green, and blue and clip valid intensity values when exporting." }
);

EXAM_KIT.checklist.push(
  "I can compute a dot product, norm, projection, and new coordinate.",
  "I can explain why PCA standardizes variables and when not to.",
  "I can derive Var(alpha^T X)=alpha^T Sigma alpha.",
  "I can derive Sigma alpha=lambda alpha with a Lagrangian.",
  "I can distinguish uncorrelated from independent components.",
  "I can calculate explained and cumulative variance from eigenvalues or PC standard deviations.",
  "I can interpret loading vectors while remembering that their signs are arbitrary.",
  "I can explain and write the rank-k photo reconstruction."
);

MEDIA_LINKS.push(
  { label: "PCA and linear algebra: switching between coordinate systems", url: "https://www.youtube.com/watch?v=00_AbEDs-V0", status: "linked Part 2 lecture" },
  { label: "Compressing a photo using PCA", url: "https://www.youtube.com/watch?v=VH4DnszIuZw", status: "linked Part 2 lecture" },
  { label: "R Tutorial: A simple example to start to PCA", url: "https://www.youtube.com/watch?v=pGARXmrKgW0", status: "linked Part 2 lecture" },
  { label: "A simple example to start to PCA", url: "https://www.youtube.com/watch?v=u9pL7VpCxQM", status: "linked Part 2 lecture" },
  { label: "Lecture 4 Zoom", url: "https://www.youtube.com/watch?v=MmVeIQHQEG8&list=PLAcnNB-Z5D0zdcAex_5ayAg04DhvFx0H-&index=5", status: "linked Part 2 lecture" }
);

const HOUSE_PCA = {
  variables: ["mincome", "mage", "rooms", "bedrms", "popn", "househld", "lat", "long"],
  proportions: [0.48799687, 0.23820616, 0.13431821, 0.10235143, 0.01857986, 0.01024487, 0.00645706, 0.00184553],
  loadings: {
    pc1: [-0.04485, 0.21781, -0.48414, -0.49099, -0.47228, -0.49223, 0.07088, -0.06872],
    pc2: [-0.02464, -0.00343, 0.07219, 0.05352, 0.02027, 0.05620, 0.70313, -0.70238]
  }
};
