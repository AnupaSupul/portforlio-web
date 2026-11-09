export const researchData = {
  headline: "Rice Leaf Disease Detection via Deep Learning",
  status: "Active Research & Model Validation",
  affiliation: "University of Ruhuna — Department of Computer Science",
  metrics: [
    { label: "Validation Accuracy", value: 95.27, unit: "%", caption: "Brown Spot classification on field data" },
    { label: "Test Accuracy", value: 92.62, unit: "%", caption: "Unseen real-world testing samples" },
    { label: "Dataset Split", value: "70 / 20 / 10", unit: "", caption: "Train / Validation / Test distribution" },
    { label: "Model Architecture", value: "VGG19", unit: "", caption: "Benchmarked against VGG16 & Custom CNN" }
  ],
  pipeline: [
    {
      step: "01",
      title: "Data Acquisition",
      desc: "Curating a dedicated real-world dataset of rice leaves under variable agricultural light and field conditions."
    },
    {
      step: "02",
      title: "Preprocessing & Augmentation",
      desc: "Resolution normalization, noise filtration, rotation, and brightness adjustments to ensure model invariance."
    },
    {
      step: "03",
      title: "Architecture Comparison",
      desc: "Training and comparing VGG16, VGG19, Custom CNN, and hybrid CNN+SVM pipelines for feature extraction."
    },
    {
      step: "04",
      title: "Validation & Deployment",
      desc: "Achieving 95.27% validation accuracy; operationalizing the model into a responsive web application for field use."
    }
  ],
  benchmarks: [
    { model: "VGG19 (Selected)", valAcc: "95.27%", testAcc: "92.62%", params: "143.6M", status: "Top Accuracy" },
    { model: "VGG16", valAcc: "93.80%", testAcc: "90.15%", params: "138.3M", status: "High Generalization" },
    { model: "Custom CNN", valAcc: "89.40%", testAcc: "87.20%", params: "4.2M", status: "Lightweight" },
    { model: "CNN + SVM", valAcc: "91.10%", testAcc: "88.50%", params: "6.8M", status: "Hybrid Margin" }
  ],
  publications: [
    {
      title: "Identification of Brown Spot Leaf Disease Using Machine Learning",
      venue: "4th Applied Sciences Undergraduate Research Symposium (APSURS 2025)",
      institution: "Sabaragamuwa University of Sri Lanka",
      date: "November 2025",
      type: "Published Research Paper",
      link: "https://scholar.google.com/scholar?q=Brown+Spot+Leaf+Disease+Machine+Learning+Anupa+Supul"
    },
    {
      title: "Machine Learning and Deep Learning-Based Approaches for Rice Leaf Disease Detection in Sri Lanka",
      venue: "RITSCON 2026",
      institution: "University of Ruhuna",
      date: "February 2026",
      type: "Presented & Published Paper",
      link: "https://scholar.google.com/scholar?q=Rice+Leaf+Disease+Detection+Sri+Lanka+Anupa+Supul"
    },
    {
      title: "Rice Plant Leaf Disease Image Dataset",
      venue: "Open Academic Release",
      institution: "Department of Computer Science, University of Ruhuna",
      date: "Planned: December 2026",
      type: "Upcoming Research Dataset",
      link: "#"
    }
  ]
};

