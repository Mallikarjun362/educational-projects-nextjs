export const list_explorations = [
    "Artificial Intelligence",
    "Data Analysis",
    "Data Visualization",
    "Natural Language processing",
    "Computer Vision",
    "Deep Learning",
    "Machine Learning",
    "Reinforcement Learning",
    "Federated Learning",
    "Information Retrieval",
].map((ele, idx) => ({
    unique_ID: idx,
    title: ele
})).sort(function (a, b) {
    if (a.title < b.title) {
        return -1;
    }
    if (a.title > b.title) {
        return 1;
    }
    return 0;
});

export const motivation = [
    "Hobbies", "Interests", "Passions", "Research", ""
]