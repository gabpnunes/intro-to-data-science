const SITE_VERSION = "2026.06.11-part2.32";

const SOURCES = {
  intro: "Introduction_Data_Science.md",
  slides: "Part1/Part1 Slides.pdf",
  rcode: "Part1/RCode_Part_1.R",
  tut0q: "Part1/Tutorial 0 Questions.pdf",
  tut0s: "Part1/Tutorial 0 Solutions.pdf",
  tut1q: "Part1/Tutorial 1 Questions.pdf",
  tut1s: "Part1/Tutorial 1 Solutions.pdf",
  tut2q: "Part1/Tutorial 2 Questions.pdf",
  tut2s: "Part1/Tutorial 2 Solutions.pdf",
  datasets: "Part1 datasets: telecom.txt, Outlier.txt, dtData1.RDS, churn.txt",
  media: "Linked Week 1 videos/articles from Introduction_Data_Science.md"
};

const SOURCE_INVENTORY = [
  {
    label: "Course outline",
    source: SOURCES.intro,
    status: "verified",
    detail: "Schedule, part structure, Week 1 links, assignment/exam dates, and roadmap source."
  },
  {
    label: "Part 1 slides",
    source: SOURCES.slides,
    status: "incorporated",
    detail: "Part 1 guide topics, diagrams, formulas, traps, and visual lab concepts are built from this deck."
  },
  {
    label: "Tutorial 0 questions",
    source: SOURCES.tut0q,
    status: "incorporated",
    detail: "All current self-study questions are in the question bank with source-style table rendering where needed."
  },
  {
    label: "Tutorial 0 solutions",
    source: SOURCES.tut0s,
    status: "official",
    detail: "Official wording is preserved separately from explanations; Q5 keeps the source table structure."
  },
  {
    label: "Tutorial 1 questions",
    source: SOURCES.tut1q,
    status: "incorporated",
    detail: "Questions are source-checked and reconciled with the official Tutorial 1 solution PDF."
  },
  {
    label: "Tutorial 1 solutions",
    source: SOURCES.tut1s,
    status: "official",
    detail: "Official wording is preserved separately from explanations; reconciled on 2026-06-04."
  },
  {
    label: "Tutorial 2 questions",
    source: SOURCES.tut2q,
    status: "incorporated",
    detail: "Exercises and exam questions are source-checked; exercise solutions are reconciled with the official Tutorial 2 solution PDF."
  },
  {
    label: "Tutorial 2 solutions",
    source: SOURCES.tut2s,
    status: "official",
    detail: "Official wording for Tutorial 2 Exercises 1-5 is preserved separately from explanations; reconciled on 2026-06-07."
  },
  {
    label: "R examples",
    source: SOURCES.rcode,
    status: "incorporated",
    detail: "Missing values, outliers, transformations, and churn EDA examples feed the guide, visuals, and flashcards."
  },
  {
    label: "Part 1 datasets",
    source: SOURCES.datasets,
    status: "incorporated",
    detail: "Telecom, Outlier, and churn data are used for explanations and the course-data churn visual."
  },
  {
    label: "Linked media",
    source: SOURCES.media,
    status: "linked",
    detail: "Included as external resources unless the same material is verified in local course files."
  },
  {
    label: "Future official solutions",
    source: "Tutorial 2 exam questions, Tutorial 3 Questions 1-2, and Tutorial 4 official solutions",
    status: "pending",
    detail: "These question-bank explanations remain provisional unless an official solution source is supplied."
  }
];

const COURSE_PARTS = [
  {
    id: "part1",
    label: "Part 1",
    title: "Data preprocessing and exploratory data analysis",
    status: "live",
    coverage: "Slides, Tutorial 0-2 questions, Tutorial 0-2 exercise official solutions, R examples, and datasets are incorporated.",
    topics: ["CRISP-DM", "Missing values", "Outliers", "Summaries", "Transformations", "EDA"]
  },
  {
    id: "part2",
    label: "Part 2",
    title: "Principal component analysis",
    status: "coming soon",
    coverage: "Will be built when Week 2 slides, tutorials, solutions, and any PCA data/code files are added.",
    topics: ["PCA intuition", "Principal components", "Interpretation", "Applications"]
  },
  {
    id: "part3",
    label: "Part 3",
    title: "Machine learning foundations",
    status: "coming soon",
    coverage: "Will be built when Week 3 slides, tutorials, solutions, and ML/KNN materials are added.",
    topics: ["Regression function", "Loss functions", "KNN", "Validation", "Bias-variance"]
  }
];

const ERRATA_NOTES = [
  {
    id: "err-t2-table-count",
    severity: "likely typo",
    source: "Part1/Tutorial 2 Questions.pdf, Exercise 1",
    relatedQuestionId: "t2q1",
    title: "Table 1 says 6 observations but lists 7 rows",
    note: "The table caption states 'Data set with 6 observations and 3 variables', but the table contains observations numbered 1 through 7. The question bank uses all 7 listed rows for calculations.",
    action: "Treat the row data as authoritative unless an official correction says otherwise."
  },
  {
    id: "err-t0-q3-format",
    severity: "formatting ambiguity",
    source: "Part1/Tutorial 0 Solutions.pdf, Question 3",
    relatedQuestionId: "t0q3",
    title: "Official solution lists more than two possible tasks",
    note: "Question 3 asks for two tasks, but the official solution provides several acceptable examples and has labels such as 'Data Cleaning:' and 'Feature Engineering:' placed awkwardly in the text.",
    action: "The site preserves the official wording exactly and adds a separate explanation telling you to choose two tasks and justify them in an exam answer."
  },
  {
    id: "err-t1-q4-mean-target",
    severity: "wording mismatch",
    source: "Part1/Tutorial 1 Questions.pdf and Part1/Tutorial 1 Solutions.pdf, Question 4",
    relatedQuestionId: "t1q4",
    title: "Question sheet asks mean(Data.New), solution sheet says mean(Data)",
    note: "Tutorial 1 Question 4 asks for the result of mean(Data.New), while the official solution PDF phrases part b as mean(Data). The result remains NA because the replacement value mean(Data) is computed before imputation and Data still contains missing values.",
    action: "The site preserves the official solution wording and adds a separate explanation for the question-sheet version."
  },
  {
    id: "err-t2-q4-lower-ineq",
    severity: "likely typo",
    source: "Part1/Tutorial 2 Solutions.pdf, Exercise 4",
    relatedQuestionId: "t2q4",
    title: "Lower boxplot-tail line uses the wrong inequality sign",
    note: "The official solution text says the lower outlier condition is X < Q1 - 1.5 IQR, but a later displayed line writes P[X > Q1 - 1.5 IQR] while simplifying to P[Z < -2.697959].",
    action: "The site preserves the official wording and explains that the intended lower-tail event is X < Q1 - 1.5 IQR."
  },
  {
    id: "err-t2-q5-simulation-size",
    severity: "wording mismatch",
    source: "Part1/Tutorial 2 Questions.pdf and Part1/Tutorial 2 Solutions.pdf, Exercise 5",
    relatedQuestionId: "t2q5",
    title: "Question asks 10,000 simulations but official code uses 1,000",
    note: "Tutorial 2 Exercise 5 asks for 10 000 lognormal realizations, while the official solution code uses rnorm(1000, 2, 1). The official solution also labels the final ratio part as Question d although it corresponds to part e.",
    action: "The site preserves the official code and adds a separate explanation noting the mismatch."
  }
];

const EXAM_KIT = {
  formulas: [
    {
      topic: "Missing Values",
      source: SOURCES.tut1q,
      label: "At least one missing value",
      formula: "\\[P(\\text{at least one missing})=1-(1-p)^n.\\]",
      use: "Use the complement: no missing values is easier than counting every possible missing pattern.",
      trap: "Independence is required before multiplying \\((1-p)^n\\)."
    },
    {
      topic: "Missing Values",
      source: SOURCES.tut1q,
      label: "Deletion increases variance",
      formula: "\\[E[S_1]=E[S_2]=\\mu,\\qquad \\frac{\\operatorname{Var}(S_1)}{\\operatorname{Var}(S_2)}=1+\\frac{m}{n_1}.\\]",
      use: "Deleting randomly missing observations can keep the mean unbiased, but makes it noisier.",
      trap: "Do not say deletion is harmless just because the expectation is unchanged."
    },
    {
      topic: "Summaries",
      source: SOURCES.tut2q,
      label: "Empirical distribution function",
      formula: "\\[\\hat F(x)=\\frac{1}{n}\\sum_{i=1}^n I[x_i\\le x].\\]",
      use: "For ordered data, count how many observations are at or below the queried value.",
      trap: "Excel quantile functions may interpolate differently from the course empirical rule."
    },
    {
      topic: "Summaries",
      source: SOURCES.tut2q,
      label: "Normal IQR",
      formula: "\\[IQR\\approx1.35\\sigma.\\]",
      use: "For a normal distribution, \\(Q_3=\\mu+0.674\\sigma\\) and \\(Q_1=\\mu-0.674\\sigma\\).",
      trap: "The 1.35 factor is distribution-specific; it is not a universal IQR-to-sigma conversion."
    },
    {
      topic: "Outliers",
      source: SOURCES.slides,
      label: "Boxplot fences",
      formula: "\\[Q_1-1.5IQR,\\qquad Q_3+1.5IQR.\\]",
      use: "Mark values outside the fences as boxplot outliers.",
      trap: "The rule flags unusual values; it does not prove a data point is wrong."
    },
    {
      topic: "Summaries",
      source: SOURCES.tut2q,
      label: "Lognormal mean and median",
      formula: "\\[E[X]=e^{\\mu+\\sigma^2/2},\\qquad \\operatorname{Median}(X)=e^\\mu,\\qquad \\frac{\\operatorname{Median}(X)}{E[X]}=e^{-\\sigma^2/2}.\\]",
      use: "Use this when explaining why right-skewed positive data have mean above median.",
      trap: "The \\(\\mu\\) and \\(\\sigma\\) are on the log scale."
    },
    {
      topic: "Data Transformation",
      source: SOURCES.slides,
      label: "Standardization and min-max scaling",
      formula: "\\[Z=\\frac{X-\\bar X}{sd(X)},\\qquad X_{minmax}=\\frac{X-\\min(X)}{\\max(X)-\\min(X)}.\\]",
      use: "Use before distance-based methods when variables have different scales.",
      trap: "Z-scores still depend on mean and standard deviation, so outliers can affect them."
    }
  ],
  derivations: [
    {
      id: "missing-complement",
      topic: "Missing Values",
      source: SOURCES.tut1q,
      label: "Why P(at least one missing) uses the complement",
      goal: "Derive the probability that at least one of n independent observations is missing when each observation is missing with probability p.",
      steps: [
        "Start with the event you want: \\(A=\\{\\text{at least one missing}\\}\\).",
        "The complement is easier: \\(A^c=\\{\\text{no observations are missing}\\}\\).",
        "For one observation, \\(P(\\text{not missing})=1-p\\).",
        "Independence lets us multiply: \\(P(A^c)=(1-p)^n\\).",
        "Therefore \\(P(A)=1-P(A^c)=1-(1-p)^n\\)."
      ],
      check: "For Tutorial 1 Q1, plug in \\(p=0.05\\) and \\(n=30\\): \\(1-0.95^{30}\\approx0.785\\)."
    },
    {
      id: "deletion-variance",
      topic: "Missing Values",
      source: SOURCES.tut1q,
      label: "Why deleting observations increases variance",
      goal: "Show why the sample mean based on fewer observations can remain unbiased but become noisier.",
      steps: [
        "Let \\(S_1=\\frac{1}{n_1}\\sum_{i=1}^{n_1}X_i\\) and \\(S_2=\\frac{1}{n_1+m}\\sum_{i=1}^{n_1+m}X_i\\).",
        "Linearity gives \\(E[S_1]=\\frac{1}{n_1}n_1\\mu=\\mu\\) and \\(E[S_2]=\\frac{1}{n_1+m}(n_1+m)\\mu=\\mu\\).",
        "Independence gives \\(\\operatorname{Var}(S_1)=\\frac{1}{n_1^2}n_1\\sigma^2=\\frac{\\sigma^2}{n_1}\\).",
        "Similarly, \\(\\operatorname{Var}(S_2)=\\frac{\\sigma^2}{n_1+m}\\).",
        "Divide the variances: \\(\\frac{\\operatorname{Var}(S_1)}{\\operatorname{Var}(S_2)}=\\frac{\\sigma^2/n_1}{\\sigma^2/(n_1+m)}=1+\\frac{m}{n_1}\\)."
      ],
      check: "The expectation part says random deletion need not create bias; the variance ratio says it still costs precision."
    },
    {
      id: "normal-iqr",
      topic: "Summaries",
      source: SOURCES.tut2q,
      label: "Why normal IQR is about 1.35 sigma",
      goal: "Connect quartiles of a normal distribution to the standard deviation.",
      steps: [
        "If \\(X\\sim N(\\mu,\\sigma^2)\\), then \\(Z=\\frac{X-\\mu}{\\sigma}\\sim N(0,1)\\).",
        "The 75th percentile of \\(Z\\) is about \\(0.674\\), so \\(Q_3=\\mu+0.674\\sigma\\).",
        "By symmetry, the 25th percentile is about \\(-0.674\\), so \\(Q_1=\\mu-0.674\\sigma\\).",
        "Subtract: \\(IQR=Q_3-Q_1=(\\mu+0.674\\sigma)-(\\mu-0.674\\sigma)\\).",
        "Thus \\(IQR\\approx1.348\\sigma\\), usually rounded to \\(1.35\\sigma\\)."
      ],
      check: "This factor is normal-specific; do not use it blindly for skewed or heavy-tailed data."
    },
    {
      id: "normal-boxplot-rate",
      topic: "Outliers",
      source: SOURCES.tut2q,
      label: "Why normal boxplot outliers are about 0.7%",
      goal: "Derive the probability that a normal observation falls outside the 1.5 IQR fences.",
      steps: [
        "For normal data, \\(Q_1\\approx\\mu-0.674\\sigma\\), \\(Q_3\\approx\\mu+0.674\\sigma\\), and \\(IQR\\approx1.348\\sigma\\).",
        "The upper fence is \\(Q_3+1.5IQR\\approx\\mu+0.674\\sigma+1.5(1.348\\sigma)\\).",
        "That simplifies to about \\(\\mu+2.696\\sigma\\); the lower fence is about \\(\\mu-2.696\\sigma\\).",
        "Standardize to \\(Z\\): outside the fences means \\(|Z|>2.696\\).",
        "So \\(P(\\text{boxplot outlier})=2(1-\\Phi(2.696))\\approx0.007\\), about 0.7%."
      ],
      check: "The rule intentionally flags rare normal observations, so a flagged value is not automatically a data-entry error."
    },
    {
      id: "lognormal-mean-median",
      topic: "Summaries",
      source: SOURCES.tut2q,
      label: "Why lognormal mean exceeds median",
      goal: "Explain the mean and median formulas for \\(X\\sim LN(\\mu,\\sigma)\\).",
      steps: [
        "If \\(X\\sim LN(\\mu,\\sigma)\\), then \\(Y=\\log X\\sim N(\\mu,\\sigma^2)\\).",
        "The median solves \\(P(X\\le m)=0.5\\), equivalently \\(P(Y\\le \\log m)=0.5\\).",
        "For a normal variable, the median is its mean, so \\(\\log m=\\mu\\) and \\(\\operatorname{Median}(X)=e^\\mu\\).",
        "The lognormal mean is \\(E[X]=E[e^Y]=e^{\\mu+\\sigma^2/2}\\).",
        "Therefore \\(\\frac{\\operatorname{Median}(X)}{E[X]}=\\frac{e^\\mu}{e^{\\mu+\\sigma^2/2}}=e^{-\\sigma^2/2}\\)."
      ],
      check: "The right tail pulls the mean above the median; larger \\(\\sigma\\) makes the gap bigger."
    }
  ],
  rCommands: [
    {
      topic: "Missing Values",
      source: SOURCES.rcode,
      label: "Read text data and declare missing codes",
      code: "Data = read.table('telecom.txt', header=TRUE, sep=',', na.strings=c('na','N/A','NA'))",
      use: "Raw files encode missingness as strings instead of R's actual NA value.",
      trap: "If you forget a missing-code string, R treats it as ordinary data and `is.na` will not flag it."
    },
    {
      topic: "Missing Values",
      source: SOURCES.rcode,
      label: "Locate missing values",
      code: "is.na(Data$TotalCharges)\nwhich(is.na(Data$TotalCharges))\nsum(is.na(Data))",
      use: "`is.na` gives TRUE/FALSE values; `which` gives positions; `sum` counts recognized missing values.",
      trap: "The string 'na' is not missing unless converted or declared through `na.strings`."
    },
    {
      topic: "Missing Values",
      source: SOURCES.rcode,
      label: "Mean imputation",
      code: "Data.Replace = replace(Data.missing, which(is.na(Data.missing)), mean(Data.missing[-which(is.na(Data.missing))]))",
      use: "Replace missing values by the mean of the observed non-missing values.",
      trap: "`mean(Data.missing)` returns NA when missing values are present, so compute the mean on observed values or use `na.rm=TRUE`."
    },
    {
      topic: "Outliers",
      source: SOURCES.rcode,
      label: "Overlay a normal density",
      code: "hist(Data, 100, freq=FALSE)\nlines(seq(-4,4,0.1), dnorm(seq(-4,4,0.1)), col='blue', lwd=2)",
      use: "Compare a histogram to a reference normal density to see tail behavior or unusual shape.",
      trap: "A visual mismatch suggests investigation, not automatic deletion."
    },
    {
      topic: "Outliers",
      source: SOURCES.rcode,
      label: "Regression leverage check",
      code: "Outliers.full.lm = lm(y ~ x)\nsummary(Outliers.full.lm)\nabline(Outliers.full.lm, col='blue', lwd=2)",
      use: "Fit and compare regression lines with/without candidate points to see influence.",
      trap: "High leverage is about unusual x-values; a large residual is about vertical distance from the fitted line."
    },
    {
      topic: "Summaries",
      source: SOURCES.rcode,
      label: "Summary statistics and quantile markers",
      code: "summary(dtData)\nmean(dtData$Mileage)\nquantile(dtData$Mileage, 0.25)\nquantile(dtData$Mileage, 0.75)",
      use: "Get central tendency and quartiles before interpreting histograms or boxplots.",
      trap: "For skewed variables, report whether you mean mean or median."
    },
    {
      topic: "Data Transformation",
      source: SOURCES.rcode,
      label: "Min-max scaling and z-scores",
      code: "X.minmax = (X - min(X)) / (max(X) - min(X))\nX.Z = (X - mean(X)) / sd(X)",
      use: "Scale variables before distance-based methods such as k-means.",
      trap: "Z-scores are affected by outliers because both mean and standard deviation are affected."
    },
    {
      topic: "Data Transformation",
      source: SOURCES.rcode,
      label: "Log transform and boxplot comparison",
      code: "hist(log(dtData$Mileage), 50)\nboxplot(log(dtData$Mileage), horizontal=TRUE, range=1.5)",
      use: "Use logs for positive right-skewed variables to compress the long tail.",
      trap: "A plain log transform requires positive data."
    },
    {
      topic: "Exploratory Data Analysis",
      source: SOURCES.rcode,
      label: "Conditional probability table",
      code: "mytable = table(churn$Churn, churn$Intl.Plan)\nprop.table(mytable, 2)",
      use: "Column-wise proportions answer: given the international-plan group, what fraction churned?",
      trap: "`prop.table(mytable, 1)` would condition on rows instead; the interpretation changes."
    },
    {
      topic: "Exploratory Data Analysis",
      source: SOURCES.rcode,
      label: "ggplot group comparison",
      code: "ggplot(data=churn) + geom_boxplot(aes(x=Churn, y=Eve.Charge))\nggplot(data=churn) + geom_bar(aes(x=Intl.Plan, fill=Churn), position='fill')",
      use: "Compare distributions or proportions across groups during EDA.",
      trap: "EDA plots show association and structure; do not claim causality from them alone."
    }
  ],
  checklist: [
    "Can you list the six CRISP-DM phases and classify Tutorial 0 Q5 tasks?",
    "Can you explain why mean imputation shrinks variance?",
    "Can you derive the missing-value probability using the complement?",
    "Can you compute mean, median, quantiles, IQR, and boxplot fences from a small table?",
    "Can you explain the difference between an outlier, a high-leverage point, and an influential point?",
    "Can you show why normal IQR is about 1.35 sigma?",
    "Can you explain why lognormal mean exceeds lognormal median?",
    "Can you choose between raw scale, z-score standardization, min-max scaling, and log transformation?",
    "Can you interpret `prop.table(mytable, 2)` as column-wise conditional proportions?",
    "Can you name which Tutorial 2 exam-style solutions are still provisional and must be reconciled later?"
  ]
};

const TOPICS = [
  {
    id: "ds-crisp",
    part: "Part 1",
    week: "W1",
    title: "Data Science and CRISP-DM",
    short: "What data science is, why data-driven decisions matter, and how CRISP-DM structures a project.",
    tags: ["definition", "ethics", "business understanding", "pipeline"],
    sources: [SOURCES.slides, SOURCES.tut0q, SOURCES.tut0s, SOURCES.intro, SOURCES.media],
    sections: [
      {
        heading: "Data science starts with data, not theory",
        body: [
          "The course defines data science as using scientific methods to extract knowledge from a given data set. The important shift is that classical science often starts with a theory and checks it against observations, while data science often starts with data and lets patterns suggest models, explanations, or decisions.",
          "That does not mean data science is just pattern hunting. A data scientist still needs statistics, probability, mathematics, programming, and domain knowledge to decide which patterns are meaningful and which are accidents."
        ],
        diagram: "science-vs-ds",
        traps: [
          "Big data and data science are related, but not identical. Big data is about technologies for handling huge data; data science is about extracting knowledge.",
          "Data-driven decision making can support humans, but it can also become automated decision making when the algorithm makes the business decision directly."
        ]
      },
      {
        heading: "CRISP-DM: the six-phase project logic",
        body: [
          "CRISP-DM means Cross Industry Standard Process for Data Mining. It is useful because data projects are messy: business goals affect data needs, data quality affects modeling choices, and evaluation can force the team back to the original business question.",
          "The six phases are Business Understanding, Data Understanding, Data Preparation, Modeling, Evaluation, and Deployment. The arrows are not one-way; the framework is deliberately iterative."
        ],
        diagram: "crisp",
        proof: "A project can only be called successful relative to a success criterion. That criterion is set in Business Understanding, tested in Evaluation, and only then can Deployment be justified.",
        traps: [
          "Data Preparation is not the same as Data Understanding. Understanding asks what the data are and what problems they contain; preparation changes the raw data into model input.",
          "A second exploratory analysis later in a project is normal: after new data, missing-value handling, or outlier removal, the data distribution may have changed."
        ]
      },
      {
        heading: "Ethics and automated decisions",
        body: [
          "The Tutorial 0 hiring example is the key warning: an algorithm can discover patterns that improve prediction while still discriminating unfairly. Prediction quality is not the same as ethical acceptability.",
          "A practical mitigation is to restrict or audit the variables used by the model, especially variables that directly encode protected characteristics or indirectly proxy for them."
        ],
        traps: [
          "Do not answer ethics questions with only 'use more data'. More data can reproduce historical unfairness more efficiently."
        ]
      }
    ]
  },
  {
    id: "missing",
    part: "Part 1",
    week: "W1",
    title: "Missing Values",
    short: "Detecting missing values, why they break summaries, and how removal/imputation changes results.",
    tags: ["NA", "NaN", "mean imputation", "variance", "R"],
    sources: [SOURCES.slides, SOURCES.rcode, SOURCES.tut1q, SOURCES.datasets],
    sections: [
      {
        heading: "Finding missing values in R",
        body: [
          "R uses `NA` for missing values and `NaN` for undefined numerical results such as `0/0`. The function `is.na(X)` returns a TRUE/FALSE vector, and `which(is.na(X))` returns the positions that are missing.",
          "A common practical issue is that a file may encode missingness as text such as `na`, `N/A`, or even the string `NA`. If those are not declared in `na.strings`, R treats them as ordinary values."
        ],
        code: "Data = read.table('telecom.txt', header=TRUE, sep=',', na.strings=c('na','N/A','NA'))\nwhich(is.na(Data$TotalCharges))",
        traps: [
          "The string 'na' is not automatically the missing value `NA`.",
          "`sum(is.na(Data))` counts recognized missing values only."
        ]
      },
      {
        heading: "Why deleting observations can increase uncertainty",
        body: [
          "If observations are independent with variance \\(\\sigma^2\\), the variance of a sample mean based on \\(n\\) observations is \\(\\sigma^2/n\\). Deleting observations reduces the denominator, so the sample mean becomes noisier.",
          "Tutorial 1 formalizes this with \\(S_1\\), the mean after deleting \\(m\\) observations, and \\(S_2\\), the mean over all \\(n_1+m\\) observations."
        ],
        math: "\\[E[S_1]=E[S_2]=\\mu, \\qquad \\frac{\\operatorname{Var}(S_1)}{\\operatorname{Var}(S_2)} = 1 + \\frac{m}{n_1}.\\]",
        proof: "Expectation is linear, so averaging unbiased observations remains unbiased. Variance shrinks with sample size because independent noise cancels out when averaged.",
        diagram: "missing-variance"
      },
      {
        heading: "Mean imputation preserves location but shrinks spread",
        body: [
          "Replacing missing values with the empirical mean keeps the column mean stable, but it artificially creates repeated central values. Those values add little deviation from the mean, so the standard deviation becomes smaller.",
          "The slides explicitly warn that this can make a variable look more predictable than it really is."
        ],
        diagram: "imputation",
        traps: [
          "`mean(Data)` returns `NA` if `Data` contains missing values unless you remove or skip them.",
          "The correct mean-imputation code must compute the mean on non-missing values."
        ]
      },
      {
        heading: "Random imputation can break relationships",
        body: [
          "Replacing missing values by random values sampled from the observed column can preserve the marginal spread of one variable. However, it may destroy relationships between variables. The R script demonstrates this by replacing missing X values while Y still depends on the original X."
        ],
        diagram: "relationship-break"
      }
    ]
  },
  {
    id: "outliers",
    part: "Part 1",
    week: "W1",
    title: "Outliers and High-Leverage Points",
    short: "Visual outlier detection, boxplots, multivariate outliers, and leverage in regression.",
    tags: ["histogram", "boxplot", "leverage", "regression"],
    sources: [SOURCES.slides, SOURCES.rcode, SOURCES.tut1q, SOURCES.tut2q, SOURCES.datasets],
    sections: [
      {
        heading: "Outliers are context-dependent",
        body: [
          "The slides first compare histograms against a normal density. An observation can look strange because it is extreme under a reference model, because it is unusual in a single direction, or because it is unusual only in combination with another variable.",
          "A histogram and a boxplot are good one-dimensional tools, but they can miss a two-dimensional pattern."
        ],
        diagram: "outlier-1d-2d"
      },
      {
        heading: "Boxplot rule",
        body: [
          "The boxplot definition marks observations below \\(Q_1 - 1.5\\,IQR\\) or above \\(Q_3 + 1.5\\,IQR\\) as outliers. This is a rule of thumb, not a universal truth."
        ],
        math: "\\[IQR = Q_3 - Q_1, \\qquad \\text{fences}=Q_1-1.5IQR,\\;Q_3+1.5IQR.\\]",
        diagram: "boxplot"
      },
      {
        heading: "High leverage is about the x-direction",
        body: [
          "In regression, a point can be an outlier in the y-direction, a high-leverage point in the x-direction, or both. The R script labels points A, B, and C to show that the most influential point is not always the one that looks most vertically extreme.",
          "A high-leverage point has the power to rotate the fitted line because it sits far from the main cloud of x-values."
        ],
        diagram: "leverage",
        traps: [
          "A point can have high leverage without a huge residual.",
          "A point can be a y-outlier without strongly changing the fitted line."
        ]
      }
    ]
  },
  {
    id: "summaries",
    part: "Part 1",
    week: "W1",
    title: "Summarizing a Data Set",
    short: "Mean, median, quantiles, IQR, standard deviation, skewness intuition, and categorical summaries.",
    tags: ["mean", "median", "quantiles", "IQR", "normal", "lognormal"],
    sources: [SOURCES.slides, SOURCES.rcode, SOURCES.tut2q, SOURCES.datasets],
    sections: [
      {
        heading: "Mean vs median",
        body: [
          "The mean uses every numerical value and is sensitive to outliers. The median uses order and is therefore much more robust to extreme observations.",
          "For symmetric data such as a normal distribution, mean and median are close. For skewed data such as a lognormal distribution, the mean is pulled into the long tail."
        ],
        math: "\\[\\bar{x}=\\frac{1}{n}\\sum_{i=1}^{n}x_i.\\]",
        diagram: "normal-lognormal",
        traps: [
          "For categorical variables, the numeric summary may be meaningless even if R prints something.",
          "For skewed variables, saying 'average' without specifying mean or median can be misleading."
        ]
      },
      {
        heading: "Empirical quantiles",
        body: [
          "A quantile is a cut-off. The 75th percentile is a value such that about 75% of the distribution lies at or below it. In a finite data set, different software can use different interpolation rules.",
          "The course gives an empirical-distribution definition: for ordered \\(x_1 < \\dots < x_n\\), \\(\\hat F(x_i)=i/n\\), and the empirical quantile jumps at observations."
        ],
        math: "\\[\\hat F(x)=\\frac{1}{n}\\sum_{i=1}^{n}I[x_i\\le x], \\qquad x_q=x_{i+1}\\;\\text{if}\\;\\frac{i}{n}<q\\le\\frac{i+1}{n}.\\]",
        proof: "For \\(x_i\\), exactly \\(i\\) ordered observations are at or below \\(x_i\\). Dividing by \\(n\\) gives \\(\\hat F(x_i)=i/n\\)."
      },
      {
        heading: "IQR and standard deviation for a normal distribution",
        body: [
          "Tutorial 2 asks you to show \\(IQR \\approx 1.35\\sigma\\) for a normal distribution. If \\(X=\\mu+\\sigma Z\\) and \\(Z\\) is standard normal, then the 75th percentile is \\(\\mu+0.674\\sigma\\) and the 25th percentile is \\(\\mu-0.674\\sigma\\)."
        ],
        math: "\\[IQR=(\\mu+0.674\\sigma)-(\\mu-0.674\\sigma)=1.348\\sigma\\approx1.35\\sigma.\\]",
        diagram: "iqr-normal"
      },
      {
        heading: "Lognormal mean and median",
        body: [
          "If \\(X\\sim LN(\\mu,\\sigma)\\), then \\(\\log X\\) is normal. Its median is \\(e^\\mu\\), while its mean is \\(e^{\\mu+\\sigma^2/2}\\). Therefore the median-to-mean ratio is below 1 whenever \\(\\sigma>0\\).",
          "Intuition: the right tail contains rare but very large values, pulling the mean upward while the median stays at the central rank."
        ],
        math: "\\[\\operatorname{Median}(X)=e^\\mu, \\qquad \\frac{\\operatorname{Median}(X)}{E[X]}=e^{-\\sigma^2/2}.\\]"
      }
    ]
  },
  {
    id: "transforms",
    part: "Part 1",
    week: "W1",
    title: "Data Transformation",
    short: "Min-max scaling, z-scores, log transforms, and why transformations affect downstream models.",
    tags: ["standardization", "normalization", "z-score", "log transform", "k-means"],
    sources: [SOURCES.slides, SOURCES.rcode, SOURCES.datasets],
    sections: [
      {
        heading: "Why scaling matters",
        body: [
          "Many algorithms compare distances. If one variable has a much larger scale than another, it can dominate distance calculations. The R script demonstrates this with k-means clustering before and after standardization.",
          "Standardization changes a variable to mean 0 and standard deviation 1. Min-max scaling maps values to the interval from 0 to 1."
        ],
        math: "\\[Z=\\frac{X-\\bar X}{sd(X)}, \\qquad X_{minmax}=\\frac{X-\\min(X)}{\\max(X)-\\min(X)}.\\]",
        diagram: "scaling"
      },
      {
        heading: "Log transforms can reduce skew",
        body: [
          "For positive skewed variables such as mileage, a log transform compresses large values more than small values. This can make the distribution more symmetric and can reduce the number of boxplot outliers.",
          "The transform is not cosmetic: it changes distances, means, regression relationships, and outlier detection."
        ],
        diagram: "log-transform",
        traps: [
          "You cannot take logs of zero or negative values without a deliberate adjustment.",
          "After transforming, interpret results on the transformed scale unless you convert back carefully."
        ]
      },
      {
        heading: "Robustness warning",
        body: [
          "The slides note that both the mean and standard deviation are sensitive to outliers. Since z-scores depend on both, z-score standardization can itself be affected by outliers."
        ]
      }
    ]
  },
  {
    id: "eda",
    part: "Part 1",
    week: "W1",
    title: "Exploratory Data Analysis",
    short: "How the churn example studies one variable, two variables, and conditional relationships.",
    tags: ["churn", "ggplot", "conditional probability", "categorical data"],
    sources: [SOURCES.rcode, SOURCES.datasets, SOURCES.slides],
    sections: [
      {
        heading: "EDA is structured curiosity",
        body: [
          "The churn example starts with one-variable summaries, then compares churn with the international plan, and then studies numerical variables such as evening charge. This is the CRISP-DM Data Understanding phase in action.",
          "Good EDA asks: what is the distribution, what are the categories, are there missing values, and do relationships change conditional on another variable?"
        ],
        diagram: "eda-flow"
      },
      {
        heading: "Conditional probability tables",
        body: [
          "The R script uses `table(churn$Churn, churn$Intl.Plan)` and `prop.table(mytable, 2)` to compare churn rates within each international-plan group. Column-wise conditioning matters: it answers 'given the plan status, what fraction churned?'"
        ],
        code: "mytable = table(churn$Churn, churn$Intl.Plan)\nprop.table(mytable, 2)"
      }
    ]
  }
];

const GUIDE_CHECKS = [
  {
    id: "gc-crisp-phases",
    topic: "ds-crisp",
    source: SOURCES.tut0s,
    prompt: "Without looking, list the six CRISP-DM phases and say which phase checks whether the model actually meets the business goal.",
    answer: "Business Understanding, Data Understanding, Data Preparation, Modeling, Evaluation, Deployment. Evaluation checks model quality against the business/data-science success criteria before deployment."
  },
  {
    id: "gc-crisp-ethics",
    topic: "ds-crisp",
    source: SOURCES.tut0s,
    prompt: "Why can a predictive hiring model be accurate and still ethically dangerous?",
    answer: "The algorithm searches historical patterns for prediction, not fairness. If variables encode or proxy unfair discrimination, accuracy can reproduce unfair decisions. The Tutorial 0 mitigation is to restrict/audit variables used by the model."
  },
  {
    id: "gc-missing-na",
    topic: "missing",
    source: SOURCES.rcode,
    prompt: "In R, why might `sum(is.na(Data))` miss values that look missing in the raw file?",
    answer: "`is.na` only counts values R recognizes as missing. Strings such as `'na'` or `'N/A'` are ordinary text unless declared with `na.strings` or converted later."
  },
  {
    id: "gc-missing-variance",
    topic: "missing",
    source: SOURCES.tut1q,
    prompt: "Explain in words why deleting randomly missing observations can leave the sample mean unbiased but increase uncertainty.",
    answer: "Linearity keeps the expected mean equal to \\(\\mu\\) when the remaining observations are still representative. But fewer independent observations are averaged, so the variance of the mean is larger: \\(\\sigma^2/n\\) increases when \\(n\\) decreases."
  },
  {
    id: "gc-outlier-leverage",
    topic: "outliers",
    source: SOURCES.rcode,
    prompt: "What is the difference between a y-outlier and a high-leverage point in regression?",
    answer: "A y-outlier has a large vertical residual from the fitted line. A high-leverage point is far in the x-direction and can rotate or strongly influence the fitted line, even if its residual is not huge."
  },
  {
    id: "gc-outlier-boxplot",
    topic: "outliers",
    source: SOURCES.slides,
    prompt: "What are the boxplot outlier fences, and why should they not be treated as automatic deletion rules?",
    answer: "The fences are \\(Q_1-1.5IQR\\) and \\(Q_3+1.5IQR\\). Points outside are unusual under this rule of thumb, but they may be valid rare observations, scientifically meaningful cases, or signs that the scale/model should be reconsidered."
  },
  {
    id: "gc-summary-mean-median",
    topic: "summaries",
    source: SOURCES.slides,
    prompt: "When would you prefer the median over the mean as the headline summary?",
    answer: "Prefer the median when the distribution is skewed or has strong outliers, because the median is based on order and is much less affected by extreme values than the mean."
  },
  {
    id: "gc-summary-iqr",
    topic: "summaries",
    source: SOURCES.tut2q,
    prompt: "Why is \\(IQR\\approx1.35\\sigma\\) for normal data?",
    answer: "For \\(X\\sim N(\\mu,\\sigma^2)\\), \\(Q_3\\approx\\mu+0.674\\sigma\\) and \\(Q_1\\approx\\mu-0.674\\sigma\\). Subtracting gives \\(IQR\\approx1.348\\sigma\\), rounded to \\(1.35\\sigma\\)."
  },
  {
    id: "gc-transform-scale",
    topic: "transforms",
    source: SOURCES.rcode,
    prompt: "Why can k-means or another distance-based method change after standardizing variables?",
    answer: "Distance is scale-dependent. Before standardization, a large-scale variable can dominate distances. After z-scores or min-max scaling, variables contribute on comparable scales, so clusters or nearest-neighbor relationships can change."
  },
  {
    id: "gc-transform-log",
    topic: "transforms",
    source: SOURCES.rcode,
    prompt: "What does a log transform do to positive right-skewed data, and what is the domain trap?",
    answer: "A log transform compresses large positive values more than small ones, often reducing right skew and boxplot outliers. The domain trap is that a plain log requires positive values; zero or negative values need explicit handling."
  },
  {
    id: "gc-eda-proptable",
    topic: "eda",
    source: SOURCES.rcode,
    prompt: "What does `prop.table(mytable, 2)` mean in the churn example?",
    answer: "It computes column-wise proportions. For `table(churn$Churn, churn$Intl.Plan)`, it answers: within each international-plan group, what fraction did or did not churn?"
  },
  {
    id: "gc-eda-causality",
    topic: "eda",
    source: SOURCES.slides,
    prompt: "Why should EDA findings such as a churn-rate difference not be written as causal claims?",
    answer: "EDA reveals distributions, associations, and group differences. Without a causal design or assumptions, a difference such as higher churn among one group does not prove that group membership caused churn."
  }
];

const QUESTIONS = [
  {
    id: "t0q1",
    topic: "ds-crisp",
    topicName: "Data Science and CRISP-DM",
    source: "Tutorial 0 Questions, Q1",
    difficulty: "easy",
    type: "long",
    solutionStatus: "official",
    text: "A company is using predictive analytics to optimize its hiring process. By analyzing large amounts of data, they have developed an algorithm that predicts the success of job applicants based on various factors.\n(a) Which ethical concern is associated with this approach?\n(b) How can the company avoid this issue, without abandoning the predictive model?",
    officialSolution: "Question a: Unfair discrimination might be an issue here if there is no control on the variables that can be used. Indeed, the algorithm will search for patterns in the data, without taking into account that sometimes it will discriminate in an unfair way.\nQuestion b: The company can restrict the variables that can be used to distinguish between applicants.",
    explanation: "The algorithm optimizes prediction, not fairness. If historical data contain bias, or if variables proxy for protected traits, the model can reproduce unfair discrimination. Restricting/auditing variables keeps the predictive model but narrows what it is allowed to use."
  },
  {
    id: "t0q2",
    topic: "ds-crisp",
    topicName: "Data Science and CRISP-DM",
    source: "Tutorial 0 Questions, Q2",
    difficulty: "medium",
    type: "long",
    solutionStatus: "official",
    text: "Consider an investment fund that only takes positions in the S&P 500 stock market index. The fund can either invest all the available money in the stock market index or split the money between the stock market index and a cash position (i.e. keeping part of the available funds in a money market account). Provide pros and cons of using a 100% data-driven decision making model (i.e. no human intervention) to determine the optimal strategy of the fund.",
    officialSolution: "• Pro: A predictive model can learn new and surprising patterns. Even if the gain we obtain with these models is small, executing this model on a large scale can result in large profits.\n\n• Con: Unexpected changes (i.e. a pandemic) cannot be incorporated directly into the model. Indeed, the model can only use information that already happened in the past. Human intervention in the model can help to avoid such problems.",
    explanation: "This is the Type 2 data-driven-decision argument: a small predictive edge can matter at scale. The weakness is distribution shift: when the future differs sharply from the historical training data, human oversight can recognize context the model has never seen."
  },
  {
    id: "t0q3",
    topic: "ds-crisp",
    topicName: "Data Science and CRISP-DM",
    source: "Tutorial 0 Questions, Q3",
    difficulty: "easy",
    type: "short",
    solutionStatus: "official",
    text: "A retail company wants to increase its sales by predicting which customers are most likely to respond to a marketing campaign. The data science team has collected a large dataset containing customer demographics, purchase history, and previous marketing campaign responses. They are now tasked with building a predictive model to identify the target customers for the upcoming campaign.\n(a) Identify and describe the specific phase of the CRISP-DM framework that the data science team should focus on to ensure the dataset is properly cleaned, transformed, and prepared for modeling.\n(b) Give two specific tasks the data science team would need to perform during this phase. Explain why each task is crucial for the success of the predictive model.",
    officialSolution: "Question a: Data Preparation phase.\nQuestion b:\n\n• Handling Missing Values. Missing values can skew the analysis and model performance. Data Cleaning:\n\n• Convert categorical data (e.g., customer gender, product categories) into numerical formats. Importance: Transforming data into the appropriate format allows the model to process and learn from the data effectively, improving model accuracy. Feature Engineering:\n\n• Identify and select the most relevant features from the dataset. Importance: Reducing the number of features helps in simplifying the model, reducing overfitting, and improving computational efficiency.\n\n• Outlier Detection and Handling. Importance: Outliers can distort the training process and negatively impact model performance.",
    sourceNote: "Source audit: the official solution gives several acceptable examples even though the question asks for two tasks; the labels 'Data Cleaning' and 'Feature Engineering' are formatted awkwardly in the PDF.",
    explanation: "The official answer lists more than two possible tasks. In an exam, pick two and explain the model consequence. For example: handling missing values prevents invalid calculations/bias, and encoding categorical variables lets a numerical model use non-numeric categories."
  },
  {
    id: "t0q4",
    topic: "summaries",
    topicName: "Summarizing a Data Set",
    source: "Tutorial 0 Questions, Q4",
    difficulty: "easy",
    type: "short",
    solutionStatus: "official",
    text: "Consider the table summarizing different studies. Classify each variable as qualitative (qual) / quantitative (quant). Indicate also if it is a discrete or a continuous variable.\n1 Company size: Number of employees at 1 January 2018\n2 Company size: Gross sales (thousands of euro) in 2018\n3 Company age: Year of first registration\n4 Adult gender: Man/Women\n5 Adult height: Number of cm\n6 Adult height: Small / middle / large\n7 Adult colour of eyes: Green / blue / brown\n8 Traffic accident seriousness: Number of deaths\n9 Throw of a die number of eyes: Odd/even\n10 Sample of polluted water degree of pollution: Boiling temperature (\u00b0C)",
    questionHtml: `<p>Consider the following table summarizing different studies.</p>
      <p>Classify each variable as qualitative (qual) / quantitative (quant). Indicator also if it is a discrete or a continuous variable.</p>
      <div class="source-table-wrap">
        <table class="source-table">
          <thead><tr><th>Study</th><th>Element</th><th>Characteristic</th><th>Variable</th></tr></thead>
          <tbody>
            <tr><td>1</td><td>Company</td><td>Size</td><td>Number of employees at 1 January 2018</td></tr>
            <tr><td>2</td><td>Company</td><td>Size</td><td>Gross sales (thousands of euro) in 2018</td></tr>
            <tr><td>3</td><td>Company</td><td>Age</td><td>Year of first registration</td></tr>
            <tr><td>4</td><td>Adult</td><td>Gender</td><td>Man/Women</td></tr>
            <tr><td>5</td><td>Adult</td><td>Height</td><td>Number of cm</td></tr>
            <tr><td>6</td><td>Adult</td><td>Height</td><td>Small / middle / large</td></tr>
            <tr><td>7</td><td>Adult</td><td>Colour of eyes</td><td>Green / blue / brown</td></tr>
            <tr><td>8</td><td>Traffic accident</td><td>Seriousness</td><td>Number of deaths</td></tr>
            <tr><td>9</td><td>Throw of a die</td><td>Number of eyes</td><td>Odd/even</td></tr>
            <tr><td>10</td><td>Sample of polluted water</td><td>Degree of pollution</td><td>Boiling temperature (&deg;C)</td></tr>
          </tbody>
        </table>
      </div>`,
    officialSolution: "1. Quant. Discrete.\n2. Quant. Continuous.\n3. Quant. Discrete.\n4. Qual.\n5. Quant. Continuous.\n6. Qual.\n7. Qual.\n8. Quant. Discrete.\n9. Qual.\n10. Quant. Continuous.",
    explanation: "Counts are quantitative discrete. Measurements such as sales, height, and boiling temperature are treated as quantitative continuous. Labels or categories are qualitative, even when derived from an underlying number."
  },
  {
    id: "t0q5",
    topic: "ds-crisp",
    topicName: "Data Science and CRISP-DM",
    source: "Tutorial 0 Questions, Q5",
    difficulty: "medium",
    type: "long",
    solutionStatus: "official",
    text: "A company observes that their profit on a monthly basis is stagnated, even if they increase their budget and invest more in the different traditional advertising campaigns they used in the past. Therefore, they want to explore if online campaigning can help to increase their profits. Therefore, they ask their data science team to propose a solution. The data science team identifies the following tasks:\n• Build a model to predict if someone is a potential client.\n• Determine if a prediction accuracy of at least 75% is a reasonable choice.\n• Use a neural network to build a predictive model.\n• Investigate the number of missing values.\n• Determine how to handle missing values in the neural network model.\n• Run a first analysis on the data to better understand the different variables.\n• Test the accuracy of the neural network in different situations.\n• Determine adequate metrics to assess the quality of a predictive model.\n• Discuss with the online team what type of data can be gathered from each customer.\n(a) Determine for each of the tasks to what step of the CRISP-DM framework it belongs.\n(b) The data science team starts the project and goes step-by-step through the different CRISP-DM phases. However, after a while, it finds it is doing a first exploratory analysis on the different variables for a second time. Explain what could be the reason?",
    officialSolution: "(a) We link each task to a phase of the CRISP-DM framework.\n\nTask                                                                    CRISP-DM phase\nBuild a model to predict if someone is a potential client          Modeling\na prediction accuracy of at least 75%                              Business Understanding\nUse a neural network to build a predictive model                   Modeling\nInvestigate the number of missing values                           Data Understanding\nDetermine how to handle missing values in the neural network model Data Preparation\nRun a first analysis on the data to better understand variables    Data Understanding\nTest the accuracy of the neural network in different situations    Evaluation\nDetermine adequate metrics to assess model quality                 Evaluation\nDiscuss with the online team what data can be gathered             Business Understanding\n\n(b) The CRISP-DM process is iterative, not strictly linear. Therefore, it can happen that one has to go back to a previous step. The analysis if the variables happens in the Data Understanding phase. Therefore, it can happen that one has to go from the Data Preparation phase back to the Data Understanding phase.\n\n• Additional data becomes available (e.g. from the online team) which has to be incorporated.\n• After the Data Preparation phase, outliers and/or missing values are handled in a certain way that might distort the data. Therefore, one has to go back and inspect the data again.",
    officialSolutionHtml: `<p>(a) We link each task to a phase of the CRISP-DM framework.</p>
      <div class="source-table-wrap">
        <table class="source-table">
          <thead><tr><th>Task</th><th>CRISP-DM phase</th></tr></thead>
          <tbody>
            <tr><td>Build a model to predict if someone is a potential client</td><td>Modeling</td></tr>
            <tr><td>a prediction accuracy of at least 75%</td><td>Business Understanding</td></tr>
            <tr><td>Use a neural network to build a predictive model</td><td>Modeling</td></tr>
            <tr><td>Investigate the number of missing values</td><td>Data Understanding</td></tr>
            <tr><td>Determine how to handle missing values in the neural network model</td><td>Data Preparation</td></tr>
            <tr><td>Run a first analysis on the data to better understand variables</td><td>Data Understanding</td></tr>
            <tr><td>Test the accuracy of the neural network in different situations</td><td>Evaluation</td></tr>
            <tr><td>Determine adequate metrics to assess model quality</td><td>Evaluation</td></tr>
            <tr><td>Discuss with the online team what data can be gathered</td><td>Business Understanding</td></tr>
          </tbody>
        </table>
      </div>
      <p>(b) The CRISP-DM process is iterative, not strictly linear. Therefore, it can happen that one has to go back to a previous step. The analysis if the variables happens in the Data Understanding phase. Therefore, it can happen that one has to go from the Data Preparation phase back to the Data Understanding phase.</p>
      <p>&bull; Additional data becomes available (e.g. from the online team) which has to be incorporated.<br>
      &bull; After the Data Preparation phase, outliers and/or missing values are handled in a certain way that might distort the data. Therefore, one has to go back and inspect the data again.</p>`,
    explanation: "The classification trick is to ask what the team is deciding. Goals and success criteria are Business Understanding; inspecting raw data is Data Understanding; changing the data for a model is Data Preparation; fitting a model is Modeling; judging it against metrics/business reality is Evaluation."
  },
  {
    id: "t1q1",
    topic: "missing",
    topicName: "Missing Values",
    source: "Tutorial 1 Questions, Q1",
    difficulty: "medium",
    type: "proof",
    solutionStatus: "official",
    text: "Consider a data set X1, X2, ..., X30 with 30 observations. Assume that each observation can be missing and assume that the probability that an observation is missing is 0.05. Moreover, missing values are spread evenly through the data and occur independently of each other. Denote by Di the random variable which takes value 1 if observation i is missing and 0 otherwise. Show that the probability that the data set of 30 observations contains at least one missing value is close to 80%.",
    officialSolution: "The data set consists of 30 variables: X1, ..., X30. Let Di denote a dummy variable that takes the value 1 if Xi is missing\nDi = 1 if Xi is missing, 0 otherwise.\nNow, Di has a Bernoulli distribution with P(Di = 1) = 0.05. If we assume that the missingness is independent across the variables, i.e. Di are i.i.d., we obtain the probability of at least one variable is missing is\nP(D1 + ... + D30 >= 1) = 1 - P(D1 = ... = D30 = 0) = 1 - 0.95^30 = 0.7854\nwhich is close to the 80% mentioned.",
    officialSolutionHtml: `<p>The data set consists of 30 variables: \\(X_1, \\ldots, X_{30}\\). Let \\(D_i\\) denote a dummy variable that takes the value 1 if \\(X_i\\) is missing</p>
      <div class="math-block">\\[D_i = \\begin{cases}1 & X_i \\text{ is missing,}\\\\0 & \\text{otherwise.}\\end{cases}\\]</div>
      <p>Now, \\(D_i\\) has a Bernoulli distribution with \\(P(D_i = 1) = 0.05\\). If we assume that the missingness is independent across the variables, i.e. \\(D_i\\) are i.i.d., we obtain the probability of at least one variable is missing is</p>
      <div class="math-block">\\[P(D_1+\\cdots+D_{30}\\ge 1)=1-P(D_1=\\cdots=D_{30}=0)=1-0.95^{30}=0.7854\\]</div>
      <p>which is close to the 80% mentioned.</p>`,
    explanation: "The complement is the clean route: instead of adding many cases with one or more missing values, compute 1 minus the probability of no missing values. Independence lets you multiply the 30 non-missing probabilities."
  },
  {
    id: "t1q2",
    topic: "missing",
    topicName: "Missing Values",
    source: "Tutorial 1 Questions, Q2",
    difficulty: "hard",
    type: "proof",
    solutionStatus: "official",
    text: "Consider n1 + m independent and identical random variables X1, ..., Xn1 and Xn1+1, ..., Xn1+m. Denote by S1 the random mean over the first n1 random variables whereas S2 denotes the random mean over all random variables. Assume E[X1] = mu and Var[X1] = sigma^2. (a) Show that E[S1] = E[S2] = mu. (b) Show that Var[S1] / Var[S2] = 1 + m/n1. (c) Interpret the result if the last m observations have to be deleted because of missing values.",
    officialSolution: "Question a: We start with determining the expected value of S1:\nE[S1] = E[1/n1 sum_{i=1}^{n1} Xi] = 1/n1 sum_{i=1}^{n1} E[Xi] = mu.\nThe derivation for E[S2] = mu is similar.\nQuestion b: We can determine the variance of S1 as follows:\nVar[S1] = Var[1/n1 sum_{i=1}^{n1} Xi] = 1/n1^2 Var[sum_{i=1}^{n1} Xi].\nIf we use the independence between the random variables, we find Var[S1] = n1 sigma^2 / n1^2 = sigma^2 / n1. Similarly, we find for S2 that Var[S2] = sigma^2 / (n1 + m), which then results in Var[S1]/Var[S2] = 1 + m/n1.\nSince m, n1 > 0, we find that the variance of S1 is always larger than the variance of S2 because the sum S2 aggregates more elements than the sum S1.\nQuestion c: Assume that Xi is the i-th observation in our data set and we want to use the data to estimate the mean. Then S2 denotes the sample mean. Assume also that we can repeat our experiment and construct a new data set. We can then again estimate the mean, and this will in general give a different estimate. The result in Question a states that in both cases, you will obtain a value 'close' to mu. The fluctuations around this mean are quantified by the variance. Question b then states that the estimator for the mean is less accurate if there is less data. For example, if there are missing values in the data set, then removing the missing values will reduce the size of the data set and therefore reduce the accuracy of the estimation of the mean.",
    officialSolutionHtml: `<p><strong>Question a:</strong> We start with determining the expected value of \\(S_1\\):</p>
      <div class="math-block">\\[\\begin{aligned}E[S_1] &= E\\left[\\frac{1}{n_1}\\sum_{i=1}^{n_1}X_i\\right] \\\\ &= \\frac{1}{n_1}\\sum_{i=1}^{n_1}E[X_i] \\\\ &= \\mu.\\end{aligned}\\]</div>
      <p>The derivation for \\(E[S_2]=\\mu\\) is similar.</p>
      <p><strong>Question b:</strong> We can determine the variance of \\(S_1\\) as follows:</p>
      <div class="math-block">\\[\\begin{aligned}\\operatorname{Var}[S_1] &= \\operatorname{Var}\\left[\\frac{1}{n_1}\\sum_{i=1}^{n_1}X_i\\right] \\\\ &= \\frac{1}{n_1^2}\\operatorname{Var}\\left[\\sum_{i=1}^{n_1}X_i\\right].\\end{aligned}\\]</div>
      <p>If we use the independence between the random variables, we find</p>
      <div class="math-block">\\[\\operatorname{Var}[S_1]=\\frac{n_1\\sigma^2}{n_1^2}=\\frac{\\sigma^2}{n_1}.\\]</div>
      <p>Similarly, we find for \\(S_2\\) that</p>
      <div class="math-block">\\[\\operatorname{Var}[S_2]=\\frac{\\sigma^2}{n_1+m},\\]</div>
      <p>which then results in</p>
      <div class="math-block">\\[\\frac{\\operatorname{Var}[S_1]}{\\operatorname{Var}[S_2]}=1+\\frac{m}{n_1}.\\]</div>
      <p>Since \\(m,n_1>0\\), we find that the variance of \\(S_1\\) is always larger than the variance of \\(S_2\\) because the sum \\(S_2\\) aggregates more elements than the sum \\(S_1\\).</p>
      <p><strong>Question c:</strong> Assume that \\(X_i\\) is the \\(i\\)-th observation in our data set and we want to use the data to estimate the mean. Then \\(S_2\\) denotes the sample mean. Assume also that we can repeat our experiment and construct a new data set. We can then again estimate the mean, and this will in general give a different estimate. The result in Question a states that in both cases, you will obtain a value 'close' to \\(\\mu\\). The fluctuations around this mean are quantified by the variance. Question b then states that the estimator for the mean is less accurate if there is less data. For example, if there are missing values in the data set, then removing the missing values will reduce the size of the data set and therefore reduce the accuracy of the estimation of the mean.</p>`,
    explanation: "Linearity of expectation gives the same expected mean whether you use n1 or n1+m observations. The important exam interpretation is variance: deleting observations does not create bias under these assumptions, but it makes the estimate noisier."
  },
  {
    id: "t1q3",
    topic: "missing",
    topicName: "Missing Values",
    source: "Tutorial 1 Questions, Q3",
    difficulty: "medium",
    type: "short",
    solutionStatus: "official",
    text: "Consider the following R code.\n> Data=data.frame(c(100,NA,90,75,110,132), c(NA,1,5,0.5,NA, \"na\"))\n> names(Data)=c(\"Variable 1\", \"Variable 2\")\n> sum(is.na(Data))\nWhat is the output after running this code?",
    questionHtml: `<p>Consider the following R code.</p>
      <pre class="code">&gt; Data=data.frame(c(100,NA,90,75,110,132), c(NA,1,5,0.5,NA, "na"))
&gt; names(Data)=c("Variable 1", "Variable 2")
&gt; sum(is.na(Data))</pre>
      <p>What is the output after running this code?</p>`,
    officialSolution: "The output is 3.\nNote that the \"na\" is not recognised by R as a missing value.",
    explanation: "R only counts actual `NA` values here. The first column has one actual missing value, and the second column has two actual missing values; the string \"na\" is ordinary text."
  },
  {
    id: "t1q4",
    topic: "missing",
    topicName: "Missing Values",
    source: "Tutorial 1 Questions, Q4",
    difficulty: "medium",
    type: "short",
    solutionStatus: "official",
    text: "Consider the following R code which is used to handle missing values, where Data is a vector with observations.\n>sum(is.na(Data))\n[1] 8\n> Data.New=replace(Data,which(is.na(Data)), mean(Data))\n(a) Explain how missing values are handled with this code?\n(b) If you execute mean(Data.New), what will be the result? Explain.\n(c) How can we correct the code such that missing values are handled correctly?",
    sourceNote: "Source audit: Tutorial 1 Questions asks about mean(Data.New), while Tutorial 1 Solutions states mean(Data). The official solution wording is preserved; the result is NA either way because the replacement mean is computed from Data while Data still contains NA.",
    questionHtml: `<p>Consider the following R code which is used to handle missing values, where <code>Data</code> is a vector with observations.</p>
      <pre class="code">&gt;sum(is.na(Data))
[1] 8
&gt; Data.New=replace(Data,which(is.na(Data)), mean(Data))</pre>
      <p>(a) Explain how missing values are handled with this code?</p>
      <p>(b) If you execute <code>mean(Data.New)</code>, what will be the result? Explain.</p>
      <p>(c) How can we correct the code such that missing values are handled correctly?</p>`,
    officialSolution: "Question a: Missing values are replaced by the mean value.\nQuestion b: The result will be NA. The reason is that we replace missing values in the data set Data by mean(Data). However, since the vector Data contains missing values, mean(Data) will give back NA.\nQuestion c: We have to take the mean over the elements in Data which do not have missing values. The correct code is as follows:\nreplace(Data,which(is.na(Data)), mean(Data[- which(is.na(Data))]))",
    officialSolutionHtml: `<p><strong>Question a:</strong> Missing values are replaced by the mean value.</p>
      <p><strong>Question b:</strong> The result will be <code>NA</code>. The reason is that we replace missing values in the data set <code>Data</code> by <code>mean(Data)</code>. However, since the vector <code>Data</code> contains missing values, <code>mean(Data)</code> will give back <code>NA</code>.</p>
      <p><strong>Question c:</strong> We have to take the mean over the elements in <code>Data</code> which do not have missing values. The correct code is as follows:</p>
      <pre class="code">replace(Data,which(is.na(Data)), mean(Data[- which(is.na(Data))]))</pre>`,
    explanation: "The trap is that `mean(Data)` is computed before replacement, and because `Data` still contains missing values, that mean is `NA`. So the attempted imputation replaces each missing value with `NA` again."
  },
  {
    id: "t1q5",
    topic: "outliers",
    topicName: "Outliers and High-Leverage Points",
    source: "Tutorial 1 Questions, Q5",
    difficulty: "hard",
    type: "code",
    solutionStatus: "official",
    text: "Consider the following R code which allows you to extract data from the S&P 500 of the last year.\ninstall.packages(\"quantmod\")\nlibrary(quantmod)\n# Get S&P 500 data (last 1 year)\ngetSymbols(\"^GSPC\", from=Sys.Date()-365, to=Sys.Date())\nprices = Cl(GSPC)\n# Plot\nplot(prices, main=\"Daily prices S&P 500\")\nThe daily log returns can be determined by using the daily price levels St of the S&P 500 as follows: Rt = log(St/St-1).\n(a) Determine the log returns using the vector with price levels which is stored in prices.\n(b) Create a plot that shows the boxplot and a histogram of the returns.\n(c) Remove the outliers of the data set. You can start with the following code.\nboxplot(returns)\nbp <- boxplot(returns, plot = FALSE)\noutliers <- bp$out\nAn interesting function is the in function, which you can test with the following code:\nx=c(0,2,4,20)\ny=seq(1:10)\nx%in% y\n(d) Compare the histogram of the data set without outliers with a normal distribution. You can use the mean and sd to determine the mean and the standard deviation of a data set.",
    questionHtml: `<p>Consider the following R code which allows you to extract data from the S&amp;P 500 of the last year.</p>
      <pre class="code">install.packages("quantmod")
library(quantmod)
# Get S&amp;P 500 data (last 1 year)
getSymbols("^GSPC", from=Sys.Date()-365, to=Sys.Date())
prices = Cl(GSPC)
# Plot
plot(prices, main="Daily prices S&amp;P 500")</pre>
      <p>The daily log returns can be determined by using the daily price levels \\(S_t\\) of the S&amp;P 500 as follows:</p>
      <div class="math-block">\\[R_t = \\log\\frac{S_t}{S_{t-1}}.\\]</div>
      <p>(a) Determine the log returns using the vector with price levels which is stored in <code>prices</code>.</p>
      <p>(b) Create a plot that shows the boxplot and a histogram of the returns.</p>
      <p>(c) Remove the outliers of the data set. You can start with the following code.</p>
      <pre class="code">boxplot(returns)
bp &lt;- boxplot(returns, plot = FALSE)
outliers &lt;- bp$out</pre>
      <p>An interesting function is the <code>in</code> function, which you can test with the following code:</p>
      <pre class="code">x=c(0,2,4,20)
y=seq(1:10)
x%in% y</pre>
      <p>(d) Compare the histogram of the data set without outliers with a normal distribution. You can use the <code>mean</code> and <code>sd</code> to determine the mean and the standard deviation of a data set.</p>`,
    officialSolution: "rm(list=ls())\ninstall.packages(\"quantmod\")\nlibrary(quantmod)\n# Get S&P 500 data (last 1 year)\ngetSymbols(\"^GSPC\", from=Sys.Date()-365, to=Sys.Date())\n# Extract closing prices\nprices <- Cl(GSPC)\n# Plot\nplot(prices, main=\"Daily prices S&P 500\")\n### Question a:\n# Compute daily log returns\nreturns <- diff(log(prices))\n# We cannot determine the logreturn of the first day\nsum(is.na(returns))\nwhich(is.na(returns))\n# Remove NA\nreturns <- na.omit(returns)\n# View first rows\nhead(returns)\n# Plot\nplot(returns, main=\"Daily Log Returns S&P 500 (Last Year)\")\n### Question b\npar(mfrow=c(1,2))\nhist(returns,50)\nboxplot(returns)\n### Question c\nbp <- boxplot(returns, plot = FALSE)\noutliers <- bp$out\nreturns=returns[-which(outliers %in% returns)]\n### Question d\nhist(returns, breaks = 50, freq = FALSE)\ncurve(dnorm(x, mean=mean(returns), sd=sd(returns)),\ncol=\"red\", lwd=2, add=TRUE)",
    officialSolutionHtml: `<pre class="code">rm(list=ls())
install.packages("quantmod")
library(quantmod)
# Get S&amp;P 500 data (last 1 year)
getSymbols("^GSPC", from=Sys.Date()-365, to=Sys.Date())
# Extract closing prices
prices &lt;- Cl(GSPC)
# Plot
plot(prices, main="Daily prices S&amp;P 500")
### Question a:
# Compute daily log returns
returns &lt;- diff(log(prices))
# We cannot determine the logreturn of the first day
sum(is.na(returns))
which(is.na(returns))
# Remove NA
returns &lt;- na.omit(returns)
# View first rows
head(returns)
# Plot
plot(returns, main="Daily Log Returns S&amp;P 500 (Last Year)")
### Question b
par(mfrow=c(1,2))
hist(returns,50)
boxplot(returns)
### Question c
bp &lt;- boxplot(returns, plot = FALSE)
outliers &lt;- bp$out
returns=returns[-which(outliers %in% returns)]
### Question d
hist(returns, breaks = 50, freq = FALSE)
curve(dnorm(x, mean=mean(returns), sd=sd(returns)),
col="red", lwd=2, add=TRUE)</pre>`,
    explanation: "The official code uses `diff(log(prices))`, which computes consecutive log-price differences. It then omits the first unavailable return, plots a histogram and boxplot, removes values identified by the boxplot rule, and overlays a normal density with the cleaned returns' mean and standard deviation."
  },
  {
    id: "t2q1",
    topic: "summaries",
    topicName: "Summarizing a Data Set",
    source: "Tutorial 2 Exercises, Q1",
    difficulty: "medium",
    type: "short",
    solutionStatus: "official",
    text: "Consider observations for variables X1, X2, X3: X1 = {80,75,91,110,58,40,66}, X2 = {80,75,91,670,58,40,66}, X3 = {50,43,56,90,210,75,450}. (a) Determine for each variable the mean and median. What do you observe? (b) Indicate and explain which measure (mean, median, or both) is preferred for each variable.",
    questionHtml: `<p>Consider the following observations for different data variables.</p>
      <div class="source-table-wrap">
        <div class="source-caption">Table 1: Data set with 6 observations and 3 variables.</div>
        <table class="source-table compact">
          <thead><tr><th>Observation</th><th>X1</th><th>X2</th><th>X3</th></tr></thead>
          <tbody>
            <tr><td>1</td><td>80</td><td>80</td><td>50</td></tr>
            <tr><td>2</td><td>75</td><td>75</td><td>43</td></tr>
            <tr><td>3</td><td>91</td><td>91</td><td>56</td></tr>
            <tr><td>4</td><td>110</td><td>670</td><td>90</td></tr>
            <tr><td>5</td><td>58</td><td>58</td><td>210</td></tr>
            <tr><td>6</td><td>40</td><td>40</td><td>75</td></tr>
            <tr><td>7</td><td>66</td><td>66</td><td>450</td></tr>
          </tbody>
        </table>
      </div>
      <p>(a) Determine for each variable the mean and the median. What do you observe?</p>
      <p>(b) Indicate and explain which measure (the mean, the median or both), is preferred for each variable.</p>`,
    sourceNote: "Source audit: Tutorial 2 labels Table 1 as having 6 observations, but the table lists observations 1 through 7. The official solution uses all 7 listed rows.",
    officialSolution: "Question a: You should find the following results for the mean.\nMean[X1] = 74.2857\nMean[X2] = 154.2857\nMean[X3] = 139.1428\nFor the median, we find:\nMedian[Xi] = 75, for i = 1, 2, 3.\nThe median is the same for each variable, whereas the mean differs substantially.\nQuestion b: For the first variable X1, both the mean and the median are close to each other. The data is also close to symmetric. The variable X2 is the same as X1, except for observation 4, which seems to be an outlier. Since the mean is sensitive to the outliers, the median is a better representation for the center of the data. The third data set is skewed. The observations which are smaller than the median are closer to the median than the observations which are larger than the median. In this case, the median is not an adequate measure, since it does not take into account the heavier right tail.",
    officialSolutionHtml: `<p><strong>Question a:</strong> You should find the following results for the mean.</p>
      <div class="math-block">\\[\\begin{aligned}\\operatorname{Mean}[X_1] &= 74.2857\\\\ \\operatorname{Mean}[X_2] &= 154.2857\\\\ \\operatorname{Mean}[X_3] &= 139.1428\\end{aligned}\\]</div>
      <p>For the median, we find:</p>
      <div class="math-block">\\[\\operatorname{Median}[X_i]=75,\\quad \\text{for } i=1,2,3.\\]</div>
      <p>The median is the same for each variable, whereas the mean differs substantially.</p>
      <p><strong>Question b:</strong> For the first variable \\(X_1\\), both the mean and the median are close to each other. The data is also close to symmetric. The variable \\(X_2\\) is the same as \\(X_1\\), except for observation 4, which seems to be an outlier. Since the mean is sensitive to the outliers, the median is a better representation for the center of the data. The third data set is skewed. The observations which are smaller than the median are closer to the median than the observations which are larger than the median. In this case, the median is not an adequate measure, since it does not take into account the heavier right tail.</p>`,
    explanation: "The official means use all seven listed rows. X2 shows the classic outlier problem: one huge value makes the mean jump while the median stays at 75. X3 is different: the whole right tail is heavy, so the median alone can hide important large values."
  },
  {
    id: "t2q2",
    topic: "summaries",
    topicName: "Summarizing a Data Set",
    source: "Tutorial 2 Exercises, Q2",
    difficulty: "medium",
    type: "short",
    solutionStatus: "official",
    text: "For data {130, 89, 4, 234, 9, 143, 78, 22, 24, 100}: (a) Determine the IQR using the empirical distribution function. (b) Explore Excel percentile/quartile functions and determine the IQR. (c) Determine the formula Excel uses.",
    questionHtml: `<p>Consider the following data set.</p>
      <div class="source-table-wrap">
        <div class="source-caption">Table 2: Data set with one variable and 10 observations.</div>
        <table class="source-table compact">
          <thead><tr><th>Observation</th><th>Value</th></tr></thead>
          <tbody>
            <tr><td>1</td><td>130</td></tr>
            <tr><td>2</td><td>89</td></tr>
            <tr><td>3</td><td>4</td></tr>
            <tr><td>4</td><td>234</td></tr>
            <tr><td>5</td><td>9</td></tr>
            <tr><td>6</td><td>143</td></tr>
            <tr><td>7</td><td>78</td></tr>
            <tr><td>8</td><td>22</td></tr>
            <tr><td>9</td><td>24</td></tr>
            <tr><td>10</td><td>100</td></tr>
          </tbody>
        </table>
      </div>
      <p>(a) Determine the inter quartile range (IQR) of this data set using the empirical distribution function.</p>
      <p>(b) Explore the functions percentile and quartile in Excel. Determine the IQR of the data set using these Excel functions.</p>
      <p>(c) Determine the formula that Excel uses to determine the IQR.</p>`,
    officialSolution: "Question a: Using the empirical distribution function F-hat for these 10 observations, we find:\nF-hat(9) = 0.2 and F-hat(22) = 0.3.\nSince 0.25 is in between 0.2 and 0.3, we find that the 25% quantile is given by x0.25 = 22. Similarly, we have that F-hat(100) = 0.7 and F-hat(130) = 0.8, and therefore the 75% quantile is x0.75 = 130. The IQR is then given by IQR = 130 - 22 = 108.\nQuestion b: In Excel, the function percentile can be used to determine quantiles for a given probability level p. The quartile function can be used to determine a certain quart of the data. Note that, for example, the percentile function with p = 0.25 is the same as using the quartile function for the first quart (k = 1). Below, you find an overview of an Excel sheet where we used the percentile and the quartile functions. The IQR using Excel is then given by: IQR = 122.5 - 22.5 = 100.\nQuestion c: We find that the percentile function in Excel (denote this by f) of an ordered array x1 < x2 < ... < xn can be expressed as follows: f((i - 1)/(n - 1)) = xi, for i = 1, 2, ..., n. For values p which cannot be expressed as (i - 1)/(n - 1) for some i in {1, 2, ..., n}, we linear interpolate to obtain: f(p) = (1 - alpha)x_i + alpha x_{i+1} if (i - 1)/(n - 1) <= p <= i/(n - 1), where alpha = (n - 1)p - (i - 1). For example, we find that the first quartile (Q1) (which is the same as the 25% percentile) can be determined using Excel as follows: quartile(C4:C13, 1) = percentile(C4:C13, 0.25) = f(0.25) = 22.5.",
    officialSolutionHtml: `<p><strong>Question a:</strong> Using the empirical distribution function \\(\\hat F\\) for these 10 observations, we find:</p>
      <div class="math-block">\\[\\hat F(9)=0.2 \\quad \\text{and} \\quad \\hat F(22)=0.3.\\]</div>
      <p>Since 0.25 is in between 0.2 and 0.3, we find that the 25% quantile is given by</p>
      <div class="math-block">\\[x_{0.25}=22.\\]</div>
      <p>Similarly, we have that</p>
      <div class="math-block">\\[\\hat F(100)=0.7 \\quad \\text{and} \\quad \\hat F(130)=0.8,\\]</div>
      <p>and therefore the 75% quantile is</p>
      <div class="math-block">\\[x_{0.75}=130.\\]</div>
      <p>The IQR is then given by</p>
      <div class="math-block">\\[IQR=130-22=108.\\]</div>
      <p><strong>Question b:</strong> In Excel, the function <code>percentile</code> can be used to determine quantiles for a given probability level \\(p\\). The <code>quartile</code> function can be used to determine a certain quart of the data. Note that, for example, the percentile function with \\(p=0.25\\) is the same as using the quartile function for the first quart (\\(k=1\\)). Below, you find an overview of an Excel sheet where we used the <code>percentile</code> and the <code>quartile</code> functions. The IQR using Excel is then given by:</p>
      <div class="math-block">\\[IQR=122.5-22.5=100.\\]</div>
      <p><strong>Question c:</strong> We find that the percentile function in Excel (denote this by \\(f\\)) of an ordered array \\(x_1&lt;x_2&lt;\\cdots&lt;x_n\\) can be expressed as follows:</p>
      <div class="math-block">\\[f\\left(\\frac{i-1}{n-1}\\right)=x_i,\\quad \\text{for } i=1,2,\\ldots,n.\\]</div>
      <p>For values \\(p\\) which cannot be expressed as \\(\\frac{i-1}{n-1}\\) for some \\(i\\in\\{1,2,\\ldots,n\\}\\), we linear interpolate to obtain:</p>
      <div class="math-block">\\[f(p)=(1-\\alpha)x_i+\\alpha x_{i+1}\\quad \\text{if }\\frac{i-1}{n-1}\\le p\\le\\frac{i}{n-1},\\]</div>
      <p>where \\(\\alpha=(n-1)p-(i-1)\\). For example, we find that the first quartile (Q1) (which is the same as the 25% percentile) can be determined using Excel as follows:</p>
      <div class="math-block">\\[\\operatorname{quartile}(C4:C13,1)=\\operatorname{percentile}(C4:C13,0.25)=f(0.25)=22.5.\\]</div>`,
    explanation: "The course empirical-CDF rule picks observed values where the CDF first passes the target probability, giving IQR 108. Excel interpolates between ordered observations, so its percentile/quartile result is different: 100."
  },
  {
    id: "t2q3",
    topic: "summaries",
    topicName: "Summarizing a Data Set",
    source: "Tutorial 2 Exercises, Q3",
    difficulty: "medium",
    type: "proof",
    solutionStatus: "official",
    text: "Consider X ~ N(mu, sigma^2). Show the relation between IQR and standard deviation sigma: IQR ≈ 1.35 × sigma. You can use Phi^{-1}(0.75)=0.674.",
    officialSolution: "We can write the following\nIQR = F_X^{-1}(0.75) - F_X^{-1}(0.25) = (mu + sigma Phi^{-1}(0.75)) - (mu + sigma Phi^{-1}(0.25)) = sigma(Phi^{-1}(0.75) - Phi^{-1}(0.25)) approx 1.35 x sigma,\nwhere we used that Phi^{-1}(0.75) = 0.674 and therefore Phi^{-1}(0.25) = -Phi^{-1}(1 - 0.25) = -0.674.",
    officialSolutionHtml: `<p>We can write the following</p>
      <div class="math-block">\\[\\begin{aligned}IQR &= F_X^{-1}(0.75)-F_X^{-1}(0.25)\\\\ &= \\left(\\mu+\\sigma\\Phi^{-1}(0.75)\\right)-\\left(\\mu+\\sigma\\Phi^{-1}(0.25)\\right)\\\\ &= \\sigma\\left(\\Phi^{-1}(0.75)-\\Phi^{-1}(0.25)\\right)\\\\ &\\approx 1.35\\times\\sigma,\\end{aligned}\\]</div>
      <p>where we used that \\(\\Phi^{-1}(0.75)=0.674\\) and therefore</p>
      <div class="math-block">\\[\\Phi^{-1}(0.25)=-\\Phi^{-1}(1-0.25)=-0.674.\\]</div>`,
    explanation: "For a normal distribution, the middle 50% lies symmetrically between about -0.674 sigma and +0.674 sigma from the mean. The distance between those two quantiles is about 1.348 sigma."
  },
  {
    id: "t2q4",
    topic: "outliers",
    topicName: "Outliers and High-Leverage Points",
    source: "Tutorial 2 Exercises, Q4",
    difficulty: "hard",
    type: "proof",
    solutionStatus: "official",
    text: "Consider X ~ N(mu, sigma^2). What is the probability to observe an outlier if the boxplot definition is used?",
    sourceNote: "Source audit: the official solution's lower-tail display writes P[X > Q1 - 1.5 x IQR], but the surrounding text and standard boxplot rule imply P[X < Q1 - 1.5 x IQR]. The official wording is preserved.",
    officialSolution: "We find an outlier if either X > Q3 + 1.5 x IQR or if X < Q1 - 1.5 x IQR. The probability that X > Q3 + 1.5 x IQR can be determined as follows:\nP[X > Q3 + 1.5 x IQR] = P[X > mu + sigma Phi^{-1}(0.75) + 1.5 sigma(Phi^{-1}(0.75) - Phi^{-1}(0.25))] = P[(X - mu)/sigma > 2.5 x Phi^{-1}(0.75) - 1.5 x Phi^{-1}(0.25)] = P[Z > 2.697959], where Z is a standard normal random variables. Hence:\nP[X > Q3 + 1.5 x IQR] = 1 - Phi(2.697959) = 0.003488302.\nWe can use the same steps to show that P[X > Q1 - 1.5 x IQR] = P[Z < -2.697959] = 0.003488302, from which we find:\nP[X is an outlier] = 2 x 0.003488302 approx 0.6976603%.",
    officialSolutionHtml: `<p>We find an outlier if either \\(X&gt;Q3+1.5\\times IQR\\) or if \\(X&lt;Q1-1.5\\times IQR\\). The probability that \\(X&gt;Q3+1.5\\times IQR\\) can be determined as follows:</p>
      <div class="math-block">\\[\\begin{aligned}P[X&gt;Q3+1.5\\times IQR] &= P\\left[X&gt;\\mu+\\sigma\\Phi^{-1}(0.75)+1.5\\sigma\\left(\\Phi^{-1}(0.75)-\\Phi^{-1}(0.25)\\right)\\right]\\\\ &= P\\left[\\frac{X-\\mu}{\\sigma}&gt;2.5\\times\\Phi^{-1}(0.75)-1.5\\times\\Phi^{-1}(0.25)\\right]\\\\ &= P[Z&gt;2.697959],\\end{aligned}\\]</div>
      <p>where \\(Z\\) is a standard normal random variables. Hence:</p>
      <div class="math-block">\\[P[X&gt;Q3+1.5\\times IQR]=1-\\Phi(2.697959)=0.003488302.\\]</div>
      <p>We can use the same steps to show that</p>
      <div class="math-block">\\[P[X&gt;Q1-1.5\\times IQR]=P[Z&lt;-2.697959]=0.003488302,\\]</div>
      <p>from which we find:</p>
      <div class="math-block">\\[P[X\\text{ is an outlier}]=2\\times0.003488302\\approx0.6976603\\%.\\]</div>`,
    explanation: "Using the normal quartiles, the boxplot fences are about 2.698 standard deviations from the mean. A normal observation lands outside those fences with probability about 0.007, so around 0.7% of perfectly normal data will still be flagged."
  },
  {
    id: "t2q5",
    topic: "summaries",
    topicName: "Summarizing a Data Set",
    source: "Tutorial 2 Exercises, Q5",
    difficulty: "hard",
    type: "long",
    solutionStatus: "official",
    text: "A random variable X has a lognormal distribution, notation X ~ LN(mu, sigma), if log X has a normal distribution with mean mu and standard deviation sigma. For a lognormal distribution we have the following information: E[X]=e^(mu+1/2 sigma^2) and F_X^{-1}(p)=e^(mu+sigma Phi^{-1}(p)), where Phi is the cumulative distribution function of a normal distribution with mean 0 and variance 1. (a) Simulate 10 000 realizations from a lognormal distribution with mu = 2 and sigma = 1. (b) Make a histogram using ggplot of the data. If you use geom_histogram, the histogram will plot the counts on the y axis. In order to make a density histogram, you add aes(y=after_stat(density)) in your geom_histogram layer. (c) Compare the theoretical mean with the empirical mean. (d) Show theoretically that Median=e^mu. Test if the theoretical median and the empirical median are close to each other. (e) Show that Median/Mean=e^(-1/2 sigma^2). Explain the intuition of this result.",
    questionHtml: `<p>A random variable \\(X\\) has a lognormal distribution, notation \\(X \\sim LN(\\mu,\\sigma)\\), if \\(\\log X\\) has a normal distribution with mean \\(\\mu\\) and standard deviation \\(\\sigma\\). For a lognormal distribution we have the following information:</p>
      <div class="math-block">\\[E[X]=e^{\\mu+\\frac{1}{2}\\sigma^2}\\]</div>
      <p>and</p>
      <div class="math-block">\\[F_X^{-1}(p)=e^{\\mu+\\sigma\\Phi^{-1}(p)},\\]</div>
      <p>\\(\\Phi\\) is the cumulative distribution function of a normal distribution with mean 0 and variance 1.</p>
      <p>(a) Simulate 10 000 realizations from a lognormal distribution with \\(\\mu=2\\) and \\(\\sigma=1\\).</p>
      <p>(b) Make a histogram using ggplot of the data. If you use <code>geom_histogram</code>, the histogram will plot the counts on the \\(y\\) axis. In order to make a density histogram, you add <code>aes(y=after_stat(density))</code> in your <code>geom_histogram</code> layer.</p>
      <p>(c) Compare the theoretical mean with the empirical mean.</p>
      <p>(d) Show theoretically that</p>
      <div class="math-block">\\[Median=e^\\mu.\\]</div>
      <p>Test if the theoretical median and the empirical median are close to each other.</p>
      <p>(e) Show that</p>
      <div class="math-block">\\[\\frac{Median}{Mean}=e^{-\\frac{1}{2}\\sigma^2}.\\]</div>
      <p>Explain the intuition of this result.</p>`,
    sourceNote: "Source audit: the question asks for 10 000 realizations, but the official solution code uses rnorm(1000, 2, 1). The official solution also labels the final ratio part as Question d although it corresponds to part e.",
    officialSolution: "Question a:\nZ= rnorm(1000, 2, 1)\nX=exp(Z)\nQuestion b:\nlibrary(ggplot2)\nggplot(data= data.frame(X), aes(x=X))\n+ geom_histogram(bins=100, aes(y=after_stat(density)))\nQuestion c:\nmean(X)\n[1] 12.13459\nexp(2+0.5)\n[1]12.18249\nQuestion d: We can write\nMedian = F_X^{-1}(0.5) = e^{mu + sigma Phi^{-1}(0.5)} = e^mu,\nwhere we used that Phi^{-1}(0.5) = 0.\n> median(X)\n[1] 7.407882\n> exp(2)\n[1] 7.389056\nQuestion d: We directly find\nMedian/Mean = e^mu / e^{mu + 1/2 sigma^2} = e^{-1/2 sigma^2}.\nThe median is not affected by larger swings in the data (i.e. larger variance), but the mean is. With a large variance, the two will diverge.",
    officialSolutionHtml: `<p><strong>Question a:</strong></p>
      <pre class="code">Z= rnorm(1000, 2, 1)
X=exp(Z)</pre>
      <p><strong>Question b:</strong></p>
      <pre class="code">library(ggplot2)
ggplot(data= data.frame(X), aes(x=X))
+ geom_histogram(bins=100, aes(y=after_stat(density)))</pre>
      <p><strong>Question c:</strong></p>
      <pre class="code">mean(X)
[1] 12.13459
exp(2+0.5)
[1]12.18249</pre>
      <p><strong>Question d:</strong> We can write</p>
      <div class="math-block">\\[\\operatorname{Median}=F_X^{-1}(0.5)=e^{\\mu+\\sigma\\Phi^{-1}(0.5)}=e^\\mu,\\]</div>
      <p>where we used that \\(\\Phi^{-1}(0.5)=0\\).</p>
      <pre class="code">&gt; median(X)
[1] 7.407882
&gt; exp(2)
[1] 7.389056</pre>
      <p><strong>Question d:</strong> We directly find</p>
      <div class="math-block">\\[\\frac{Median}{Mean}=\\frac{e^\\mu}{e^{\\mu+\\frac{1}{2}\\sigma^2}}=e^{-\\frac{1}{2}\\sigma^2}.\\]</div>
      <p>The median is not affected by larger swings in the data (i.e. larger variance), but the mean is. With a large variance, the two will diverge.</p>`,
    explanation: "The lognormal mean is pulled up by the right tail, while the median is just the exponentiated normal median. That is why Median/Mean equals exp(-sigma^2/2), and the ratio gets smaller as sigma grows."
  },
  {
    id: "t2exam1",
    topic: "summaries",
    topicName: "Summarizing a Data Set",
    source: "Tutorial 2 Exam Questions, Q1",
    difficulty: "medium",
    type: "exam",
    solutionStatus: "unofficial",
    text: "(4 points) Consider the data set Data = {1, 3, 6, 3, 2, 8, 3, 10}. Determine the IQR using the empirical distribution function.",
    explanation: "Unofficial solution: Ordered data: 1,2,3,3,3,6,8,10. With n=8, Q1 is the smallest observation where empirical CDF reaches at least 0.25, so Q1=x2=2. Q3 is x6=6. IQR=6-2=4."
  },
  {
    id: "t2exam2",
    topic: "summaries",
    topicName: "Summarizing a Data Set",
    source: "Tutorial 2 Exam Questions, Q2",
    difficulty: "medium",
    type: "exam",
    solutionStatus: "unofficial",
    text: "Consider a normal distribution X with mean 0 and variance 25. (a) (6 points) Determine the IQR. Hint: You can use Phi^{-1}(0.75)=0.67.",
    explanation: "Unofficial solution: The standard deviation is sigma=5. For a normal distribution, IQR≈1.35 sigma, so IQR≈1.35×5=6.75. Using 0.67 gives IQR=2×0.67×5=6.7."
  }
];

const CARDS = [
  { topic: "ds-crisp", front: "Data science", back: "A scientific field using methods to extract knowledge from a given data set.", source: SOURCES.slides },
  { topic: "ds-crisp", front: "CRISP-DM", back: "Business Understanding, Data Understanding, Data Preparation, Modeling, Evaluation, Deployment.", source: SOURCES.slides },
  { topic: "ds-crisp", front: "Business Understanding", back: "Translate business objectives into data science objectives and define success criteria.", source: SOURCES.slides },
  { topic: "missing", front: "NA vs string 'na'", back: "`NA` is a missing value in R; `'na'` is text unless declared in `na.strings`.", source: SOURCES.rcode },
  { topic: "missing", front: "Mean imputation drawback", back: "It shrinks variance by inserting central values with little deviation from the mean.", source: SOURCES.slides },
  { topic: "missing", front: "Deleting missing observations", back: "Under independence and random missingness, the mean remains unbiased but has larger variance.", source: SOURCES.tut1q },
  { topic: "outliers", front: "Boxplot fences", back: "Outliers are below Q1 - 1.5 IQR or above Q3 + 1.5 IQR.", source: SOURCES.slides },
  { topic: "outliers", front: "High leverage", back: "A point far in the x-direction that can strongly influence a regression line.", source: SOURCES.rcode },
  { topic: "summaries", front: "Median robustness", back: "The median depends on order, so extreme values affect it much less than the mean.", source: SOURCES.slides },
  { topic: "summaries", front: "Empirical CDF", back: "F-hat(x) = number of observations <= x divided by n.", source: SOURCES.slides },
  { topic: "summaries", front: "Normal IQR", back: "For X ~ N(mu, sigma^2), IQR ≈ 1.35 sigma.", source: SOURCES.tut2q },
  { topic: "summaries", front: "Lognormal median", back: "If X ~ LN(mu, sigma), Median(X)=e^mu.", source: SOURCES.tut2q },
  { topic: "transforms", front: "Z-score", back: "Z=(X - mean(X))/sd(X), producing mean 0 and standard deviation 1.", source: SOURCES.slides },
  { topic: "transforms", front: "Min-max scaling", back: "(X-min(X))/(max(X)-min(X)), mapping values to [0,1].", source: SOURCES.slides },
  { topic: "transforms", front: "Log transform", back: "Compresses large positive values and can reduce right skew.", source: SOURCES.rcode },
  { topic: "eda", front: "Column-wise proportions", back: "`prop.table(mytable, 2)` gives proportions within each column/category.", source: SOURCES.rcode },
  { topic: "eda", front: "EDA phase", back: "Exploratory analysis belongs mainly to Data Understanding in CRISP-DM.", source: SOURCES.tut0s },
  { topic: "ds-crisp", front: "CRISP-DM is iterative", back: "Evaluation, new data, missing-value handling, or outlier handling can send you back to Data Understanding or Data Preparation.", source: SOURCES.tut0s },
  { topic: "ds-crisp", front: "Data Understanding vs Data Preparation", back: "Understanding inspects data and problems; Preparation changes raw data into model-ready input.", source: SOURCES.slides },
  { topic: "ds-crisp", front: "Predictive model ethics trap", back: "High prediction accuracy does not prove fairness; variables can encode unfair discrimination or proxy protected traits.", source: SOURCES.tut0s },
  { topic: "ds-crisp", front: "100% data-driven fund risk", back: "A model can exploit small historical patterns at scale, but unexpected regime changes may need human oversight.", source: SOURCES.tut0s },
  { topic: "missing", front: "At least one missing value", back: "For independent missing probability p over n observations: P(at least one missing)=1-(1-p)^n.", source: SOURCES.tut1q },
  { topic: "missing", front: "Deleted observations variance ratio", back: "If S1 uses n1 observations and S2 uses n1+m observations, Var(S1)/Var(S2)=1+m/n1.", source: SOURCES.tut1q },
  { topic: "missing", front: "mean(Data) with NA", back: "In R, mean(Data) returns NA if Data contains NA unless you use non-missing values or na.rm=TRUE.", source: SOURCES.tut1q },
  { topic: "missing", front: "Random imputation warning", back: "Sampling replacement values can preserve one variable's spread while breaking relationships with other variables.", source: SOURCES.rcode },
  { topic: "outliers", front: "Y-outlier vs high leverage", back: "A y-outlier has a large residual; a high-leverage point is far in x and can rotate a regression line.", source: SOURCES.rcode },
  { topic: "outliers", front: "Normal boxplot outlier probability", back: "For normal data, Q1/Q3 are about +/-0.674 sigma, fences are about +/-2.696 sigma, so P(outlier) is about 0.7%.", source: SOURCES.tut2q },
  { topic: "outliers", front: "Multivariate outlier", back: "A point may look ordinary in each one-variable histogram but unusual in the joint scatterplot.", source: SOURCES.rcode },
  { topic: "summaries", front: "Empirical quantile rule", back: "Order the data and use the empirical CDF: choose the observation where the CDF first reaches the target probability.", source: SOURCES.tut2q },
  { topic: "summaries", front: "Normal IQR derivation", back: "Q3=mu+0.674 sigma and Q1=mu-0.674 sigma, so IQR=1.348 sigma, approximately 1.35 sigma.", source: SOURCES.tut2q },
  { topic: "summaries", front: "Lognormal mean", back: "If X~LN(mu,sigma), then E[X]=exp(mu+sigma^2/2).", source: SOURCES.tut2q },
  { topic: "summaries", front: "Lognormal median/mean", back: "Median(X)=exp(mu), so Median/Mean=exp(-sigma^2/2); the right tail pulls the mean above the median.", source: SOURCES.tut2q },
  { topic: "transforms", front: "Z-score sensitivity", back: "Z-scores depend on the mean and standard deviation, so outliers can affect the standardization itself.", source: SOURCES.slides },
  { topic: "transforms", front: "Log transform domain", back: "A basic log transform requires positive values; zeros or negatives need an explicit adjustment and careful interpretation.", source: SOURCES.rcode },
  { topic: "transforms", front: "Distance dominance", back: "In distance-based models, a large-scale variable can dominate before standardization or scaling.", source: SOURCES.rcode },
  { topic: "eda", front: "Churn given international plan", back: "In the course churn data, P(churn | Intl.Plan=no) is about 11.5%, while P(churn | Intl.Plan=yes) is about 42.4%.", source: SOURCES.datasets },
  { topic: "eda", front: "Eve.Charge by churn", back: "The churn EDA compares Eve.Charge distributions by Churn using histograms/boxplots before drawing modeling conclusions.", source: SOURCES.rcode }
];

const MEDIA_LINKS = [
  { label: "Week 1 self-study video 1", url: "https://www.youtube.com/watch?v=99Ib86Eyl_0&feature=youtu.be", status: "linked" },
  { label: "Week 1 self-study video 2", url: "https://www.youtube.com/watch?v=5O4GzKuHrrQ", status: "linked" },
  { label: "Week 1 self-study video 3", url: "https://www.youtube.com/watch?v=XCjRp0yFHoM", status: "linked" },
  { label: "R tutorials playlist", url: "https://www.youtube.com/watch?v=qQ9r_JZSBpw&list=PLAcnNB-Z5D0yWaKfr5WyChuvBFZ_0f4Z2", status: "linked" }
];

const CHURN_EDA = {
  source: "Part1/churn.txt via Part1/RCode_Part_1.R",
  n: 3333,
  churnCounts: { False: 2850, True: 483 },
  intlPlanCounts: { no: 3010, yes: 323 },
  intlPlanByChurn: {
    no: { False: 2664, True: 346 },
    yes: { False: 186, True: 137 }
  },
  conditionalChurn: {
    no: { False: 0.8850498338870432, True: 0.11495016611295682 },
    yes: { False: 0.5758513931888545, True: 0.4241486068111455 }
  },
  eveChargeByChurn: {
    False: { n: 2850, min: 0, q1: 13.98, median: 16.97, mean: 16.91890877192982, q3: 19.82, max: 30.75 },
    True: { n: 483, min: 6.03, q1: 15.055, median: 17.96, mean: 18.054968944099368, q3: 21.205, max: 30.91 }
  }
};
