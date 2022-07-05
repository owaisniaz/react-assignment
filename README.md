# Getting Started

- Please read the INSTRUCTIONS.md first
- For any questions around Create React App (CRA), reference
  CRA_DOCUMENTATION.md

# Code and Design Decisions

- I make the fake API where I store all related data of Application and using a 3rd party module axios for fetching data from this API the link is `https://mocki.io/v1/e4d92915-fbe3-4588-8ea7-7b88794d2632`,
- I designed the reusable component name CustomCard, a customized card of bootstrap that gets parameter that comes from fake api, axios
- MainContainer contains N cards mapped using .map() in a flexbox container where N is the number of objects(listed properties) fetched from fake API

<!-- Please document your code & design decisions here. -->
