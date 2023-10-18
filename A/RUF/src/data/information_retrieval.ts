/* 
* Entity Type : University course
* Entity Universival Identifier : Information retrieval
* 
*/
const course_code = "DS501";
const course_title = "Information Retrieval";
const course_purpose_subtitle = "Building large-scale efficient search engines.";
const university = "IIT Bhilai";
const user_name = "Mallikarjun";
const course_background_wallpaper = { url: "https://images.wallpapersden.com/image/download/uk-glacial-lake-wales_ZmpuaG6UmZqaraWkpJRnZWltrWZnaWg.jpg" };
const tags = [
    "Database Management Systems (DBMS)",
    "Machine Learning (ML)",
    "Natural Language Processing (NLP)",
    'search-algorithms',
    'query-processing',
    'indexing',
    'information-filtering',
    'ranking-and-relevance',
    'text-classification',
    'natural-language-processing',
    'machine-learning',
    'information-extraction',
    'data-mining',
    'web-search',
    'document-retrieval',
    'information-retrieval-models',
    'retrieval-evaluation',
    'user-interfaces',
    'search-visualization'
];
const course_description = [
    "Information retrieval is the process through which a computer system can respond to a user's query for text-based information on a specific topic. IR was one of the first and remains one of the most important problems in the domain of natural language processing (NLP). Web search is the application of information retrieval techniques to the largest corpus of text anywhere — the web — and it is the context where many people interact with IR systems most frequently.",
    "Information retrieval is an interdisciplinary field that combines computer science, information science, and linguistics to develop algorithms and techniques for the efficient and effective retrieval of relevant information from large collections of data. The goal of information retrieval is to help users find the information they need quickly and accurately, regardless of the format or location of the data.",
    "Information retrieval systems rely on a combination of indexing techniques, search algorithms, and relevance ranking methods to retrieve relevant information from large collections of data. These systems are used in a wide range of applications, including search engines, digital libraries, e-commerce platforms, and data mining.",
    "Some of the key topics in information retrieval include query processing, text classification, natural language processing, machine learning, information extraction, web search, document retrieval, and user interfaces. Researchers in the field of information retrieval strive to develop new techniques and algorithms that improve the accuracy, speed, and scalability of information retrieval systems, while also considering the ethical implications of the use of personal data and the impact of information retrieval on society."
];
const course_objectives = [
    "Studying the scientific methods in the field of information search and retrieval.",
    "Explores the fundamental relationship between information retrieval, hypermedia architectures, and semantic models.",
    "Deploying and testing several important retrieval models such as vector space, Boolean and query expansion.",
    "discusses implementation and evaluation issues of new algorithms like clustering, pattern searching, and stemming with advanced data/file structures."
];
const subject_objectives = {
    'Retrieval of relevant information': "he primary objective of information retrieval is to retrieve relevant information based on a user's query or search request.",
    'Efficient retrieval': "Another important objective of information retrieval is to retrieve relevant information quickly and efficiently. This requires the development of efficient search algorithms and indexing techniques.",
    'Scalability': "Information retrieval systems need to be scalable to handle large volumes of data and support a large number of users.",
    'Precision and recall': "Information retrieval systems aim to achieve high precision and recall rates. Precision measures the proportion of relevant documents retrieved from the total number of retrieved documents, while recall measures the proportion of relevant documents retrieved from the total number of relevant documents in the collection.",
    'User satisfaction': "Ultimately, the success of an information retrieval system depends on user satisfaction. A good information retrieval system should provide users with the information they need in a timely and accurate manner.",
    'Personalization': "Many modern information retrieval systems aim to provide personalized search results based on a user's preferences, interests, and search history.",
    'Continuous improvement': "Information retrieval systems should be continually improved through user feedback and analytics to better serve the needs of users.",
};
const terms_vocabulary_dictionary_appendex = {
    "Query": "A user's request for information from an information retrieval system.",
    "Document": "A unit of information that can be retrieved by an information retrieval system. This can be a web page, text file, image, or other type of data.",
    "Indexing": "The process of creating an index, which is a data structure that maps terms or concepts to their location in a collection of documents.",
    "Search algorithm": "A set of rules or procedures used by an information retrieval system to retrieve relevant documents from a collection of data.",
    "Relevance": "A measure of how well a document matches a user's query or information needs.",
    "Ranking": "The process of ordering search results based on their relevance to a user's query.",
    "Precision": "A measure of the proportion of relevant documents retrieved by a search algorithm.",
    "Recall": "A measure of the proportion of relevant documents in a collection that are retrieved by a search algorithm.",
    "Stop words": "Commonly used words (such as \"the\" and \"and\") that are excluded from searches because they are unlikely to help identify relevant documents.",
    "Stemming": "The process of reducing words to their root form to improve search results.",
    "Natural Language Processing (NLP)": "The use of computational techniques to analyze and understand human language.",
    "Machine learning": "A branch of artificial intelligence that involves developing algorithms that can learn from and make predictions based on data.",
    "Information extraction": "The process of automatically identifying and extracting structured information from unstructured or semi-structured data.",
    "Web crawler": "A program that automatically traverses the web to collect information from web pages.",
    "User interface": "The part of an information retrieval system that allows users to interact with the system, typically through a web browser or mobile app."
}



const ir_data = {
    course_code,
    course_title,
    course_purpose_subtitle,
    course_background_wallpaper,
    tags,
    course_description: course_description[0],
    course_objectives,
    terms_vocabulary_dictionary_appendex,
}

export default ir_data;